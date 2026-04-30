import Image from "next/image";
import Link from "next/link";
import { MotionWrapper } from "@/components/motion-wrapper";
import { Timeline } from "@/components/timeline";
import { NepalMapClient } from "@/components/nepal-map-client";
import {
  contacts,
  currentProject,
  introduction,
  mission,
  originStory,
  purpose,
  registration,
  vision,
} from "@/lib/site-data";
import { ArrowRight, HeartPulse, Landmark, Phone, ShieldPlus } from "lucide-react";

const stats = [
  { value: "24,095", label: "Lives claimed over the past decade" },
  { value: ">50,000", label: "Individuals left with severe injuries" },
  { value: "2,369", label: "Lives lost in FY 2080/81 alone" },
  { value: "7", label: "Daily road accident deaths in FY 2080/81" },
];

const icons = [HeartPulse, ShieldPlus, Landmark, Phone];

const facts = [
  "May 2026 to May 2031",
  "Funded by Subonita Foundation USA",
  "Implemented by BNMT Nepal",
  "Oversight and coordination by Subonita Health Foundation Nepal",
  "Two hubs currently starting in Nawalparasi East and Rautahat",
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-black/10 bg-white">
        <div className="container-shell grid min-h-[82vh] items-center gap-12 section-pad lg:grid-cols-[1.2fr_0.8fr]">
          <MotionWrapper>
            <p className="eyebrow">Subonita Foundation</p>
            <h1 className="h1 mt-4 max-w-5xl text-balance">
              Trauma Hub Project in Nepal
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-black/78">
              Every day in Nepal, lives are lost not because emergency care is impossible,
              but because it arrives too late.
            </p>
            <p className="mt-5 max-w-3xl leading-8 text-black/68">
              This website presents the institutional story, project structure, and
              current implementation of the Trauma Hub Project in Nepal, as led through
              Subonita Foundation USA, Subonita Health Foundation Nepal, and implementation
              partnership with BNMT Nepal.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/project"
                className="inline-flex items-center gap-2 rounded-full bg-brandRed px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Explore the Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-black transition hover:border-brandRed hover:text-brandRed"
              >
                Read the Foundation Story
              </Link>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-black/70 sm:grid-cols-2">
              <p>Company Registration: {registration.companyRegistration}</p>
              <p>Social Welfare Council Affiliation: {registration.socialWelfareCouncil}</p>
              <p>PAN#: {registration.pan}</p>
              <p>Tel: {contacts.phone}</p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.08}>
            <div className="relative h-[560px] w-full overflow-hidden rounded-[32px] border border-black/10 bg-ink shadow-[0_20px_80px_rgba(0,0,0,0.10)]">
              <Image
                src="/images/hero.jpg"
                alt="Subonita Foundation leadership"
                fill
                priority
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="max-w-[92%] rounded-[24px] bg-black/72 p-6 text-white backdrop-blur-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/65">
                    Vision
                  </p>
                  <p className="mt-3 text-base leading-8 text-white/92 sm:text-lg">
                    {vision}
                  </p>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell grid gap-6 lg:grid-cols-[1fr_1fr]">
          <MotionWrapper>
            <div className="card p-8 sm:p-10">
              <p className="eyebrow">Mission</p>
              <h2 className="h2 mt-4">What the project is designed to do</h2>
              <p className="mt-6 leading-8 text-black/75">{mission}</p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.08}>
            <div className="card p-8 sm:p-10">
              <p className="eyebrow">Purpose</p>
              <h2 className="h2 mt-4">Why this intervention matters</h2>
              <p className="mt-6 leading-8 text-black/75">{purpose}</p>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <section className="section-pad bg-stone-50">
        <div className="container-shell">
          <MotionWrapper>
            <p className="eyebrow">Road Traffic Reality</p>
            <h2 className="h2 mt-4">Why this initiative exists</h2>
            <p className="mt-4 max-w-3xl leading-8 text-black/70">
              Nepal’s highways carry movement, trade, and daily life. But when trauma happens,
              response time becomes the dividing line. The issue is not abstraction. It is delay.
            </p>
          </MotionWrapper>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = icons[index];
              return (
                <MotionWrapper key={stat.label} delay={index * 0.08}>
                  <div className="card p-6">
                    <Icon className="h-8 w-8 text-brandRed" />
                    <p className="mt-5 text-4xl font-bold tracking-tight text-brandRed">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-black/70">{stat.label}</p>
                  </div>
                </MotionWrapper>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <MotionWrapper>
            <div className="card p-8 sm:p-10">
              <p className="eyebrow">Introduction</p>
              <h2 className="h3 mt-4">The system gap</h2>
              <p className="mt-5 leading-8 text-black/75">{introduction}</p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.08}>
            <div className="card p-8 sm:p-10">
              <p className="eyebrow">How it started</p>
              <h2 className="h3 mt-4">Origin of the trauma hub vision</h2>
              <p className="mt-5 leading-8 text-black/75">{originStory}</p>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <MotionWrapper>
            <div className="card p-8 sm:p-10">
              <p className="eyebrow">Intervention</p>
              <h2 className="h2 mt-4">What a trauma hub changes</h2>
              <p className="mt-6 leading-8 text-black/75">
                This project is built around a simple structural response: place immediate
                trauma stabilization capacity closer to the accident corridor. Not distant
                theory. Not delayed referral alone. Immediate points of care and coordination
                where time matters most.
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.08}>
            <div className="card p-8 sm:p-10">
              <p className="eyebrow">Project Facts</p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-black/75 sm:text-base">
                {facts.map((fact) => (
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

      <Timeline />
      <NepalMapClient />

      <section className="section-pad bg-stone-50">
        <div className="container-shell grid gap-6 lg:grid-cols-[1fr_1fr]">
          <MotionWrapper>
            <div className="card p-8 sm:p-10">
              <p className="eyebrow">Current Project</p>
              <h2 className="h2 mt-4">Present implementation</h2>
              <p className="mt-6 leading-8 text-black/75">{currentProject}</p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.08}>
            <div className="card bg-ink p-8 text-white sm:p-10">
              <p className="text-sm uppercase tracking-[0.18em] text-white/50">What this means</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                This has already begun
              </h2>
              <p className="mt-6 leading-8 text-white/82">
                Two trauma hubs are currently being started in Nawalparasi East and Rautahat
                with cooperation and coordination with local municipalities in their respective
                city hospitals. This is not just a proposal page. It is an implementation page.
              </p>
              <div className="mt-8">
                <Link
                  href="/project"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:opacity-90"
                >
                  Read full project details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <MotionWrapper>
            <div className="card p-8 sm:p-10">
              <p className="eyebrow">Support the mission</p>
              <h2 className="h2 mt-4">Emergency care is also a systems question</h2>
              <p className="mt-4 max-w-3xl leading-8 text-black/75">
                The difference is not only technology. It is time, placement, readiness,
                and coordination. Support helps move emergency response capacity closer to
                where lives are won or lost.
              </p>
              <div className="mt-8">
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-2 rounded-full bg-brandRed px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  View donation details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}