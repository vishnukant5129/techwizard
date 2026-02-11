import React from 'react'
import { Wrench, Zap, Cpu } from 'lucide-react'

const Workshop = () => {
  return (
    <section id="workshop" className="relative py-20 md:py-32 px-4">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-1 h-8 bg-cyan-400" />
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wider">Workshops</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="p-6 bg-gradient-to-br from-white/5 to-white/3 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Wrench className="text-cyan-400" />
              <h4 className="font-semibold">Hands-on Robotics</h4>
            </div>
            <p className="text-sm text-gray-300">Practical sessions on building and programming robots.</p>
          </article>

          <article className="p-6 bg-gradient-to-br from-white/5 to-white/3 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="text-cyan-400" />
              <h4 className="font-semibold">Rapid Prototyping</h4>
            </div>
            <p className="text-sm text-gray-300">Fast-paced prototyping using microcontrollers and sensors.</p>
          </article>

          <article className="p-6 bg-gradient-to-br from-white/5 to-white/3 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Cpu className="text-cyan-400" />
              <h4 className="font-semibold">AI & Embedded Systems</h4>
            </div>
            <p className="text-sm text-gray-300">Introduction to on-device ML and embedded software.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Workshop
