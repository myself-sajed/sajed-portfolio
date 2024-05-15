import Image from 'next/image'
import React from 'react'

const SkillIcons = () => {
    const icons = ["mongodb.svg", "express.svg", "node.svg", "next.svg", "react.svg", "javascript.svg", "tailwind.svg", "typescript.svg", "docker.svg", "aws.svg", "redis.svg"]

    return (
        <div className="flex justify-between items-center relative w-full">
            {
                icons.map((icon, index) => {
                    const middleIndex = Math.floor(icons.length / 2);
                    const distanceFromMiddle = Math.abs(index - middleIndex);

                    // Adjust the heightOffset calculation with a scaling factor
                    const scalingFactor = 4;
                    const heightOffset = Math.pow(middleIndex - distanceFromMiddle, 2) * scalingFactor;

                    return (
                        <div
                            key={index}
                            className='relative'
                            style={{ transform: `translateY(-${heightOffset}px)` }}
                        >
                            <Image
                                draggable={false}
                                src={`/assets/${icon}`}
                                alt={icon}
                                width={35}
                                height={35}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SkillIcons
