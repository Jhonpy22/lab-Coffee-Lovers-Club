import { Outlet } from "@tanstack/react-router";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}