import React from 'react'
import LinkActions from './LinkActions'
import Stripe from './Stripe'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

const Hero = () => {
    return (
        <div className="h-screen w-full relative">
            <Stripe />
            <div className='absolute top-5 right-5 z-10 flex items-center justify-end gap-10 text-sm'>
                <div className='flex items-center justify-end gap-2'>
                    <Phone size={18} />
                    <span>7773936878</span>
                </div>
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=digitalsajed@gmail.com" target="_blank" className='flex items-center justify-end gap-2 hover:text-primary'>
                    <Mail size={20} />
                    <span>digitalsajed@gmail.com</span>
                </Link>
            </div>
            <div className="flex items-center flex-col h-full w-full relative animate-once animate-fade-up ">

                <div className="text-center mt-[12rem]">
                    <h1 className="text-xl font-semibold">
                        <code>{`<Hi there! I'm`} <span className="text-primary">Sajed</span> {`/>`}</code>
                    </h1>
                    <div className="typewriter">
                        <p className="text-[5.5rem] font-extrabold text-slate-800">A Fullstack Web Developer</p>
                    </div>
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
