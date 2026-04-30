import Image from 'next/image'
import Link from 'next/link'
import { boardMembers } from '@/lib/board-data'

export default function BoardPage() {
  return (
    <main className="py-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-semibold mb-10 text-center">
        Leadership
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {boardMembers.map((m) => (
          <Link key={m.slug} href={`/board/${m.slug}`}>
            <div className="cursor-pointer text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              <h3 className="font-semibold">{m.name}</h3>
              <p className="text-sm text-gray-500">{m.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}