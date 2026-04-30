import Image from "next/image";
import { MotionWrapper } from "@/components/motion-wrapper";
import { introduction, originStory, overview, relationshipText } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-black/8 bg-[#f5f0eb]">
        <div className="container-shell section-pad">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <MotionWrapper>
              <div>
                <p className="eyebrow">About the Foundation</p>

                <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Subonita Foundation and Subonita Health Foundation Nepal
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-black/75">
                  This page presents the organizational background, origin story, and stated
                  relationship between the USA and Nepal entities using the presentation content.
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.08}>
              <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <div className="relative aspect-square w-[100x]">
                  <Image
                    src="/images/origin.jpg"
                    alt="Subonita Foundation leadership speaking at an event"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <MotionWrapper>
            <div className="card p-8">
              <p className="eyebrow">Introduction</p>
              <p className="mt-5 leading-8 text-black/75">{introduction}</p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.08}>
            <div className="card p-8">
              <p className="eyebrow">Overview</p>
              <p className="mt-5 leading-8 text-black/75">{overview}</p>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-shell">
          <MotionWrapper>
            <div className="card p-8 sm:p-10">
              <p className="eyebrow">How it started</p>
              <h2 className="h2 mt-4">Origin story</h2>
              <p className="mt-6 leading-8 text-black/75">{originStory}</p>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <MotionWrapper>
            <div className="card p-8">
              <p className="eyebrow">Subonita Foundation USA</p>
              <p className="mt-5 leading-8 text-black/75">{relationshipText.usa}</p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.08}>
            <div className="card p-8">
              <p className="eyebrow">Subonita Health Foundation Nepal</p>
              <p className="mt-5 leading-8 text-black/75">{relationshipText.nepal}</p>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}