import type { Metadata } from "next";
import "./globals.css";
import { business } from "./content";
import BookingModal from "./components/BookingModal";

const siteUrl = "https://enggroup.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} – Project Implementation & Technical Consulting`,
    template: `${business.name} – %s`,
  },
  description: business.description,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: `${business.name} – Project Implementation & Technical Consulting`,
    description: business.description,
    url: siteUrl,
    siteName: business.name,
    images: [{ url: "/seo-image.png", width: 500, height: 500 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} – Project Implementation & Technical Consulting`,
    description: business.description,
    images: ["/seo-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <BookingModal />
      </body>
    </html>
  );
}
