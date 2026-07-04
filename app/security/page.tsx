import type { Metadata } from "next";
import { LegalShell, LegalSection, LegalList } from "@/components/legal";

export const metadata: Metadata = {
  title: "Security · PrismLab",
  description:
    "How PrismLab protects your financial data: row-level isolation, encryption, private AI, granular sharing and least-privilege access.",
};

export default function SecurityPage() {
  return (
    <LegalShell
      title="Security"
      updated="1 July 2026"
      intro="PrismLab holds some of the most sensitive information you own. This page explains, in plain terms, how we keep it private and how we protect it."
    >
      <LegalSection title="Our core commitments">
        <LegalList
          items={[
            "Your financial data is yours. We never sell it, and never share it for advertising.",
            "Private by default. No other user, and no member of our team, can casually browse your records.",
            "AI works for you, not on you. Prism Intelligence never trains models on your data.",
          ]}
        />
      </LegalSection>

      <LegalSection title="How your data is isolated">
        <p>
          Every table in PrismLab enforces row-level security. The database
          itself checks that a record can only be read or written by the account
          that owns it. This is not just a check in the app that could be
          bypassed; it is enforced at the data layer, on every request.
        </p>
        <p>
          Access to the app is protected by short-lived, cryptographically signed
          sessions, so a stale or stolen token cannot be reused indefinitely.
        </p>
      </LegalSection>

      <LegalSection title="Encryption">
        <LegalList
          items={[
            "In transit: all traffic is served over HTTPS with TLS.",
            "At rest: your data is stored in an encrypted, managed PostgreSQL database.",
            "Extra protection for your vault: the most sensitive Family Vault fields are additionally encrypted at the application layer (AES-256) before they reach the database.",
            "Secrets such as API keys and tokens are stored as protected environment secrets and never committed to source code.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Application hardening">
        <p>
          Beyond isolating your data, we harden the app itself against common web
          attacks:
        </p>
        <LegalList
          items={[
            "A strict content-security policy limits what can run on the page, reducing the impact of injected or third-party scripts.",
            "HTTPS is enforced (HSTS), and the app cannot be embedded in a hidden frame — protecting against clickjacking.",
            "Browsers are told not to guess file types, and uploads are validated by their actual file signature, not just their name.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Prism Intelligence and your data">
        <p>
          When you use quick entry, the bill reader, statement import or your
          monthly summary, the relevant content is sent securely to our AI
          provider to generate a result for you.
        </p>
        <LegalList
          items={[
            "It is used only to produce your result, and is not used to train AI models.",
            "Documents and statements are processed to extract structured data, then returned to you.",
            "You stay in control: AI output is always a suggestion you can review, edit or discard before anything is saved.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Sharing and access control">
        <LegalList
          items={[
            "Sharing is explicit and granular. You choose which sections a person can see, and whether they can view or edit.",
            "You can revoke someone's access at any time.",
            "Internally, access follows the principle of least privilege, and sign-ins and sensitive actions are logged.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Infrastructure and sub-processors">
        <p>
          We rely on a small set of reputable providers to run the service, each bound by a
          data-processing agreement and using your data only as needed to deliver PrismLab:
        </p>
        <LegalList
          items={[
            "Supabase — managed database, authentication and file storage (Singapore).",
            "Vercel — application hosting and global edge network (United States and edge locations).",
            "Anthropic — the AI engine behind Prism Intelligence (United States).",
            "Cloudflare — DNS and email routing.",
            "Resend — transactional email.",
            "Our payment provider — subscription billing.",
          ]}
        />
        <p>
          Running the service means your data is processed in Singapore and the United
          States, and may pass through global edge locations. Where data crosses borders,
          we rely on our providers&apos; contractual safeguards.
        </p>
      </LegalSection>

      <LegalSection title="Data retention and your rights">
        <LegalList
          items={[
            "Active-account data is kept while your account is open; after you close it, personal data is deleted within about 30 days, except records we must keep by law.",
            "Billing and tax records are retained for up to 7 years; backups roll over within about 30 days; technical logs within about 90 days.",
            "You can export your records and reports to PDF, CSV or Excel at any time.",
            "You can ask us to access, correct or delete your account and personal data.",
          ]}
        />
        <p>
          The full detail — sub-processors, cross-border transfers, your rights by country
          and how we handle a data breach — is in our{" "}
          <a className="text-green-on hover:underline" href="/privacy">Privacy policy</a>.
        </p>
      </LegalSection>

      <LegalSection title="Responsible disclosure">
        <p>
          No system is perfectly secure, and we do not pretend otherwise. If you
          believe you have found a vulnerability, please tell us at{" "}
          <a className="text-green-on hover:underline" href="mailto:admin@prismlab.app">
            admin@prismlab.app
          </a>{" "}
          and we will respond quickly. General privacy questions can go to the same address.
        </p>
        <p className="text-text-faint">
          This page describes our current practices and will evolve as PrismLab
          grows.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
