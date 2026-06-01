import Image from "next/image";
import Link from "next/link";
import { business } from "../content";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-mist">
      <div className="mx-auto max-w-content px-5 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Image
              src="/logo-black.png"
              alt={business.name}
              width={130}
              height={30}
              className="h-7 w-auto"
            />
            <p className="mt-4 text-[13px] leading-relaxed text-subtle">
              {business.description}
            </p>
          </div>

          <div className="text-[13px] leading-relaxed text-subtle">
            <p className="font-medium text-ink">Contact</p>
            <p className="mt-3">
              <a
                href={`mailto:${business.email}`}
                className="transition hover:text-ink"
              >
                {business.email}
              </a>
            </p>
            <p className="mt-1">{business.address}</p>
          </div>

          <div className="text-[13px] leading-relaxed text-subtle">
            <p className="font-medium text-ink">Legal</p>
            <p className="mt-3">
              <Link href="/terms" className="transition hover:text-ink">
                Terms &amp; Conditions
              </Link>
            </p>
            <p className="mt-1">
              <Link href="/privacy" className="transition hover:text-ink">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-hairline pt-6 text-[12px] text-subtle">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
