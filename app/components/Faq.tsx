"use client";

import { useState } from "react";
import { faqs } from "../content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-2xl divide-y divide-hairline border-y border-hairline">
      {faqs.items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[17px] font-medium text-ink">{item.q}</span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-hairline text-ink transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
              }}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pr-10 text-[15px] leading-relaxed text-subtle">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
