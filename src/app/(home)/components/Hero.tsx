import LinkActions from './LinkActions'
import Stripe from '../design/Stripe'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

const Hero = () => {
    return (
        <div className="h w-full relative bg-slate-50">
            <section className="cd-position-relative cd-z-index-1">

                <div className="cd-position-relative cd-z-index-2">
                    <div style={{ height: "600px" }}>
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
                                    <code>{`<Hi there! I'm`} <span className="text-primary">Shaikh Sajed</span> {`/>`}</code>
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
                </div>

                <figure className="bg-decoration cd-z-index-1 animate-once animate-fade-down" aria-hidden="true">
                    <svg className="bg-decoration__svg" viewBox="0 0 1920 450" fill="none">
                        <rect opacity="0.5" x="610.131" y="-440" width="128" height="836.003" transform="rotate(46.8712 610.131 -440)"
                            fill="url(#bg-decoration-v1-fx-5-linear-1)" />
                        <rect opacity="0.5" x="1899.13" y="-262" width="128" height="836.003" transform="rotate(46.8712 1899.13 -262)"
                            fill="url(#bg-decoration-v1-fx-5-linear-2)" />
                        <rect opacity="0.5" x="2076.13" y="-321" width="128" height="836.003" transform="rotate(46.8712 2076.13 -321)"
                            fill="url(#bg-decoration-v1-fx-5-linear-3)" />
                        <rect opacity="0.5" x="1294.5" y="40.3308" width="128" height="836.003"
                            transform="rotate(-132.518 1294.5 40.3308)" fill="url(#bg-decoration-v1-fx-5-linear-4)" />
                        <rect opacity="0.5" x="1866.13" y="-453" width="128" height="836.003" transform="rotate(46.8712 1866.13 -453)"
                            fill="url(#bg-decoration-v1-fx-5-linear-5)" />
                        <rect opacity="0.5" x="800.131" y="-418" width="128" height="836.003" transform="rotate(46.8712 800.131 -418)"
                            fill="url(#bg-decoration-v1-fx-5-linear-5)" />
                        <rect opacity="0.5" x="436.448" y="-251" width="76.1734" height="340.424" transform="rotate(46.8712 436.448 -251)"
                            fill="url(#bg-decoration-v1-fx-5-linear-7)" />
                        <defs>
                            <linearGradient id="bg-decoration-v1-fx-5-linear-1" x1="674.131" y1="-440" x2="674.131" y2="396.003"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="var(--bg-decoration-color-2)" />
                                <stop offset="1" stop-color="var(--bg-decoration-color-2)" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="bg-decoration-v1-fx-5-linear-2" x1="1963.13" y1="-262" x2="1963.13" y2="574.003"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="var(--bg-decoration-color-2)" />
                                <stop offset="1" stop-color="var(--bg-decoration-color-2)" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="bg-decoration-v1-fx-5-linear-3" x1="2140.13" y1="-321" x2="2140.13" y2="515.003"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="var(--bg-decoration-color-2)" />
                                <stop offset="1" stop-color="var(--bg-decoration-color-2)" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="bg-decoration-v1-fx-5-linear-4" x1="1358.5" y1="40.3308" x2="1358.5" y2="876.334"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="var(--bg-decoration-color-2)" />
                                <stop offset="1" stop-color="var(--bg-decoration-color-2)" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="bg-decoration-v1-fx-5-linear-5" x1="1930.13" y1="-453" x2="1930.13" y2="383.003"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="var(--bg-decoration-color-2)" />
                                <stop offset="1" stop-color="var(--bg-decoration-color-2)" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="bg-decoration-v1-fx-5-linear-5" x1="864.131" y1="-418" x2="864.131" y2="418.003"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="var(--bg-decoration-color-2)" />
                                <stop offset="1" stop-color="var(--bg-decoration-color-2)" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="bg-decoration-v1-fx-5-linear-7" x1="474.534" y1="-251" x2="474.534" y2="89.4236"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="var(--bg-decoration-color-2)" stop-opacity="0" />
                                <stop offset="1" stop-color="var(--bg-decoration-color-2)" />
                            </linearGradient>
                        </defs>
                    </svg>
                </figure>
            </section>
        </div>
    )
}

export default Hero
