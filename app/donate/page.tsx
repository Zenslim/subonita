import { PageHero } from "@/components/page-hero";
import { MotionWrapper } from "@/components/motion-wrapper";
import { donation } from "@/lib/site-data";

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Donate for saving lives in highways of Nepal"
        description="This page reproduces the donation and bank details provided in the presentation."
      />

      <section className="section-pad">
        <div className="container-shell">
          <MotionWrapper>
            <div className="card grid gap-6 p-8 sm:grid-cols-2 sm:p-10">
              <div>
                <p className="eyebrow">Bank Details</p>
                <div className="mt-6 space-y-4 text-lg leading-8 text-black/75">
                  <p>Account#: {donation.accountNumber}</p>
                  <p>Account Name: {donation.accountName}</p>
                  <p>Swift Code: {donation.swiftCode}</p>
                  <p>Bank Address: {donation.bankAddress}</p>
                </div>
              </div>
              <div className="rounded-3xl bg-brandRed p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">Note</p>
                <p className="mt-4 text-lg leading-8 text-white/90">
                  The presentation frames this donation section as support for saving lives in highways of Nepal.
                </p>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}
