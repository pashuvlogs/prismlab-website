import type { Metadata } from "next";
import { LegalShell, LegalSection, LegalList } from "@/components/legal";

export const metadata: Metadata = {
  title: "Terms of Use · PrismLab",
  description: "The terms for using PrismLab, including billing and what the service is and is not.",
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms of Use"
      updated="1 July 2026"
      intro="The plain-language terms for using PrismLab. By creating an account, you agree to these."
    >
      <LegalSection title="The service">
        <p>
          PrismLab is a personal-finance app for tracking accounts, budgets,
          goals and assets, and for planning toward financial independence. We
          work to keep it available and accurate, but we provide it on an
          as-is basis.
        </p>
      </LegalSection>

      <LegalSection title="Not financial advice">
        <p>
          PrismLab gives you tools, projections and summaries to help you
          understand your own money. It is not financial, tax, legal or
          investment advice. Figures such as the FIRE projection are estimates
          based on the numbers and assumptions you provide. For decisions that
          matter, speak to a qualified professional.
        </p>
      </LegalSection>

      <LegalSection title="Your account">
        <LegalList
          items={[
            "You are responsible for the accuracy of the data you enter and for keeping your login secure.",
            "You must be old enough to enter a binding agreement in your country.",
            "Do not misuse the service, attempt to breach its security, or use it to break the law.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Trial and billing">
        <LegalList
          items={[
            "PrismLab starts with a 14-day free trial.",
            "After the trial, the plan is $5 per month, with everything included.",
            "You can cancel at any time. Cancellation stops future charges; it does not refund the current period unless required by law.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Liability">
        <p>
          To the extent permitted by law, PrismLab is not liable for indirect or
          consequential loss arising from use of the service. Nothing in these
          terms limits rights you have that cannot be limited by law.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update these terms as the product evolves. If we make a material
          change, we will let you know. Continued use after a change means you
          accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about these terms? Write to{" "}
          <a className="text-green-on hover:underline" href="mailto:admin@prismlab.app">
            admin@prismlab.app
          </a>
          .
        </p>
      </LegalSection>
    </LegalShell>
  );
}
