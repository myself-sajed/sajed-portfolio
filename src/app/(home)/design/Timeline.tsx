import { Baby } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { iconDetails } from './ScrollingIcons'

const Timeline = () => {
    return (
        <div className="w-[65%] mx-auto mt-[4rem]">

            <ol className="relative border-s border-gray-200 dark:border-gray-700 z-30">
                <li className="mb-10 ms-6">
                    <span className="absolute border flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3">
                        <Image height={42} width={42} className="rounded-full shadow-lg" src="/assets/projects/srt.png" alt="Swami Ramanand Teerth Marathwada University, Nanded" />
                    </span>
                    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                        <div className="items-center justify-between mb-3 sm:flex">
                            <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Working as a Fullstack Web Developer @ <a href="#" className="font-semibold text-gray-900 dark:text-white hover:underline">SRTMU, Nanded</a></div>
                            <i className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">From May 2022 to Present</i>
                        </div>
                        <div className="p-3 text-xs font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                            <ul className='list-disc pl-5 space-y-2'>
                                <li>Completely transformed and digitalized the exchange of information within or outside University.
                                </li>
                                <li>
                                    Designed a beautiful UI using Tailwind CSS with minimal loading times, utilizing the efficiency of Node JS and React JS.
                                </li>
                                <li>
                                    Designed and Developed beutiful Analytical Dashboards for better data visualization.
                                </li>
                                <li>
                                    Leveraged the power of Socket.io for realtime feed updation with enhanced security while data-transfer.
                                </li>
                            </ul>

                        </div>
                    </div>
                </li>
                <li className="mb-10 ms-6">
                    <span className="absolute border flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3">
                        <Image height={42} width={42} className="rounded-full shadow-lg" src="/assets/dev.jpeg" alt="Shaikh Sajed" />
                    </span>
                    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                        <div className="items-center justify-between mb-3 sm:flex">
                            <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">I have always been a tech enthusiast with a passion for creating websites. This passion led me to realize that web development is what I truly love. Driven by this discovery, I immersed myself in learning and mastering new skills.</div>
                            <i className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Skills</i>
                        </div>
                        <div className="px-3 pt-3 pb-4 text-xs font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50">
                            <p className='text-center mt-2 font-semibold text-primary '>Today, I have <span className="font-bold text-sm mx-1">2+ Years</span> of experience in </p>

                            <div className="grid grid-cols-4 items-center gap-y-10 my-8">
                                {
                                    iconDetails.map((icon) => {
                                        return <div key={icon.name} className='flex items-center justify-center flex-col'>
                                            <Image draggable={false} src={`/assets/icons/${icon.icon}`} alt={icon.name} width={46} height={46} />
                                            <span>{icon.name}</span>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </li>

            </ol>


        </div>
    )
}

export default Timeline
