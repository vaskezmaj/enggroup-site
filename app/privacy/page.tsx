import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";
import { business } from "../content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: business.description,
  openGraph: {
    title: `${business.name} – Privacy Policy`,
    description: business.description,
    images: ["/seo-image.png"],
  },
};

function H({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[22px] font-semibold tracking-tight text-ink">
      {children}
    </h2>
  );
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="June 1, 2026">
      <p>
        This Privacy Policy explains how {business.name} (&quot;{business.name},
        &quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects,
        uses, and protects information when you visit our website or contact us.
        By using this website, you consent to the practices described here.
      </p>

      <div className="space-y-3">
        <H>1. Information We Collect</H>
        <p>
          We collect information you voluntarily provide, such as your name,
          email address, and any details you include when you contact us to
          schedule a consultation. We may also collect limited technical data
          automatically, such as browser type and pages visited, to help us
          improve the website.
        </p>
      </div>

      <div className="space-y-3">
        <H>2. How We Use Information</H>
        <p>
          We use the information we collect to respond to your inquiries,
          schedule and deliver consulting services, communicate with you, and
          improve our website and offerings. We do not sell your personal
          information.
        </p>
      </div>

      <div className="space-y-3">
        <H>3. Sharing of Information</H>
        <p>
          We do not share your personal information with third parties except as
          necessary to provide our services, comply with legal obligations, or
          protect our rights. Any service providers we work with are required to
          safeguard your information.
        </p>
      </div>

      <div className="space-y-3">
        <H>4. Data Security</H>
        <p>
          We take reasonable measures to protect your information from
          unauthorized access, disclosure, or loss. However, no method of
          transmission over the internet is completely secure, and we cannot
          guarantee absolute security.
        </p>
      </div>

      <div className="space-y-3">
        <H>5. Your Rights</H>
        <p>
          You may request access to, correction of, or deletion of the personal
          information we hold about you. To make such a request, contact us
          using the details below.
        </p>
      </div>

      <div className="space-y-3">
        <H>6. Changes to This Policy</H>
        <p>
          We may update this Privacy Policy periodically. Updates become
          effective when posted on this page, and your continued use of the
          website constitutes acceptance of the revised policy.
        </p>
      </div>

      <div className="space-y-3">
        <H>7. Contact</H>
        <p>
          If you have questions about this Privacy Policy, contact us at{" "}
          <a
            href={`mailto:${business.email}`}
            className="text-ink underline underline-offset-4"
          >
            {business.email}
          </a>
          . {business.name}, {business.address}.
        </p>
      </div>
    </LegalLayout>
  );
}
