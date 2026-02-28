export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="group flex items-center gap-2 font-bold">
          <span className="text-2xl transition group-hover:scale-110">☕</span>
          <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-xl text-transparent">
            Coffee Lovers Club
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
          <a className="transition hover:text-amber-300" href="#beneficios">
            Beneficios
          </a>
          <a className="transition hover:text-amber-300" href="#como-funciona">
            Cómo funciona
          </a>
          <a className="transition hover:text-amber-300" href="#planes">
            Planes
          </a>
          <a className="transition hover:text-amber-300" href="#faq">
            FAQ
          </a>
        </nav>

        {/* CTA Button */}
        <a
          href="#unirme"
          className="rounded-3xl bg-gradient-to-r from-amber-300 to-orange-400 px-5 py-2.5 font-semibold text-neutral-900 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-105 hover:shadow-amber-400/40"
        >
          Unirme
        </a>
      </div>
    </header>
  );
}
