import Image from 'next/image'

export const iconDetails = [
    {
        name: "HTML",
        icon: "html.svg"
    },
    {
        name: "CSS",
        icon: "css.svg"
    },
    {
        name: "JavaScript",
        icon: "javascript.svg"
    },
    {
        name: "TypeScript",
        icon: "typescript.svg"
    },
    {
        name: "Tailwind CSS",
        icon: "tailwind.svg"
    },
    {
        name: "React JS",
        icon: "react.svg"
    },
    {
        name: "Next JS",
        icon: "next.svg"
    },
    {
        name: "Node JS",
        icon: "node.svg"
    },
    {
        name: "Express JS",
        icon: "express.svg"
    },
    {
        name: "MongoDB",
        icon: "mongodb.svg"
    },
    {
        name: "Docker",
        icon: "docker.svg"
    },
    {
        name: "AWS",
        icon: "aws.svg"
    }
]

const ScrollingIcons = () => {
    const icons = ["html.svg", "css.svg", "mongodb.svg", "express.svg", "node.svg", "next.svg", "react.svg", "javascript.svg", "tailwind.svg", "typescript.svg", "docker.svg", "aws.svg"]

    return (
        <div className='flex items-center justify-end gap-10 '>
            <div className="mt-[5rem] space-y-10 icons-top">
                {
                    [...icons, ...icons].map((icon, index) => {
                        return (
                            <div
                                key={index}
                                className='relative'
                            >
                                <Image
                                    draggable={false}
                                    className='grayscale-[50%]'
                                    src={`/assets/${icon}`}
                                    alt={icon}
                                    width={46}
                                    height={46}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div className="mt-[5rem] space-y-10 icons-bottom">
                {
                    [...icons, ...icons].map((icon, index) => {
                        return (
                            <div
                                key={index}
                                className='relative'
                            >
                                <Image
                                    draggable={false}
                                    className='grayscale-[50%]'
                                    src={`/assets/${icon}`}
                                    alt={icon}
                                    width={46}
                                    height={46}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ScrollingIcons
