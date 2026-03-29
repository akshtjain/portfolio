export function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center px-6 md:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <h1 className="animate-reveal font-serif italic text-[3.5rem] leading-[0.88] tracking-tight text-fg sm:text-[6rem] md:text-[9rem]">
          Aksht
          <br />
          Jain.
        </h1>
        <p className="animate-reveal delay-1 mt-8 max-w-lg text-lg leading-relaxed text-muted md:text-xl">
          Software engineer building products that move millions. Currently
          founding{" "}
          <a
            href="https://ekly.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg underline decoration-accent decoration-1 underline-offset-4 transition-colors hover:text-accent"
          >
            Ekly.ai
          </a>{" "}
          &mdash; AI&#8209;powered video editing.
        </p>
        <p className="animate-reveal delay-2 mt-4 max-w-lg text-base leading-relaxed text-muted">
          Previously shipped global payment rails at{" "}
          <span className="text-fg">Rippling</span> and built a CRM from zero
          as Engineering Lead at{" "}
          <span className="text-fg">Canvas&nbsp;Plus</span>.
        </p>

        <div className="animate-reveal delay-3 mt-12 flex items-center gap-6 text-sm text-muted">
          <a
            href="https://github.com/akshtjain"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover transition-colors hover:text-fg"
          >
            GitHub
          </a>
          <span className="text-line select-none">&middot;</span>
          <a
            href="https://linkedin.com/in/akshtjain"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover transition-colors hover:text-fg"
          >
            LinkedIn
          </a>
          <span className="text-line select-none">&middot;</span>
          <a
            href="https://codeforces.com/profile/akshtjain"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover transition-colors hover:text-fg"
          >
            Codeforces
          </a>
          <span className="text-line select-none">&middot;</span>
          <a
            href="mailto:jainaksht226@gmail.com"
            className="link-hover transition-colors hover:text-fg"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
