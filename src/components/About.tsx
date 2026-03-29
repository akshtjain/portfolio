const experience = [
  {
    role: "Founder",
    company: "Ekly.ai",
    location: "Remote",
    period: "2026 — Present",
    highlights: [
      "Building full-stack AI video platform — timeline editor, agentic editing, auto shorts creator",
      "Claude-powered editor with 11 integrated tools for natural language video control",
      "LangGraph-based script generation pipeline with AI video gen, voice cloning, and Remotion rendering",
      "Multi-tenant SaaS architecture with Stripe billing, SSR + Lambda render pipeline",
    ],
    tech: "Next.js · FastAPI · Remotion · Claude AI · LangGraph · AWS · GCP · PostgreSQL",
  },
  {
    role: "Engineering Lead",
    company: "Canvas Plus",
    location: "Dubai, UAE",
    period: "2025 — 2026",
    highlights: [
      "Built CRM + cloud dialer from scratch — migrated 4 call centers (300 users) from landlines",
      "Architected monolithic backend with 12+ integrated services and 30+ database tables",
      "Shipped AI-powered sales assistant for live customer rebuttal coaching",
      "Stood up full observability stack: OpenTelemetry + self-hosted SigNoz on AWS",
    ],
    tech: "FastAPI · PostgreSQL · AWS · React · SQLAlchemy · OpenTelemetry",
  },
  {
    role: "Software Engineer 2",
    company: "Rippling",
    location: "Bangalore, India",
    period: "2022 — 2025",
    highlights: [
      "Migrated Rippling's payment infra from SVB to JPMC over a single weekend during the SVB collapse",
      "Sole developer on JPMC payment rails integration — wires and ACH end-to-end",
      "Expanded global wire coverage from USD to GBP, AUD, BRL, EUR with extensible frameworks",
      "Built RBAC system for core internal tool used by every engineer at Rippling",
    ],
    tech: "Python · React · PostgreSQL · Payment Rails · CI/CD",
  },
  {
    role: "Software Engineer Intern",
    company: "BNY Mellon",
    location: "Remote",
    period: "2022",
    highlights: [
      "Built dynamic mobile-responsive web applications in Angular",
      "Developed RESTful web services with Spring Boot",
    ],
    tech: "Angular · Spring Boot · JavaScript",
  },
];

const skillCategories = [
  { label: "Languages", items: "Python, TypeScript, Go, Java, C++" },
  { label: "Backend", items: "FastAPI, Django, Spring Boot, Node.js" },
  { label: "Frontend", items: "React, Next.js, Flutter, Tailwind" },
  { label: "Cloud & Data", items: "AWS, PostgreSQL, MongoDB, Redis" },
  { label: "AI / ML", items: "GenAI, Deep Learning, Prompt Engineering" },
  { label: "Tools", items: "Git, Docker, CI/CD, OpenTelemetry" },
];

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-serif italic text-4xl text-fg md:text-5xl">
          Experience
        </h2>

        <div className="mt-16">
          {experience.map((exp) => (
            <div
              key={exp.company}
              className="grid grid-cols-1 gap-2 border-t border-line py-10 md:grid-cols-[180px_1fr] md:gap-12"
            >
              <p className="text-sm text-muted">{exp.period}</p>
              <div>
                <h3 className="text-lg font-medium text-fg">{exp.role}</h3>
                <p className="mt-0.5 text-sm text-muted">
                  {exp.company}, {exp.location}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs tracking-wide text-muted-light">
                  {exp.tech}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-line" />
        </div>

        {/* Skills */}
        <div className="mt-20">
          <h2 className="font-serif italic text-4xl text-fg md:text-5xl">
            Skills
          </h2>
          <div className="mt-10 space-y-3">
            {skillCategories.map((cat) => (
              <p key={cat.label} className="text-sm text-muted">
                <span className="inline-block w-28 font-medium text-accent">
                  {cat.label}
                </span>
                {cat.items}
              </p>
            ))}
          </div>
        </div>

        {/* Education & Recognition */}
        <div className="mt-20 grid grid-cols-1 gap-16 border-t border-line pt-10 md:grid-cols-2">
          <div>
            <h3 className="font-serif italic text-2xl text-fg">Education</h3>
            <div className="mt-4">
              <p className="font-medium text-fg">
                Delhi Technological University
              </p>
              <p className="mt-1 text-sm text-muted">
                B.Tech in Mathematics &amp; Computing
              </p>
              <p className="text-sm text-muted">2018 — 2022 · CGPA 8.51</p>
            </div>
          </div>
          <div>
            <h3 className="font-serif italic text-2xl text-fg">Recognition</h3>
            <div className="mt-4 space-y-2 text-sm text-muted">
              <p>
                <span className="text-fg">ICPC 2020&#8209;21</span> — Regionals
                Rank 124
              </p>
              <p>
                <span className="text-fg">Codeforces</span> — Candidate Master
                (1917)
              </p>
              <p>
                <span className="text-fg">VP, MACS&#8209;DTU</span> — Math
                &amp; Computing Society
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
