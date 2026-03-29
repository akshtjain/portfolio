const projects = [
  {
    title: "Ekly.ai",
    description:
      "AI-powered video platform with professional timeline editor, Claude-powered agentic editing, auto shorts creator with AI script generation and voice cloning.",
    tech: "Next.js · FastAPI · Remotion · Claude AI · LangGraph",
    link: "https://ekly.ai",
  },
  {
    title: "CRM & Cloud Dialer",
    description:
      "Full CRM and cloud dialer built from zero. Migrated 4 call centers from landlines with integrated PBX, AI sales coaching, and real-time analytics.",
    tech: "FastAPI · PostgreSQL · React · AWS · OpenTelemetry",
    link: "https://canvasplus.co",
  },
  {
    title: "SVB to JPMC Migration",
    description:
      "Emergency weekend migration of Rippling's payment infrastructure during the SVB collapse. Global payment rails across 5 currencies as sole developer.",
    tech: "Python · Payment Rails · Wires · ACH · JPMC",
    link: null,
  },
  {
    title: "Trupeer AI",
    description:
      "GPT-4 Vision pipeline that converts documents into tutorial videos automatically. Go backend with Next.js frontend.",
    tech: "Go · Next.js · GPT-4 Vision",
    link: null,
  },
  {
    title: "Smart Samadhan",
    description:
      "Production SaaS for attendance and payroll with face recognition-based check-in. Flutter mobile app with FastAPI backend.",
    tech: "Flutter · FastAPI · PostgreSQL · Face Recognition",
    link: "https://smartsamadhan.com",
  },
  {
    title: "Pathfinding Visualizer",
    description:
      "Interactive visualization of Dijkstra's, A*, BFS, and DFS with animated grid exploration.",
    tech: "JavaScript · React · Algorithms",
    link: "https://github.com/akshtjain/Pathfinding-Visualizer",
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
