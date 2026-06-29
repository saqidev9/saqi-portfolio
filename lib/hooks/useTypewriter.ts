"use client";

import { useEffect, useState } from "react";

interface Line {
  prompt: string;
  response: string;
}

interface TypewriterState {
  visibleLines: { prompt: string; response: string; promptDone: boolean }[];
  done: boolean;
}

/**
 * Types out a sequence of terminal lines (prompt then response), one
 * character at a time, advancing to the next line once the current one
 * finishes. Returns the lines completed so far plus in-progress text.
 */
export function useTypewriter(lines: Line[], speed = 28, startDelay = 300) {
  const [state, setState] = useState<TypewriterState>({
    visibleLines: [],
    done: false,
  });

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setState({
        visibleLines: lines.map((l) => ({
          prompt: l.prompt,
          response: l.response,
          promptDone: true,
        })),
        done: true,
      });
      return;
    }

    let lineIndex = 0;
    let charIndex = 0;
    let typingPrompt = true;
    let timeoutId: ReturnType<typeof setTimeout>;
    let cancelled = false;

    function tick() {
      if (cancelled || lineIndex >= lines.length) {
        setState((s) => ({ ...s, done: true }));
        return;
      }

      const current = lines[lineIndex];
      const target = typingPrompt ? current.prompt : current.response;
      charIndex++;

      setState((prev) => {
        const next = [...prev.visibleLines];
        const partial = target.slice(0, charIndex);
        next[lineIndex] = typingPrompt
          ? { prompt: partial, response: "", promptDone: false }
          : { prompt: current.prompt, response: partial, promptDone: true };
        return { visibleLines: next, done: false };
      });

      if (charIndex >= target.length) {
        if (typingPrompt) {
          typingPrompt = false;
          charIndex = 0;
          timeoutId = setTimeout(tick, 350);
        } else {
          lineIndex++;
          typingPrompt = true;
          charIndex = 0;
          timeoutId = setTimeout(tick, 450);
        }
      } else {
        timeoutId = setTimeout(tick, speed);
      }
    }

    timeoutId = setTimeout(tick, startDelay);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}
