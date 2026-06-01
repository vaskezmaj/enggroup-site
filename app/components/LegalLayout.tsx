import Header from "./Header";
import Footer from "./Footer";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="bg-white pt-32 pb-24 sm:pt-40">
        <div className="mx-auto max-w-2xl px-5">
          <h1 className="text-[36px] font-semibold tracking-tight text-ink sm:text-[44px]">
            {title}
          </h1>
          <p className="mt-3 text-[14px] text-subtle">Last updated: {updated}</p>
          <div className="legal mt-10 space-y-8 text-[16px] leading-relaxed text-subtle">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
