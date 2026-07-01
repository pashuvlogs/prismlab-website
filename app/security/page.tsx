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
            "Secrets such as API keys and tokens are stored as protected environment secrets and never committed to source code.",
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
          We rely on a small set of reputable providers to run the service. Each
          one processes data only as needed to deliver PrismLab to you:
        </p>
        <LegalList
          items={[
            "A managed database, authentication and file-storage provider, for your records and documents.",
            "An application hosting and edge-network provider, which serves the app and helps mitigate abuse.",
            "An AI provider, the engine behind Prism Intelligence, used only to generate your results.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Data retention and your rights">
        <LegalList
          items={[
            "Your data is kept for as long as your account is active.",
            "You can export everything to PDF, CSV or Excel at any time.",
            "You can delete your account, which removes your personal data from the active service.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Responsible disclosure">
        <p>
          No system is perfectly secure, and we do not pretend otherwise. If you
          believe you have found a vulnerability, please tell us at{" "}
          <a className="text-green-on hover:underline" href="mailto:security@prismlab.app">
            security@prismlab.app
          </a>{" "}
          and we will respond quickly. For general privacy questions, write to{" "}
          <a className="text-green-on hover:underline" href="mailto:privacy@prismlab.app">
            privacy@prismlab.app
          </a>
          .
        </p>
        <p className="text-text-faint">
          This page describes our current practices and will evolve as PrismLab
          grows.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
