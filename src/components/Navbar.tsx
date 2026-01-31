export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <a href="#" className="text-lg font-bold text-text">
          SAA
        </a>
        <div className="flex gap-4 sm:gap-6">
          <a href="#experience" className="text-sm text-text-muted transition-colors hover:text-text">Experience</a>
          <a href="#projects" className="text-sm text-text-muted transition-colors hover:text-text">Projects</a>
          <a href="#skills" className="text-sm text-text-muted transition-colors hover:text-text">Skills</a>
          <a href="#education" className="text-sm text-text-muted transition-colors hover:text-text">Education</a>
        </div>
      </div>
    </nav>
  );
}
