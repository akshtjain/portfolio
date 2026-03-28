const stats = [
  { value: "4+", label: "Years shipping production code" },
  { value: "300+", label: "Users migrated to cloud" },
  { value: "5", label: "Global currency rails" },
  { value: "12+", label: "Services architected" },
];

const experience = [
  {
    role: "Founder",
    company: "Ekly.ai",
    location: "Remote",
    period: "Mar 2026 - Present",
    highlights: [
      "Building full-stack AI video platform — timeline editor, agentic editing, auto shorts creator",
      "Claude-powered editor with 11 integrated tools for natural language video control",
      "LangGraph-based script generation pipeline with AI video gen, voice cloning, and Remotion rendering",
      "Multi-tenant SaaS architecture with Stripe billing, SSR + Lambda render pipeline",
    ],
    tech: ["Next.js", "FastAPI", "Remotion", "Claude AI", "LangGraph", "AWS", "GCP", "PostgreSQL"],
  },
  {
    role: "Engineering Lead",
    company: "Canvas Plus",
    location: "Dubai, UAE",
    period: "Feb 2025 - Mar 2026",
    highlights: [
      "Built CRM + cloud dialer from scratch — migrated 4 call centers (300 users) from landlines",
      "Architected monolithic backend with 12+ integrated services and 30+ database tables",
      "Shipped AI-powered sales assistant for live customer rebuttal coaching",
      "Stood up full observability stack: OpenTelemetry + self-hosted SigNoz on AWS",
    ],
    tech: ["FastAPI", "PostgreSQL", "AWS", "React", "SQLAlchemy", "OpenTelemetry"],
  },
  {
    role: "Software Engineer 2",
    company: "Rippling",
    location: "Bangalore, India",
    period: "Jun 2022 - Feb 2025",
    highlights: [
      "Migrated Rippling's payment infra from SVB to JPMC over a single weekend during the SVB collapse",
      "Sole developer on JPMC payment rails integration — wires and ACH end-to-end",
      "Expanded global wire coverage from USD to GBP, AUD, BRL, EUR with extensible frameworks",
      "Built RBAC system for core internal tool used by every engineer at Rippling",
    ],
    tech: ["Python", "React", "PostgreSQL", "Payment Rails", "CI/CD"],
  },
  {
    role: "Software Engineer Intern",
    company: "BNY Mellon",
    location: "Remote",
    period: "Jan 2022 - Jun 2022",
    highlights: [
      "Built dynamic mobile-responsive web applications in Angular",
      "Developed RESTful web services with Spring Boot",
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

        {/* Impact metrics */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card-glow rounded-xl border border-card-border bg-card p-5 text-center"
            >
              <p className="text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="mt-1 font-mono text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Experience timeline */}
        <div className="mt-16 space-y-12">
          {experience.map((exp) => (
            <div
              key={exp.company}
              className="group relative border-l-2 border-card-border pl-8 transition-colors hover:border-accent"
            >
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-card-border bg-background transition-colors group-hover:border-accent group-hover:bg-accent/20" />
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
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-card-border bg-card px-3 py-1 font-mono text-xs text-muted"
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
          <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill.category}>
                <h4 className="font-mono text-sm font-medium text-accent">
                  {skill.category}
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-card-border px-3 py-1 text-sm text-muted transition-colors hover:border-accent/40 hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Achievements */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2">
          <div className="card-glow rounded-xl border border-card-border bg-card p-6">
            <h4 className="font-mono text-sm text-accent">Education</h4>
            <p className="mt-3 text-lg font-semibold text-foreground">
              Delhi Technological University
            </p>
            <p className="text-sm text-muted">
              B.Tech in Mathematics & Computing
            </p>
            <p className="mt-1 font-mono text-sm text-muted">
              2018 - 2022 | CGPA: 8.51
            </p>
          </div>
          <div className="card-glow rounded-xl border border-card-border bg-card p-6">
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
