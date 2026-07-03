import type { Metadata } from "next";
import { LegalShell, LegalSection, LegalList } from "@/components/legal";

// DRAFT — good-faith policy written for the closed pilot. Have it reviewed by a
// lawyer (and/or generated via Termly/iubenda) covering NZ, UAE, India, Canada
// and the US before any public launch. Keep in sync with the app's /privacy.

export const metadata: Metadata = {
  title: "Privacy · PrismLab",
  description:
    "What PrismLab collects, how it is used, where it is processed, and the control you keep over your data.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy"
      updated="3 July 2026"
      intro="A plain, honest account of what we collect, why, where it is processed, and the control you keep. For the technical detail on how it is protected, see our Security page."
    >
      <LegalSection title="Who we are">
        <p>
          PrismLab is a personal-finance app operated by its founder, based in New
          Zealand (&quot;PrismLab&quot;, &quot;we&quot;, &quot;us&quot;). We are responsible for your
          data under this policy. You can reach us any time at admin@prismlab.app.
        </p>
      </LegalSection>

      <LegalSection title="What we collect">
        <LegalList
          items={[
            "Account details: your name, email and settings.",
            "Financial data you add or import: accounts, transactions, budgets, goals, and asset records such as insurance, fixed deposits, property and family-vault entries.",
            "Documents you upload: statements, receipts and files you attach to records.",
            "Technical data needed to run and secure the service, such as log and error information.",
          ]}
        />
      </LegalSection>

      <LegalSection title="How we use your data">
        <p>
          We use your data only to provide PrismLab: to show your dashboard, run your
          budgets and FIRE projection, power Prism Intelligence, generate your reports,
          process your subscription, and keep the service secure. Our legal basis is
          performing our contract with you, our legitimate interest in operating and
          securing the service, and your consent where the law requires it. We do not
          sell your data or use it for advertising.
        </p>
      </LegalSection>

      <LegalSection title="Prism Intelligence and AI">
        <p>
          When you use quick entry, the bill reader, statement import or your monthly
          summary, the relevant content is sent securely to our AI provider, Anthropic,
          to produce your result.
        </p>
        <LegalList
          items={[
            "Your content is not used to train AI models.",
            "The provider may retain content briefly under its standard retention, for abuse-monitoring and legal compliance, and then deletes it; we do not operate a zero-retention arrangement.",
            "AI output is always a suggestion you review, edit or discard before anything is saved.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Who processes your data">
        <p>
          We rely on a small set of reputable providers (sub-processors), each bound by
          a data-processing agreement and using your data only to deliver PrismLab:
        </p>
        <LegalList
          items={[
            "Supabase — database, authentication and file storage (Singapore).",
            "Vercel — application hosting and global edge network (United States and edge locations).",
            "Anthropic — the AI behind Prism Intelligence (United States).",
            "Cloudflare — DNS and email routing.",
            "Resend — transactional email delivery.",
            "Our payment provider — subscription billing.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Where your data is processed">
        <p>
          Running PrismLab means your data is processed in Singapore (our database) and
          the United States (hosting and AI), and may pass through global edge locations.
          Where data leaves your country, we rely on the providers&apos; contractual
          safeguards and, where the law requires it, on your consent to the transfer.
        </p>
      </LegalSection>

      <LegalSection title="How long we keep it">
        <LegalList
          items={[
            "Active-account data: kept while your account is open.",
            "After you close your account: personal data deleted within about 30 days, except where we must keep it longer by law.",
            "Billing and tax records: retained for up to 7 years to meet financial-record obligations.",
            "Backups: rotated and overwritten within about 30 days.",
            "Technical logs: retained for about 90 days.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Sensitive information">
        <p>
          Some records — insurance, family-vault documents, and identity or health-related
          details — are especially sensitive. They are protected the same way as the rest
          of your data: encrypted and isolated to your account, and visible only to you and
          anyone you explicitly invite. Please add only what you are comfortable storing.
        </p>
      </LegalSection>

      <LegalSection title="Sharing">
        <p>
          Your data is private to you. It is shared only with people you explicitly invite,
          at the access level you choose, and with the sub-processors above who help us run
          the service. You can revoke access at any time.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          You can ask us to access, correct, export or delete your data, and to object to
          or restrict certain processing. To exercise any right, email admin@prismlab.app;
          we aim to respond within 30 days.
        </p>
        <LegalList
          items={[
            "New Zealand (Privacy Act 2020): access and correction, and the right to complain to the Office of the Privacy Commissioner.",
            "India (DPDP Act 2023): access, correction, erasure, nomination, and grievance redress via the contact below.",
            "Canada (PIPEDA and Québec Law 25): access, correction and data portability.",
            "United States (CCPA/CPRA): to know, delete, correct, and opt out of sale — note that we do not sell data.",
            "United Arab Emirates (PDPL): access, correction, deletion and objection.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Automated decisions">
        <p>
          PrismLab does not make automated decisions that produce legal or similarly
          significant effects about you. Prism Intelligence is assistive: it suggests, and
          you decide.
        </p>
      </LegalSection>

      <LegalSection title="Data breaches">
        <p>
          If a breach affects your personal data, we will act promptly to contain it and
          will notify you and the relevant authority where the law requires — in New
          Zealand, the Privacy Commissioner as soon as practicable, and in other regions
          within their required timeframes.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          PrismLab is intended for adults. It is not for anyone under 18, and we do not
          knowingly collect data from children.
        </p>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>
          We use only the cookies needed to keep you signed in and to run the app. We do
          not use third-party advertising cookies or cross-site tracking.
        </p>
      </LegalSection>

      <LegalSection title="Business transfers">
        <p>
          If PrismLab is ever transferred to a new operator, your data would move with it
          and remain subject to protections at least equivalent to this policy. We would
          tell you before any change of control affects your data.
        </p>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>
          We may update this policy as the product and the law evolve. Material changes
          will be reflected in the &quot;Last updated&quot; date above and, where appropriate,
          communicated to you.
        </p>
      </LegalSection>

      <LegalSection title="Contact and complaints">
        <p>
          Questions, requests, or a privacy grievance (including under India&apos;s DPDP Act)?
          Write to admin@prismlab.app. You also have the right to complain to your local
          data-protection authority.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
