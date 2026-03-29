const projects = [
  {
    title: "LoanPilot",
    description:
      "AI-powered financial document analysis — PDFs, Excel, and images via OCR. LLM-hybrid pipeline using Claude for loan data extraction with interactive charts and bank analysis dashboards.",
    tech: "Next.js · Claude API · Tesseract OCR · Recharts · Supabase",
    link: null,
  },
  {
    title: "Image Search at 10B Scale",
    description:
      "Multi-modal product search using OpenCLIP embeddings and FAISS vector similarity at 10 billion scale. Async Python backend with Redis caching and optional GPU acceleration.",
    tech: "FastAPI · PyTorch · OpenCLIP · FAISS · Redis · AsyncPG",
    link: null,
  },
  {
    title: "AI Chat Navigator",
    description:
      "Browser extension that adds floating index navigation to ChatGPT, Claude, Gemini, and Grok. Full-text search across providers, cross-device bookmark sync, and conversation export.",
    tech: "Next.js · Convex · Chrome Manifest V3 · Clerk · TypeScript",
    link: null,
  },
  {
    title: "SmartSamadhan",
    description:
      "Production HR suite with face-recognition attendance via Azure Face API. Multi-platform apps in React Native and Flutter, payroll calculation, leave management, and FCM push notifications.",
    tech: "FastAPI · React Native · Flutter · Azure Face API · PostgreSQL",
    link: "https://smartsamadhan.com",
  },
  {
    title: "ChronoForge",
    description:
      "Cross-platform scheduling app with RPG gamification — glassmorphism UI, real-time WebSocket updates, haptic feedback, and a full PostgreSQL backend with Drizzle ORM.",
    tech: "React Native · Expo · Express · Drizzle ORM · PostgreSQL · WebSocket",
    link: null,
  },
  {
    title: "Geopolitics",
    description:
      "Real-time multiplayer strategy game with an AI-powered advisor built on Claude. Firebase backend, Motion animations, and dynamic game board rendering.",
    tech: "React · Vite · Firebase · Claude AI · Motion",
    link: null,
  },
  {
    title: "Trupeer AI",
    description:
      "GPT-4 Vision pipeline that converts documents into tutorial videos automatically. Go backend orchestrates the AI workflow, Next.js frontend for the interface.",
    tech: "Go · Next.js · GPT-4 Vision",
    link: null,
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-serif italic text-4xl text-fg md:text-5xl">
          Selected Work
        </h2>

        <div className="mt-16">
          {projects.map((project, i) => {
            const inner = (
              <>
                <span className="font-serif italic text-xl text-muted-light transition-colors group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-fg transition-colors group-hover:text-accent">
                    {project.title}
                    {project.link && (
                      <span className="ml-2 inline-block text-sm text-muted-light transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent">
                        &#8599;
                      </span>
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <p className="mt-3 text-xs tracking-wide text-muted-light">
                    {project.tech}
                  </p>
                </div>
              </>
            );

            const cls =
              "group grid grid-cols-1 gap-2 border-t border-line py-8 transition-colors md:grid-cols-[40px_1fr] md:gap-8";

            return project.link ? (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cls}
              >
                {inner}
              </a>
            ) : (
              <div key={project.title} className={cls}>
                {inner}
              </div>
            );
          })}
          <div className="border-t border-line" />
        </div>
      </div>
    </section>
  );
}
