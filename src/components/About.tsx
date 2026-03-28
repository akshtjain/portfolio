const experience = [
  {
    role: "Engineering Lead",
    company: "Canvas Plus",
    location: "Dubai, UAE",
    period: "Feb 2025 - Mar 2026",
    highlights: [
      "Built a CRM and Cloud Dialer from scratch, migrating 4 call centers (300 users) from landline to system-based calling",
      "Designed a monolithic backend with 12+ integrated services and 30+ tables",
      "Developed an AI-powered sales assistant for live customer rebuttal feedback",
      "Established observability with OpenTelemetry + self-hosted SigNoz on AWS",
    ],
    tech: ["FastAPI", "PostgreSQL", "AWS", "React", "SQLAlchemy", "OpenTelemetry"],
  },
  {
    role: "Software Engineer 2",
    company: "Rippling",
    location: "Bangalore, India",
    period: "Jun 2022 - Feb 2025",
    highlights: [
      "Orchestrated migration of payment infrastructure from SVB to JPMC over a weekend during the SVB collapse",
      "Led integration of payment rails (wires, ACH) with JPMC as sole developer",
      "Expanded global wire coverage from USD to GBP, AUD, BRL, EUR with extensible frameworks",
      "Built access control system for core internal tool used by every engineer at Rippling",
    ],
    tech: ["Python", "React", "PostgreSQL", "Payment Rails", "CI/CD"],
  },
  {
    role: "Software Engineer Intern",
    company: "BNY Mellon",
    location: "Remote",
    period: "Jan 2022 - Jun 2022",
    highlights: [
      "Developed dynamic mobile responsive web pages using Angular",
      "Built RESTful web services in Spring Boot",
    ],
    tech: ["Angular", "Spring Boot", "JavaScript"],
  },
];

const skills = [
  { category: "Languages", items: ["Python", "TypeScript", "Go", "Java", "C++"] },
  { category: "Backend", items: ["FastAPI", "Django", "Spring Boot", "Node.js"] },
  { category: "Frontend", items: ["React", "Next.js", "Flutter", "Tailwind"] },
  { category: "Cloud & Data", items: ["AWS", "PostgreSQL", "MongoDB", "Redis"] },
  { category: "AI/ML", items: ["GenAI", "Deep Learning", "Prompt Engineering"] },
  { category: "Tools", items: ["Git", "Docker", "CI/CD", "OpenTelemetry"] },
];

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-mono text-sm text-accent">// about</h2>
        <h3 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
          Where I&apos;ve worked
        </h3>

        {/* Experience timeline */}
        <div className="mt-12 space-y-12">
          {experience.map((exp) => (
            <div
              key={exp.company}
              className="group relative border-l-2 border-card-border pl-8 transition-colors hover:border-accent"
            >
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-card-border bg-background transition-colors group-hover:border-accent" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-foreground">
                    {exp.role}
                  </h4>
                  <p className="font-mono text-sm text-accent">
                    {exp.company}{" "}
                    <span className="text-muted">/ {exp.location}</span>
                  </p>
                </div>
                <p className="font-mono text-sm text-muted">{exp.period}</p>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-card px-3 py-1 font-mono text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold tracking-tight text-foreground">
            Skills & Tools
          </h3>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill.category}>
                <h4 className="font-mono text-sm font-medium text-accent">
                  {skill.category}
                </h4>
                <ul className="mt-2 space-y-1">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Achievements */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2">
          <div className="rounded-xl border border-card-border bg-card p-6">
            <h4 className="font-mono text-sm text-accent">Education</h4>
            <p className="mt-3 text-lg font-semibold text-foreground">
              Delhi Technological University
            </p>
            <p className="text-sm text-muted">
              B.Tech in Mathematics & Computing
            </p>
            <p className="font-mono text-sm text-muted">
              2018 - 2022 | CGPA: 8.51
            </p>
          </div>
          <div className="rounded-xl border border-card-border bg-card p-6">
            <h4 className="font-mono text-sm text-accent">Achievements</h4>
            <ul className="mt-3 space-y-2">
              <li className="text-sm text-muted">
                <span className="font-medium text-foreground">ICPC 2020-21</span>{" "}
                — Regionals Rank 124
              </li>
              <li className="text-sm text-muted">
                <span className="font-medium text-foreground">Codeforces</span>{" "}
                — Candidate Master (1917)
              </li>
              <li className="text-sm text-muted">
                <span className="font-medium text-foreground">VP, MACS-DTU</span>{" "}
                — Math & Computing Society
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
