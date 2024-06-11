import Image from 'next/image'
import React from 'react'

const Services = () => {

    const services = [
        {
            title: "Great User Experience",
            desc: "Creating intuitive and engaging interfaces that enhance user satisfaction and usability."
        },
        {
            title: "Responsive Design",
            desc: "Ensuring that the website is optimized for all devices, including mobile devices."
        },
        {
            title: "Performance Optimization",
            desc: "Ensuring fast load times and smooth interactions for an optimal user experience."
        },
        {
            title: "Accessibility",
            desc: "Ensuring that the website is accessible to all users, regardless of their technical skills."
        },
        {
            title: "Continuous Learning and Adaptation",
            desc: "Staying updated with the latest technologies and trends to provide cutting-edge solutions."
        },
        {
            title: "Communication",
            desc: "Providing excellent communication and collaboration between team members."
        },
        {
            title: "Project Management",
            desc: "Managing projects and tasks effectively, ensuring timely delivery and timely completion."
        },
        {
            title: "Leadership",
            desc: "Providing leadership and guidance to team members in achieving project goals."
        }
    ]



    return (
        <div>
            <ul className="space-y-5">
                <li className="max-w-lg flex gap-x-2 sm:gap-x-4">
                    <Image className="inline-block size-6 sm:size-7 md:size-8 lg:size-9 rounded-full object-cover" src="/assets/client.jpg" width={100} height={100} alt="Image Description" />

                    <div>
                        <div className="bg-white border border-gray-200 rounded-e-2xl rounded-bl-2xl p-2 lg:p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
                            <div className="space-y-1.5">
                                <p className="text-xs sm:text-sm text-gray-800 dark:text-white">
                                    Nice portfolio! But, why should we choose you?
                                </p>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="flex ms-auto gap-x-2 sm:gap-x-4 sm:w-[90%]">
                    <div className="grow space-y-3">
                        <div className="inline-flex flex-col justify-end">
                            <div className="inline-block bg-blue-600 rounded-s-2xl rounded-br-2xl p-2 lg:p-4 shadow-sm">
                                <p className="text-xs sm:text-sm text-white text-end font-semibold">
                                    You should choose me because I provide:
                                </p>

                                <div className='grid grid-cols-2 gap-5 mt-5'>
                                    {
                                        services.map((service) => {
                                            return <div key={service.title}>
                                                <p className="text-xs sm:text-sm text-white">{service.title}</p>
                                                <p className="text-[9px] sm:text-[11px] text-gray-200">{service.desc}</p>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>

                            <span className="mt-1.5 ms-auto flex items-center gap-x-1 text-xs text-primary ">
                                <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6 7 17l-5-5"></path>
                                    <path d="m22 10-7.5 7.5L13 16"></path>
                                </svg>
                            </span>
                        </div>
                    </div>

                    <Image className="inline-block size-6 sm:size-7 md:size-8 lg:size-9 rounded-full object-cover" src="/assets/dev.jpeg" width={100} height={100} alt="Image Description" />
                </li>

                <li className="max-w-lg flex gap-x-2 sm:gap-x-4">
                    <Image className="inline-block size-6 sm:size-7 md:size-8 lg:size-9 rounded-full object-cover" src="/assets/client.jpg" width={100} height={100} alt="Image Description" />

                    <div>
                        <div className="bg-white border border-gray-200 rounded-e-2xl rounded-bl-2xl p-2 lg:p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
                            <div className="space-y-1.5">
                                <p className="text-xs sm:text-sm text-gray-800 dark:text-white">
                                    Salary kitne loge bhaiya, discuss karle?
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Services
