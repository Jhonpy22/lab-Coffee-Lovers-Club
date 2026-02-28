import heroJson from "../../data/hero.json";
import type { HeroData } from "../../types/hero";

const hero = heroJson as HeroData;

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
            <span className="text-base">☕</span>
            <span>{hero.badge}</span>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-wide text-white/70">
              {hero.title}
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              {hero.headline}
            </h1>
            <p className="max-w-xl text-white/70">{hero.subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={hero.primaryCta.href}
              className="rounded-3xl bg-amber-300 px-5 py-3 font-semibold text-neutral-950 transition hover:opacity-90"
            >
              {hero.primaryCta.label}
            </a>

            <a
              href={hero.secondaryCta.href}
              className="rounded-3xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-2">
            {hero.stats.map((s) => (
              <div
                key={`${s.value}-${s.label}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="text-xl font-extrabold">{s.value}</div>
                <div className="text-xs text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-white/80">
                Este mes en el club
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                Tostado reciente
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <Item text="Bolsa de café (250g) seleccionada" />
              <Item text="Guía de preparación según tu método" />
              <Item text="Cupón para tu próxima bebida" />
              <Item text="Acceso a la cata mensual" />
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/70">
              Podés pausar o cancelar cuando querás. Sin cargos ocultos.
            </div>

            <a
              href="#unirme"
              className="mt-6 inline-flex w-full items-center justify-center rounded-3xl bg-white/10 px-5 py-3 font-semibold transition hover:bg-white/15"
            >
              Quiero unirme
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-300/20 text-amber-200">
        ✓
      </span>
      <p className="text-white/70">{text}</p>
    </div>
  );
}
