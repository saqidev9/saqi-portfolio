export const projects = [
  {
    title: "Student Reporting System",
    flagship: true,
    description:
      "A role-based full-stack platform for academic institutions to track and manage daily student reports.",
    problem:
      "Institutions need a structured way for students to submit progress reports, and for admins to review, approve, and manage them at scale across batches, courses, and groups.",
    solution:
      "Built a full authentication system with student and admin roles, a REST API backend, and admin tooling to approve or reject reports and manage students, batches, courses, and groups.",
    impact:
      "Replaced manual report tracking with a structured digital workflow supporting multi-role access control.",
    tech: ["React.js", "Node.js", "Express.js", "REST APIs", "JWT Auth"],
    links: { code: null as string | null, demo: null as string | null },
  },
  {
    title: "Student Management System",
    flagship: false,
    description: "A React-based interface for managing student records.",
    note: "Frontend prototype — backend integration planned before launch.",
    tech: ["React.js", "Vite", "JavaScript", "CSS"],
    links: {
      code: "https://github.com/saqidev9/student-management-system" as string | null,
      demo: null as string | null,
    },
  },
];
