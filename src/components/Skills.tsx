const skills = [
  "React Native",
  "JavaScript",
  "TypeScript",
  "React JS",
  "Redux",
  "Redux Saga",
  "Redux Toolkit",
  "GraphQL",
  "Context API",
  "React Query",
  "React Hook Forms",
  "Node.js",
  ".NET / C#",
  "Firebase",
  "Google Maps",
  "Sockets",
  "Push Notifications",
  "In-App Purchases",
  "Agora Video Call",
  "Async Storage / MMKV",
  "One Signal",
  "Fintech",
  "Legacy RN Migrations",
  "HTML / CSS",
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-12">
      <h2 className="mb-8 text-2xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border bg-bg-card px-3.5 py-1.5 text-xs text-text-muted transition-colors hover:border-accent hover:text-text"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
