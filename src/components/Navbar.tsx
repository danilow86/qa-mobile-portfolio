export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="text-xl font-bold">
        DANILO
      </div>

      <div className="hidden gap-8 md:flex">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <button className="md:hidden">
        ☰
      </button>
    </nav>
  );
}