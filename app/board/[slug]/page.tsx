import Image from 'next/image'
import { notFound } from 'next/navigation'
import { boardMembers } from '@/lib/board-data'

export default function MemberPage({ params }: { params: { slug: string } }) {
  const member = boardMembers.find((m) => m.slug === params.slug)

  if (!member) return notFound()

  return (
    <main className="py-20 px-6 max-w-3xl mx-auto text-center">
      <div className="relative w-48 h-48 mx-auto mb-6">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover rounded-full"
        />
      </div>

      <h1 className="text-3xl font-semibold">{member.name}</h1>
      <p className="text-gray-500 mb-6">{member.role}</p>

      <p className="mb-6">{member.bio}</p>

      {member.press && (
        <a
          href={member.press}
          target="_blank"
          className="text-blue-600 underline"
        >
          View Press Profile
        </a>
      )}
    </main>
  )
}