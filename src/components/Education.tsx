const certs = [
  "Geekle.us Tech Speaker Certificate",
  "ACCP Pro — Web & Mobile App Development",
  "30 Days of Code",
  "Best Performer Award — Cubix (June 2021)",
  "Always at 110% — Recognition Award",
];

export default function Education() {
  return (
    <section id="education" className="border-t border-border py-12">
      <h2 className="mb-8 text-2xl font-bold">Education &amp; Certifications</h2>

      <div className="mb-6">
        <h3 className="text-base font-semibold">
          Bachelor&apos;s in Computer Software Engineering
        </h3>
        <p className="text-sm text-text-muted">
          Dadabhouy Institute of Higher Education (DIHE) · 2017 — 2021
        </p>
      </div>

      <div>
        <h3 className="mb-2 text-base font-semibold">Certifications &amp; Awards</h3>
        <ul className="space-y-1">
          {certs.map((cert) => (
            <li key={cert} className="text-sm text-text-muted">
              <span className="mr-2 text-accent">~</span>
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
