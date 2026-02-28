export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Coffee Lovers Club</p>
        <div className="flex gap-4">
          <a className="hover:text-white" href="#planes">Planes</a>
          <a className="hover:text-white" href="#unirme">Contacto</a>
        </div>
      </div>
    </footer>
  );
}