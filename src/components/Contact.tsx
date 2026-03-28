export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-mono text-sm text-accent">// contact</h2>
        <h3 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
          Let&apos;s build something
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Whether it&apos;s a startup idea, an engineering challenge, or just a
          good conversation &mdash; I&apos;m all ears.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:jainaksht226@gmail.com"
            className="rounded-md bg-accent px-8 py-3 font-mono text-sm font-medium text-white transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
          >
            Say hello
          </a>
          <a
            href="https://linkedin.com/in/akshtjain"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-card-border px-8 py-3 font-mono text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
