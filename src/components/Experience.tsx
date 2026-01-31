const experiences = [
  {
    date: "2024 — Present",
    title: "Product Development Engineer (Manager II)",
    company: "HBL — Habib Bank Limited",
    description:
      "Working on HBL's international banking apps for UAE, Maldives, Bangladesh, Sri Lanka, and Bahrain. Upgraded 5 apps from RN 0.63 to 0.81. Implementing secure data transmission, code obfuscation, and engineering best practices.",
  },
  {
    date: "2022 — Present",
    title: "Senior Software Engineer",
    company: "eTijwaal",
    description:
      "Maintaining an eSIM mobile app with 10,000+ downloads. Modernized from RN 0.71 to 0.81. Daily performance optimization and feature development.",
  },
  {
    date: "2022 — 2024",
    title: "Senior Software Engineer",
    company: "KoderLabs",
    description:
      "Improved code quality of critical applications using GraphQL, Context API, Redux Toolkit, and TypeScript. Led team toward company goals.",
  },
  {
    date: "2022 — 2022",
    title: "Lead Mobile Apps",
    company: "Codevative",
    description:
      "Built two Magento-based e-commerce apps from scratch. Led React Native and React JS teams. Implemented chat and calling features for a Doctor/Patient app.",
  },
  {
    date: "2019 — 2022",
    title: "Associate → Junior → Software Engineer",
    company: "Cubix",
    description:
      "Built advanced mobile apps for iOS and Android. Worked on a white-label delivery app with live tracking. Won best performer award (June 2021). Deployed apps to both stores.",
  },
  {
    date: "2018 — 2019",
    title: "Frontend Developer",
    company: "Dany Technologies",
    description:
      "Built websites with React JS and WordPress. ERP consulting for multiple clients across sales, POS, inventory, and HR modules.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border py-12">
      <h2 className="mb-8 text-2xl font-bold">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.date + exp.company}
            className="grid grid-cols-1 gap-1 sm:grid-cols-[9rem_1fr] sm:gap-4"
          >
            <span className="font-mono text-xs text-text-muted pt-0.5">
              {exp.date}
            </span>
            <div>
              <h3 className="text-base font-semibold">{exp.title}</h3>
              <p className="text-sm text-accent">{exp.company}</p>
              <p className="mt-1 text-sm leading-relaxed text-text-muted">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
