import Image from 'next/image'
import React from 'react'

const TechIcons = () => {

    const icons = ["mongodb.svg", "express.svg", "react.svg", "next.svg", "node.svg", "tailwind.svg", "typescript.svg", "docker.svg", "aws.svg", "redis.svg"]


    return (
        <div className='flex items-center gap-3 justify-center delay-1000 animate-once animate'>
            <Image draggable={false} src="/assets/aws.svg" className='grayscale-[50%] absolute top-20 right-20 animate-once animate-fade-left' alt="aws" width={48} height={48} />
            <Image draggable={false} src="/assets/express.svg" className='grayscale-[50%] absolute top-20 left-20 animate-once animate-fade-right' alt="express" width={48} height={48} />
            <Image draggable={false} src="/assets/node.svg" className='grayscale-[50%] absolute bottom-10 right-[26rem] animate-once animate-fade-left' alt="node" width={52} height={52} />
            <Image draggable={false} src="/assets/next.svg" className='grayscale-[50%] absolute bottom-24 left-48 animate-once animate-fade-right' alt="next" width={52} height={52} />
            <Image draggable={false} src="/assets/redis.svg" className='grayscale-[50%] absolute top-60 left-20 animate-once animate-fade-right' alt="redis" width={48} height={48} />
            <Image draggable={false} src="/assets/docker.svg" className='grayscale-[50%] absolute top-60 right-20 animate-once animate-fade-left' alt="docker" width={48} height={48} />
            <Image draggable={false} src="/assets/typescript.svg" className='grayscale-[50%] absolute top-96 left-28 animate-once animate-fade-right' alt="typescript" width={48} height={48} />
            <Image draggable={false} src="/assets/tailwind.svg" className='grayscale-[50%] absolute top-96 right-28 animate-once animate-fade-left' alt="tailwind" width={48} height={48} />
            <Image draggable={false} src="/assets/mongodb.svg" className='grayscale-[50%] absolute bottom-20 right-48 animate-once animate-fade-left' alt="mongodb" width={48} height={48} />
            <Image draggable={false} src="/assets/javascript.svg" className='grayscale-[50%] absolute bottom-10 left-[26rem] animate-once animate-fade-right' alt="javascript" width={52} height={52} />
            <Image draggable={false} src="/assets/react.svg" className='grayscale-[50%] absolute bottom-10 right-[50%] animate-once animate-fade-up' alt="react" width={52} height={52} />



        </div>
    )
}

export default TechIcons
