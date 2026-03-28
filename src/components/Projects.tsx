const projects = [
  {
    title: "Ekly.ai",
    description:
      "Building a full-stack AI-powered video editing and creation platform. Features a professional timeline editor, Claude-powered agentic editor for natural language video editing, auto shorts creator with LangGraph-based script generation, voice cloning, AI image/video generation (Kling AI, Gemini), and Remotion-based rendering (SSR + Lambda). Multi-tenant SaaS with Stripe billing and credit-based usage.",
    tech: ["Next.js", "FastAPI", "Remotion", "Claude AI", "LangGraph", "AWS", "GCP", "PostgreSQL", "Celery"],
    link: "https://ekly.ai",
    featured: true,
  },
  {
    title: "CRM & Cloud Dialer",
    description:
      "Built a full CRM and cloud dialer from scratch at Canvas Plus, migrating 4 call centers (300 users) from landlines to a system-based solution with integrated PBX, AI-powered sales assistant, and post-call analytics.",
    tech: ["FastAPI", "PostgreSQL", "React", "AWS", "OpenTelemetry", "AI/ML"],
    link: null,
    featured: true,
  },
  {
    title: "SVB to JPMC Payment Migration",
    description:
      "Orchestrated the emergency migration of Rippling's entire payment infrastructure from SVB to JPMC over a weekend during the SVB collapse. Subsequently led the integration of global payment rails (wires, ACH) across USD, GBP, AUD, BRL, and EUR.",
    tech: ["Python", "Payment Rails", "Wires", "ACH", "JPMC"],
    link: null,
    featured: true,
  },
  {
    title: "Trupeer AI",
    description:
      "Go application leveraging GPT-4 Vision to generate tutorial videos from documents, with a Next.js frontend for the user interface.",
    tech: ["Go", "Next.js", "GPT-4 Vision", "AI"],
    link: null,
    featured: true,
  },
  {
    title: "Smart Samadhan",
    description:
      "Production-grade SaaS for attendance and payroll management featuring face recognition-based attendance using Flutter, FastAPI, and PostgreSQL.",
    tech: ["Flutter", "FastAPI", "PostgreSQL", "Face Recognition"],
    link: null,
    featured: false,
  },
  {
    title: "Pathfinding Visualizer",
    description:
      "Interactive visualization of pathfinding algorithms including Dijkstra's, A*, BFS, and DFS with animated grid exploration.",
    tech: ["JavaScript", "React", "Algorithms"],
    link: "https://github.com/akshtjain/Pathfinding-Visualizer",
    featured: false,
  },
  {
    title: "UnifyChats",
    description:
      "Monorepo for a unified chat platform bringing multiple messaging services together in one interface.",
    tech: ["TypeScript", "Monorepo"],
    link: "https://github.com/akshtjain/unifychatsmono",
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-mono text-sm text-accent">// projects</h2>
        <h3 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
          Things I&apos;ve built
        </h3>

        {/* Featured projects */}
        <div className="mt-12 space-y-8">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <div
                key={project.title}
                className="group rounded-xl border border-card-border bg-card p-8 transition-all hover:border-accent/30 hover:bg-card-hover"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="text-xl font-semibold text-foreground">
                        {project.title}
                      </h4>
                      <span className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-xs text-accent">
                        Featured
                      </span>
                    </div>
                    <p className="mt-3 leading-relaxed text-muted">
                      {project.description}
                    </p>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-muted transition-colors hover:text-accent"
                      aria-label={`View ${project.title}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-background px-3 py-1 font-mono text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Other projects grid */}
        <h4 className="mt-16 text-xl font-semibold text-foreground">
          Other projects
        </h4>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <div
                key={project.title}
                className="group flex flex-col rounded-xl border border-card-border bg-card p-6 transition-all hover:border-accent/30 hover:bg-card-hover"
              >
                <div className="flex items-start justify-between">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent"
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted transition-colors hover:text-accent"
                      aria-label={`View ${project.title}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
                <h5 className="mt-4 text-lg font-semibold text-foreground">
                  {project.title}
                </h5>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
