import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { business } from "../content";

export const metadata: Metadata = {
  title: "Thank You",
  description: business.description,
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-[80vh] items-center justify-center bg-white px-5 pt-32 pb-24 text-center">
        <div className="mx-auto max-w-xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ink text-[28px] text-white">
            ✓
          </div>
          <h1 className="mt-8 text-[36px] font-semibold tracking-tight text-ink sm:text-[48px]">
            Thank you
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[18px] leading-relaxed text-subtle">
            We&apos;ve received your request. A member of the {business.name}{" "}
            team will be in touch shortly to schedule your consultation call.
          </p>
          <Link
            href="/"
            className="mt-9 inline-block rounded-full bg-ink px-7 py-3 text-[16px] font-medium text-white transition hover:bg-ink/85"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
