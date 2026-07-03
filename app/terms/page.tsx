import type { Metadata } from "next";
import { LegalShell, LegalSection, LegalList } from "@/components/legal";

// DRAFT — good-faith terms for the closed pilot. Governing law is New Zealand
// (the operator's location). Have a lawyer review before any public launch, and
// keep in sync with the app's /terms.

export const metadata: Metadata = {
  title: "Terms of Use · PrismLab",
  description:
    "The terms for using PrismLab: what the service is and is not, billing, and your rights.",
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms of Use"
      updated="3 July 2026"
      intro="The plain-language terms for using PrismLab. By creating an account, you agree to these."
    >
      <LegalSection title="Who we are">
        <p>
          PrismLab is operated by its founder, based in New Zealand (&quot;PrismLab&quot;,
          &quot;we&quot;, &quot;us&quot;). These Terms are a contract between you and us.
        </p>
      </LegalSection>

      <LegalSection title="The service">
        <p>
          PrismLab is a personal-finance app for tracking accounts, budgets, goals and
          assets, and for planning toward financial independence. We work to keep it
          available and accurate, but we provide it on an as-is basis.
        </p>
      </LegalSection>

      <LegalSection title="Not financial advice">
        <p>
          PrismLab gives you tools, projections and summaries to help you understand your
          own money. It is not financial, investment, tax or legal advice. Figures such as
          the FIRE projection are estimates based on the numbers and assumptions you
          provide, and may contain errors. You are responsible for your own decisions; for
          decisions that matter, speak to a qualified professional.
        </p>
      </LegalSection>

      <LegalSection title="Not a bank or money service">
        <p>
          PrismLab records and organises information about your money. It does not hold,
          move or manage your funds, and it is not a bank, broker, insurer or other
          financial institution. We have no access to your actual bank or investment
          accounts.
        </p>
      </LegalSection>

      <LegalSection title="Eligibility">
        <p>
          You must be at least 18 years old and able to enter a binding agreement in your
          country.
        </p>
      </LegalSection>

      <LegalSection title="Your account">
        <LegalList
          items={[
            "You are responsible for the accuracy of the data you enter and for keeping your login secure.",
            "Tell us promptly if you suspect unauthorised use of your account.",
            "Do not misuse the service, attempt to breach its security, access other people's data, or use it to break the law.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Trial and billing">
        <LegalList
          items={[
            "PrismLab starts with a 14-day free trial; no card is required to begin.",
            "After the trial, the plan is $5 per month.",
            "You can cancel at any time. Cancellation stops future charges; it does not refund the current period unless required by law.",
            "Nothing in these terms limits consumer rights you have that cannot be excluded by law, such as under the New Zealand Consumer Guarantees Act.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Your content">
        <p>
          You own the financial data and documents you add. You grant us the limited
          permission needed to store and process them to run the service for you — nothing
          more. We do not sell your content or use it to train AI models.
        </p>
      </LegalSection>

      <LegalSection title="Prism Intelligence output">
        <p>
          Features powered by Prism Intelligence can make mistakes. Treat their output as a
          suggestion to review, not a statement of fact, and check anything important
          before you rely on it.
        </p>
      </LegalSection>

      <LegalSection title="Availability and changes">
        <p>
          We may add, change or remove features, and may adjust pricing with notice. We aim
          for high availability but do not guarantee uninterrupted service.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimer and liability">
        <p>
          The service is provided on an as-is and as-available basis, without warranties of
          any kind. To the extent permitted by law, PrismLab is not liable for indirect or
          consequential loss, or for loss of data or profits, arising from use of the
          service; our total liability is limited to the amount you paid us in the 12 months
          before the claim. Nothing here limits rights that cannot be limited by law.
        </p>
      </LegalSection>

      <LegalSection title="Termination">
        <p>
          You can stop using PrismLab and delete your account at any time. We may suspend or
          end access if you breach these terms or where the law requires it.
        </p>
      </LegalSection>

      <LegalSection title="Changes to these terms">
        <p>
          We may update these terms as the product evolves. If we make a material change, we
          will let you know. Continued use after a change means you accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection title="Governing law and disputes">
        <p>
          These terms are governed by the laws of New Zealand, and the New Zealand courts
          have non-exclusive jurisdiction. If something goes wrong, contact us first — we
          will try to resolve it informally before anything more formal.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about these terms? Write to admin@prismlab.app.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
