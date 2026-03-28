export function Footer() {
  return (
    <footer className="border-t border-card-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-sm text-muted">
          Designed & built by Aksht Jain
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/akshtjain"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/akshtjain"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="mailto:jainaksht226@gmail.com"
            className="font-mono text-sm text-muted transition-colors hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
