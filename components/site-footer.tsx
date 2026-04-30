import Link from "next/link";
import { contacts, donation, navItems, registration } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.15fr_0.85fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-ink">Subonita Foundation</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-black/70">
            Trauma Hub Project in Nepal. Structured from the presentation content for the Subonita Foundation,
            Subonita Health Foundation Nepal, and their trauma hub initiative.
          </p>
          <div className="mt-5 space-y-1 text-sm text-black/70">
            <p>Company Registration: {registration.companyRegistration}</p>
            <p>Social Welfare Council Affiliation: {registration.socialWelfareCouncil}</p>
            <p>PAN#: {registration.pan}</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brandRed">Navigation</p>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-black/70 transition hover:text-brandRed">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brandRed">Contact and Donation</p>
          <div className="mt-4 space-y-1 text-sm text-black/70">
            <p>Tel: {contacts.phone}</p>
            <p>Email: {contacts.email}</p>
            <p>Website: {registration.website}</p>
            <p className="pt-3">Account Name: {donation.accountName}</p>
            <p>Account Number: {donation.accountNumber}</p>
            <p>Swift Code: {donation.swiftCode}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
