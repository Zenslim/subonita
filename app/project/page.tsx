import Image from "next/image";
import { MotionWrapper } from "@/components/motion-wrapper";
import { HeartPulse, MapPinned, Handshake, ShieldPlus } from "lucide-react";

const projectFacts = [
  "Trauma Hub Project in Nepal (May 2026 - May 2031)",
  "Funded by Subonita Foundation USA",
  "Implemented by BNMT Nepal",
  "Oversight and coordination by Subonita Health Foundation Nepal",
  "Current hubs starting in Nawalparasi East and Rautahat",
];

const highlights = [
  {
    icon: MapPinned,
    title: "Strategic Locations",
    description:
      "Two trauma hubs are being started in Nawalparasi East and Rautahat districts in coordination with local City Hospitals.",
  },
  {
    icon: Handshake,
    title: "Local Partnership",
    description:
      "Implementation is being carried out with cooperation and coordination from local municipalities and institutional partners.",
  },
  {
    icon: HeartPulse,
    title: "Emergency Response",
    description:
      "The model is built to improve immediate trauma stabilization, transfer, and access to life-saving emergency care.",
  },
];

const interventions = [
  {
    title: "Pilot Trauma Hubs",
    description:
      "Support establishment of pilot trauma hubs in high-priority locations by utilizing existing healthcare facilities and human resources. Equip these hubs with essential trauma care equipment including ventilators, monitors, spinal boards, and emergency drugs.",
  },
  {
    title: "Stakeholder Collaboration",
    description:
      "Engage the Ministry of Health, Provincial and Local governments, and other stakeholders for coordinated implementation. Partner with ambulance services and first responders for seamless patient transfer and emergency response.",
  },
  {
    title: "Capacity Building",
    description:
      "Train healthcare workers including doctors, nurses, and paramedics in trauma care protocols. Develop and distribute trauma response kits for first responders to improve readiness and quality of care.",
  },
  {
    title: "Awareness Campaigns",
    description:
      "Launch public awareness campaigns on road safety and the availability of trauma hubs. Engage communities in accident-prone areas for quicker reporting, response, and support.",
  },
];

const stats = [
  { value: "2", label: "Trauma Hubs" },
  { value: "2", label: "Districts" },
  { value: "24/7", label: "Emergency Care Goal" },
  { value: "∞", label: "Lives to Save" },
];

const layers = [
  {
    title: "Urgent Care",
    description:
      "Immediate trauma response, airway management, bleeding control, and stabilization at the point of care.",
    image: "/images/project-ambulance.jpg",
    alt: "Emergency ambulance",
  },
  {
    title: "Clinical Care",
    description:
      "Structured trauma protocols, trained healthcare professionals, and coordinated transfer to higher-level facilities.",
    image: "/images/project-equipment.jpg",
    alt: "Trauma equipment setup",
  },
  {
    title: "Community Care",
    description:
      "First responders, public awareness, and local engagement to reduce response time and improve early intervention.",
    image: "/images/project-team.jpg",
    alt: "Healthcare team training",
  },
  {
    title: "Capacity Building",
    description:
      "Continuous training, skill development, and system readiness for healthcare workers and support teams.",
    image: "/images/project-kit.jpg",
    alt: "Trauma hub uniform and kit",
  },
  {
    title: "System Strengthening",
    description:
      "Policy alignment, data systems, coordination, and long-term integration into the national health system.",
    image: "/images/project-billboard.jpg",
    alt: "Public awareness and network signaling",
  },
];

export default function ProjectPage() {
  return (
    <>
      <section className="border-b border-black/10 bg-[#101433] text-white">
        <div className="container-shell section-pad">
          <MotionWrapper>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90">
              <ShieldPlus className="h-4 w-4 text-brandRed" />
              <span>Our Project</span>
            </div>

            <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Trauma Hub <span className="text-brandRed">Project</span> in Nepal
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-white/82">
              A life-saving initiative to help establish trauma care hubs along Nepal’s major
              highways, providing immediate and life-saving care to trauma victims through
              faster response, stabilization, transfer, and access to emergency services.
            </p>
          </MotionWrapper>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="space-y-5">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <MotionWrapper key={item.title} delay={index * 0.06}>
                    <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brandRed text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                          <p className="mt-2 leading-7 text-white/72">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </MotionWrapper>
                );
              })}
            </div>

            <MotionWrapper delay={0.08}>
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[24px]">
                  <Image
                    src="/images/project-hero.jpg"
                    alt="Trauma response ambulance in Nepal"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="absolute bottom-6 right-6 rounded-[22px] bg-brandRed px-6 py-5 text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
                  <p className="text-4xl font-bold leading-none">24/7</p>
                  <p className="mt-2 text-sm font-medium text-white/90">Emergency Response Goal</p>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <section className="bg-[#0e9aa7] py-10 text-white">
        <div className="container-shell grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <MotionWrapper key={stat.label} delay={index * 0.05}>
              <div>
                <p className="text-5xl font-bold tracking-tight">{stat.value}</p>
                <p className="mt-2 text-base text-white/90">{stat.label}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell grid gap-6 lg:grid-cols-[1fr_1fr]">
          <MotionWrapper>
            <div className="card p-8 sm:p-10">
              <p className="eyebrow">Vision</p>
              <h2 className="h2 mt-4">No life lost due to delayed emergency care</h2>
              <p className="mt-6 leading-8 text-black/75">
                To create a trauma care network that ensures no life is lost due to delays
                in emergency medical care along Nepal’s highways.
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.08}>
            <div className="card p-8 sm:p-10">
              <p className="eyebrow">Mission</p>
              <h2 className="h2 mt-4">Strategically located trauma hubs</h2>
              <p className="mt-6 leading-8 text-black/75">
                To support and establish strategically located trauma hubs at various
                locations for efficient travel time along major highways, offering immediate
                trauma care services.
              </p>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <section className="section-pad bg-stone-50">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <MotionWrapper>
            <div className="card p-8 sm:p-10">
              <p className="eyebrow">Purpose</p>
              <h2 className="h2 mt-4">Why the project matters</h2>
              <p className="mt-6 leading-8 text-black/75">
                The project aims to help establish a network of trauma care hubs along
                Nepal’s major highways to provide immediate and life-saving care to trauma
                victims. This initiative addresses high mortality and morbidity associated
                with road traffic accidents by ensuring efficient and timely responses to
                trauma incidents. Services at the hubs are intended to be provided free of
                charge for emergency trauma care, prioritizing accessibility and equity for all.
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.08}>
            <div className="card p-8 sm:p-10">
              <p className="eyebrow">Project Facts</p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-black/75 sm:text-base">
                {projectFacts.map((fact) => (
                  <li
                    key={fact}
                    className="flex gap-3 border-b border-black/8 pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-brandRed" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <MotionWrapper>
            <p className="eyebrow">Background</p>
            <h2 className="h2 mt-4">The highway trauma gap in Nepal</h2>
            <p className="mt-6 max-w-5xl leading-8 text-black/75">
              Nepal’s road infrastructure, including major highways such as the East-West
              Highway, Prithvi Highway, and other major transport corridors, experiences
              high rates of road traffic accidents. Over the past decade, road accidents
              have claimed approximately 24,095 lives and left more than 50,000 individuals
              with severe injuries. In fiscal year 2080/81 alone, 2,369 people lost their
              lives due to road accidents, equivalent to a daily death toll of seven.
              Although the Government of Nepal announced plans in FY 2077/78 to expand
              trauma services along major highways, implementation has lagged due to
              inadequate planning, lack of resources, and fragmented budget allocation.
            </p>
          </MotionWrapper>
        </div>
      </section>

      <section className="section-pad bg-stone-50">
        <div className="container-shell">
          <MotionWrapper>
            <p className="eyebrow">Current Project</p>
            <h2 className="h2 mt-4">Present implementation status</h2>
          </MotionWrapper>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <MotionWrapper>
              <div className="card p-8 sm:p-10">
                <p className="leading-8 text-black/75">
                  Trauma Hub Project in Nepal (May 2026 - May 2031) is funded by
                  Subonita Foundation USA and implemented by BNMT Nepal. The project is
                  oversight and coordinated by Subonita Health Foundation Nepal.
                </p>

                <p className="mt-8 leading-8 text-black/75">
                  Currently two Trauma Hubs in Nawalparasi East and Rautahat districts
                  are being started with cooperation and coordination with local
                  municipalities in their respective City Hospitals.
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.08}>
              <div className="card overflow-hidden p-3">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] bg-stone-100">
                  <Image
                    src="/images/project-map.jpg"
                    alt="Trauma Hub Project map showing current hubs in Nepal"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <MotionWrapper>
            <p className="eyebrow">System Architecture</p>
            <h2 className="h2 mt-4">Five-layer trauma care model</h2>
            <p className="mt-6 max-w-4xl leading-8 text-black/75">
              The trauma hub is not a single facility but a layered system. Each layer
              addresses a different level of response, from immediate stabilization to
              long-term system strengthening.
            </p>
          </MotionWrapper>

          <div className="mt-12 space-y-6">
            {layers.map((layer, index) => (
              <MotionWrapper key={layer.title} delay={index * 0.05}>
                <div className="grid items-center gap-6 rounded-[28px] border border-black/8 bg-white p-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:grid-cols-[0.9fr_1.1fr] sm:p-5">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[22px] bg-stone-100">
                    <Image
                      src={layer.image}
                      alt={layer.alt}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-2 sm:p-4">
                    <p className="eyebrow">Layer {index + 1}</p>
                    <h3 className="h3 mt-2">{layer.title}</h3>
                    <p className="mt-4 leading-8 text-black/75">{layer.description}</p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <MotionWrapper>
            <p className="eyebrow">Core Interventions</p>
            <h2 className="h2 mt-4">How the project operates</h2>
          </MotionWrapper>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {interventions.map((item, index) => (
              <MotionWrapper key={item.title} delay={index * 0.06}>
                <div className="card p-8 sm:p-10">
                  <p className="eyebrow">Intervention {index + 1}</p>
                  <h3 className="h3 mt-2">{item.title}</h3>
                  <p className="mt-4 leading-8 text-black/75">{item.description}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-stone-50">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <MotionWrapper>
            <div className="card overflow-hidden p-3">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[24px] bg-stone-100">
                <Image
                  src="/images/project-hub-building1.jpg"
                  alt="Trauma hub building concept"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.08}>
            <div className="card p-8 sm:p-10">
              <p className="eyebrow">Conclusion</p>
              <h2 className="h2 mt-4">A structured and scalable approach</h2>
              <p className="mt-6 leading-8 text-black/75">
                The Subonita Health Foundation Nepal Trauma Hub Project seeks to address a
                critical gap in emergency trauma care along Nepal’s highways. By organizing
                interventions into short, medium, and long-term goals, the initiative
                establishes a structured and sustainable framework for reducing road
                accident fatalities and injuries. Through strategic planning, stakeholder
                collaboration, targeted equipment support, healthcare worker training,
                public awareness, and phased implementation, the project aims to transform
                trauma care accessibility and save lives.
              </p>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}