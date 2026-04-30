'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const members = [
  {
    name: 'Anita Mallik',
    role: 'President (USA)',
    img: '/board/anita-mallik.jpg',
  },
  {
    name: 'Dr. Subodh Kumar Mallik',
    role: 'Vice President (USA)',
    img: '/board/subodh-mallik.jpg',
  },
  {
    name: 'Heem Sunder Shakya',
    role: 'President (Nepal)',
    img: '/board/heem-shakya.jpg',
  },
  {
    name: 'Dr. Mritunjaya Shrestha',
    role: 'Member',
    img: '/board/mritunjaya-shrestha.jpg',
  },
  {
    name: 'Bhupendra B. Shakya',
    role: 'Member',
    img: '/board/bhupendra-shakya.jpg',
  },
  {
    name: 'Deependra B. Pradhan',
    role: 'Member',
    img: '/board/deependra-pradhan.jpg',
  },
  {
    name: 'RamBalak Shah',
    role: 'Treasurer',
    img: '/board/rambalak-shah.jpg',
  },
]

export default function Board() {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-semibold">Board Members</h2>
        <p className="text-gray-600 mt-2">
          Leadership across USA and Nepal
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {members.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-xl shadow-md p-4 text-center"
          >
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src={m.img}
                alt={m.name}
                fill
                className="object-cover rounded-full"
              />
            </div>

            <h3 className="font-semibold">{m.name}</h3>
            <p className="text-sm text-gray-500">{m.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}