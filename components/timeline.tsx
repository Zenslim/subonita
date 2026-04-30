"use client";

import { MotionWrapper } from "@/components/motion-wrapper";

const phases = [
  {
    year: "2026",
    title: "Pilot Launch",
    description:
      "The Trauma Hub Project in Nepal begins under the May 2026 to May 2031 implementation window, with initial hubs starting in Nawalparasi East and Rautahat.",
  },
  {
    year: "2027",
    title: "Training and Operational Stabilization",
    description:
      "Emergency trauma workflows, referral coordination, first responder readiness, and hub-level care protocols are strengthened through implementation support.",
  },
  {
    year: "2028",
    title: "System Refinement",
    description:
      "Operational learnings are consolidated across pilot locations to improve response readiness, coordination efficiency, and service quality.",
  },
  {
    year: "2029",
    title: "Network Readiness",
    description:
      "The project advances toward a more connected trauma response model across Nepal’s major highways through deeper institutional coordination.",
  },
  {
    year: "2030",
    title: "Expansion Foundation",
    description:
      "The trauma hub model is positioned for broader replication and scaling, informed by evidence, operational learning, and stakeholder collaboration.",
  },
  {
    year: "2031",
    title: "Five-Year Implementation Horizon",
    description:
      "The initial five-year phase concludes with the aim of demonstrating a structured, scalable trauma care model for Nepal’s highway corridors.",
  },
];

export function Timeline() {
  return (
    <section className="section-pad bg-stone-50">
      <div className="container-shell">
        <MotionWrapper>
          <p className="eyebrow">Implementation Timeline</p>
          <h2 className="h2 mt-4">2026 to 2031</h2>
          <p className="mt-4 max-w-3xl leading-8 text-black/70">
            This is a structured five-year implementation window tied to real locations,
            real coordination, and real institutional responsibility.
          </p>
        </MotionWrapper>

        <div className="mt-14 relative">
          <div className="absolute left-[23px] top-0 hidden h-full w-px bg-black/10 md:block" />

          <div className="space-y-10">
            {phases.map((phase, index) => (
              <MotionWrapper key={phase.year} delay={index * 0.06}>
                <div className="grid gap-4 md:grid-cols-[64px_160px_1fr] md:gap-8">
                  <div className="hidden md:flex justify-center">
                    <div className="mt-1 h-3 w-3 rounded-full bg-brandRed ring-8 ring-brandRed/10" />
                  </div>

                  <div>
                    <p className="text-2xl font-bold tracking-tight text-brandRed">
                      {phase.year}
                    </p>
                  </div>

                  <div className="card p-6 sm:p-8">
                    <h3 className="text-xl font-semibold text-ink">{phase.title}</h3>
                    <p className="mt-3 leading-8 text-black/72">{phase.description}</p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}