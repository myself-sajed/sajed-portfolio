import React from 'react'
import TechIcons from './TechIcons'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className="h-screen" style={{ userSelect: 'none' }}>
            <div className="flex items-center justify-center flex-col h-full w-full relative">
                <div className="text-center animate-once animate-fade-down">
                    <h1 className="text-xl font-semibold">
                        <code>{`<Hi there! I'm`} <span className="text-primary">Sajed</span>.
                            {` A`} <span className="text-primary">Full-stack Web Developer</span> {`where I/>`}
                        </code>
                    </h1>
                    <p className="text-[6rem] font-extrabold text-primary">Think. Build. Solve.</p>

                    <div className='flex items-center justify-center gap-5 mt-3'>
                        <Link href="https://github.com/myself-sajed">
                            <Image draggable={false} src="/assets/github.svg" alt="github" width={54} height={54} /></Link>
                        <Link href="https://www.linkedin.com/in/shaikhsajed">
                            <Image draggable={false} src="/assets/linkedin.svg" alt="linkedin" width={54} height={54} />
                        </Link>
                    </div>
                </div>
                <TechIcons />
            </div>
        </div>
    )
}

export default Hero
