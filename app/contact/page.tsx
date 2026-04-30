import { PageHero } from "@/components/page-hero";
import { MotionWrapper } from "@/components/motion-wrapper";
import { contacts, registration } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Information"
        title="Direct contact and organization details"
        description="This page presents the website, phone number, email, and registration-related details shown in the presentation."
      />

      <section className="section-pad">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <MotionWrapper>
            <div className="card p-8">
              <p className="eyebrow">Contact</p>
              <div className="mt-6 space-y-4 text-lg text-black/75">
                <p>Tel: {contacts.phone}</p>
                <p>Email: {contacts.email}</p>
                <p>Website: {registration.website}</p>
              </div>
            </div>
          </MotionWrapper>
          <MotionWrapper delay={0.08}>
            <div className="card p-8">
              <p className="eyebrow">Registration</p>
              <div className="mt-6 space-y-4 text-lg text-black/75">
                <p>Company Registration: {registration.companyRegistration}</p>
                <p>Social Welfare Council Affiliation: {registration.socialWelfareCouncil}</p>
                <p>PAN#: {registration.pan}</p>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}
