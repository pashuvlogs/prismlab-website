import type { Metadata } from "next";
import { LegalShell, LegalSection, LegalList } from "@/components/legal";

export const metadata: Metadata = {
  title: "Privacy · PrismLab",
  description:
    "What PrismLab collects, how it is used, and the control you have over your data.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy"
      updated="1 July 2026"
      intro="A short, honest summary of what we collect, why, and the control you keep over your data. For the technical detail on how it is protected, see our Security page."
    >
      <LegalSection title="What we collect">
        <LegalList
          items={[
            "Account details: your name, email and settings.",
            "Financial data you add or import: accounts, transactions, budgets, goals, assets and the documents you upload.",
            "Basic usage data needed to run and improve the service, such as errors and feature usage.",
          ]}
        />
      </LegalSection>

      <LegalSection title="How we use it">
        <p>
          We use your data to provide PrismLab: to show your dashboard, run your
          budgets and FIRE projection, power Prism Intelligence, and generate your
          reports. That is the purpose, and the limit.
        </p>
        <p>We do not sell your data, and we do not use it for advertising.</p>
      </LegalSection>

      <LegalSection title="Sharing">
        <p>
          Your data is only shared with the people you explicitly invite, at the
          access level you choose, and with the sub-processors listed on our
          Security page who help us run the service.
        </p>
      </LegalSection>

      <LegalSection title="Your controls">
        <LegalList
          items={[
            "Export: download your data as PDF, CSV or Excel at any time.",
            "Correct: edit or delete any record you have added.",
            "Delete: close your account and have your personal data removed from the active service.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Cookies">
        <p>
          We use only the cookies needed to keep you signed in and to run the
          app. We do not use third-party advertising cookies.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about your data? Write to{" "}
          <a className="text-green-on hover:underline" href="mailto:privacy@prismlab.app">
            privacy@prismlab.app
          </a>
          .
        </p>
      </LegalSection>
    </LegalShell>
  );
}
