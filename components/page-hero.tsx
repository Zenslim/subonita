import { MotionWrapper } from "@/components/motion-wrapper";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-glow">
      <div className="container-shell section-pad">
        <MotionWrapper>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h1 mt-4 max-w-4xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/75">{description}</p>
        </MotionWrapper>
      </div>
    </section>
  );
}
