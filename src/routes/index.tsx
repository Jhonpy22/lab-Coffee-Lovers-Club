export default function HomePage() {
  return (
    <section className="space-y-6">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
        <span>☕</span>
        <span>Membresía mensual · Cupos limitados</span>
      </div>

      <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
        Coffee Lovers Club: tu café de especialidad cada mes.
      </h1>

      <p className="max-w-2xl text-white/70">
        Granos seleccionados, catas guiadas, descuentos exclusivos y sorpresas mensuales para verdaderos amantes del café.
      </p>

      <div className="flex flex-wrap gap-3">
        <a
          href="#planes"
          className="rounded-3xl bg-amber-300 px-5 py-3 font-semibold text-neutral-950 transition hover:opacity-90"
        >
          Ver planes
        </a>
        <a
          href="#beneficios"
          className="rounded-3xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
        >
          Ver beneficios
        </a>
      </div>
    </section>
  );
}