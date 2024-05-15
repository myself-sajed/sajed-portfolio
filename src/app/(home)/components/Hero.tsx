import React from 'react'
import LinkActions from './LinkActions'
import SkillIcons from './SkillIcons'
import Stripe from './Stripe'

const Hero = () => {
    return (
        <div className="h-screen w-full relative" style={{ userSelect: 'none' }}>
            <Stripe />

            <div className="flex items-center justify-center flex-col h-full w-full relative animate-once animate-fade-up ">
                <div className='absolute top-[23%] w-[80%]'>
                    <SkillIcons />
                </div>

                <div className="text-center mt-[8rem]">
                    <h1 className="text-xl font-semibold">
                        <code>{`<Hi there! I'm`} <span className="text-primary">Sajed</span> {`/>`}</code>
                    </h1>
                    <p className="text-[5.5rem] font-extrabold text-slate-800">A Fullstack Web Developer</p>
                    <p className="text-[2rem] font-extrabold" style={{ lineHeight: '30px' }}> where,
                        <span className='text-primary'>&nbsp; &nbsp; I Think.  &nbsp; I Build.  &nbsp; I Solve.</span>
                    </p>
                    <LinkActions />
                </div>
            </div>
        </div>
    )
}

export default Hero
