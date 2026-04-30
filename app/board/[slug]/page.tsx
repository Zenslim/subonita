import Image from 'next/image'
import { notFound } from 'next/navigation'
import { boardMembers } from '@/lib/board-data'

// 1. Make the function 'async'
export default async function MemberPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> // 2. Change params to a Promise
}) {
  // 3. Await the params before using the slug
  const { slug } = await params
  
  const member = boardMembers.find((m) => m.slug === slug)

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
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          View Press Profile
        </a>
      )}
    </main>
  )
}