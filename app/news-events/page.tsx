import Image from "next/image";
import Link from "next/link";
import { newsEvents } from "@/lib/news-events";

export default function NewsEventsPage() {
  return (
    <section className="section-pad bg-white">
      <div className="container-shell">
        <p className="eyebrow">News & Events</p>
        <h1 className="h1 mt-4">Project Updates and Activities</h1>
        <p className="mt-4 max-w-3xl leading-8 text-black/70">
          Launches, field updates, implementation milestones, equipment support,
          public awareness activities, and other project developments related to
          the Trauma Hub Project in Nepal.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {newsEvents.map((item) => (
            <div key={item.slug} className="card overflow-hidden">
              <div className="relative h-56 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-brandRed">
                  {item.category}
                </p>

                <h2 className="mt-3 text-xl font-semibold text-ink">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-black/70">
                  {item.excerpt}
                </p>

                <p className="mt-3 text-xs text-black/50">{item.date}</p>

                {item.externalUrl ? (
                  <a
                    href={item.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-brandRed"
                  >
                    View Source →
                  </a>
                ) : (
                  <Link
                    href={`/news-events/${item.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-brandRed"
                  >
                    Read More →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}