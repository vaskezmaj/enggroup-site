"use client";

export function openBooking() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-booking"));
  }
}

export default function BookCTA({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button type="button" onClick={openBooking} className={className}>
      {children}
    </button>
  );
}
