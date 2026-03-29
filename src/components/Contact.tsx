export function Contact() {
  return (
    <section id="contact" className="px-6 py-32 md:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif italic text-4xl text-fg md:text-5xl">
          Let&apos;s talk.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-muted">
          Whether it&apos;s a startup idea, an engineering challenge, or just a
          good conversation.
        </p>
        <div className="mt-10">
          <a
            href="mailto:jainaksht226@gmail.com"
            className="inline-block border-b border-accent pb-1 text-lg text-fg transition-colors hover:text-accent"
          >
            jainaksht226@gmail.com
          </a>
        </div>
        <div className="mt-6">
          <a
            href="https://linkedin.com/in/akshtjain"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover text-sm text-muted transition-colors hover:text-fg"
          >
            or find me on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
