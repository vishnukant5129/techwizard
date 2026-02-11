import React from 'react'
import { Gamepad2, ChevronRight } from 'lucide-react'

const Competition = () => {
    return (
        <section id="competition" className="relative py-20 md:py-32 px-4">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-1 h-8 bg-pink-500" />
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wider">
                        //Competitive Paradigms
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <article className="p-6 bg-gradient-to-br from-white/5 to-white/3 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                            <Gamepad2 className="text-cyan-400" />
                            <h4 className="font-semibold">Robotics Challenge</h4>
                        </div>
                        <p className="text-sm text-gray-300">Build and program robots to complete tasks.</p>
                    </article>

                    <article className="p-6 bg-gradient-to-br from-white/5 to-white/3 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                            <ChevronRight className="text-cyan-400" />
                            <h4 className="font-semibold">Algorithm Sprint</h4>
                        </div>
                        <p className="text-sm text-gray-300">Competitive coding problems under time constraints.</p>
                    </article>

                    <article className="p-6 bg-gradient-to-br from-white/5 to-white/3 rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                            <Gamepad2 className="text-cyan-400" />
                            <h4 className="font-semibold">Drone Navigation</h4>
                        </div>
                        <p className="text-sm text-gray-300">Autonomous drone races and obstacle courses.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Competition
