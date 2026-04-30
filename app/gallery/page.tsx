import { PageHero } from "@/components/page-hero";
import { MotionWrapper } from "@/components/motion-wrapper";

const placeholders = [
  "Trauma Hub Project Launch - How it started?",
  "Trauma Hub Project Launch - Pictures",
  "Cover photo of the website.",
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Project Gallery"
        title="Presentation image placeholders"
        description="The uploaded deck references launch pictures and a cover photo. Since only the PowerPoint text content was available here, this page preserves those placeholders for future image insertion."
      />

      <section className="section-pad">
        <div className="container-shell grid gap-6 md:grid-cols-3">
          {placeholders.map((label, index) => (
            <MotionWrapper key={label} delay={index * 0.08}>
              <div className="card flex min-h-[260px] items-end p-6">
                <div>
                  <p className="eyebrow">Placeholder</p>
                  <p className="mt-3 text-lg leading-8 text-black/75">{label}</p>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </section>
    </>
  );
}
