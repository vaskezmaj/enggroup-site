import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";
import { business } from "../content";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: business.description,
  openGraph: {
    title: `${business.name} – Terms and Conditions`,
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

export default function TermsPage() {
  return (
    <LegalLayout title="Terms and Conditions" updated="June 1, 2026">
      <p>
        These Terms and Conditions (&quot;Terms&quot;) govern your access to and
        use of the website operated by {business.name} (&quot;{business.name},
        &quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing
        or using this website, you agree to be bound by these Terms. If you do
        not agree, please do not use the website.
      </p>

      <div className="space-y-3">
        <H>1. Use of the Website</H>
        <p>
          You may use this website for lawful purposes only. You agree not to
          use it in any way that could damage, disable, or impair the website,
          or interfere with another party&apos;s use of it. Content on this site
          is provided for general informational purposes about our consulting
          services and does not constitute professional advice.
        </p>
      </div>

      <div className="space-y-3">
        <H>2. Intellectual Property</H>
        <p>
          All content on this website, including text, graphics, logos, and
          images, is the property of {business.name} or its licensors and is
          protected by applicable intellectual property laws. You may not
          reproduce, distribute, or create derivative works without our prior
          written consent.
        </p>
      </div>

      <div className="space-y-3">
        <H>3. Services</H>
        <p>
          Descriptions of services on this website are provided for general
          information. Any engagement for consulting, project planning,
          implementation, or related services is subject to a separate written
          agreement between you and {business.name}.
        </p>
      </div>

      <div className="space-y-3">
        <H>4. Disclaimer</H>
        <p>
          This website is provided &quot;as is&quot; without warranties of any
          kind, whether express or implied. {business.name} does not warrant
          that the website will be uninterrupted, error-free, or free of harmful
          components.
        </p>
      </div>

      <div className="space-y-3">
        <H>5. Limitation of Liability</H>
        <p>
          To the fullest extent permitted by law, {business.name} shall not be
          liable for any indirect, incidental, or consequential damages arising
          from your use of, or inability to use, this website.
        </p>
      </div>

      <div className="space-y-3">
        <H>6. Changes to These Terms</H>
        <p>
          We may update these Terms from time to time. Changes become effective
          when posted on this page. Your continued use of the website after any
          change constitutes acceptance of the revised Terms.
        </p>
      </div>

      <div className="space-y-3">
        <H>7. Contact</H>
        <p>
          For questions about these Terms, contact us at{" "}
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
