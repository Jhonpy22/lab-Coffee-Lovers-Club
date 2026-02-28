export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <a href="/" className="flex items-center gap-2 font-bold">
          <span className="text-xl">☕</span>
          <span>Coffee Lovers Club</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a className="hover:text-white" href="#beneficios">Beneficios</a>
          <a className="hover:text-white" href="#como-funciona">Cómo funciona</a>
          <a className="hover:text-white" href="#planes">Planes</a>
          <a className="hover:text-white" href="#faq">FAQ</a>
        </nav>

        <a
          href="#unirme"
          className="rounded-3xl bg-amber-300 px-4 py-2 font-semibold text-neutral-950 transition hover:opacity-90"
        >
          Unirme
        </a>
      </div>
    </header>
  );
}