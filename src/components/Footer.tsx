export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 md:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted-light">
          &copy; 2026 Aksht Jain
        </p>
        <div className="flex items-center gap-6 text-xs text-muted-light">
          <a
            href="https://github.com/akshtjain"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover transition-colors hover:text-fg"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/akshtjain"
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover transition-colors hover:text-fg"
          >
            LinkedIn
          </a>
          <a
            href="mailto:jainaksht226@gmail.com"
            className="link-hover transition-colors hover:text-fg"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
