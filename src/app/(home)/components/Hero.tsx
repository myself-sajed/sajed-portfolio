import LinkActions from './LinkActions'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
const Hero = () => {
    return (
        <div className="h-screen w-full relative z-30 bg-white">
            <section className="cd-position-relative cd-z-index-1">
                <div className="cd-position-relative cd-z-index-2">
                    <div style={{ height: "600px" }}>
                        <div className='absolute left-3 sm:right-5 top-5 z-10 flex items-center justify-end gap-5 md:gap-10 text-sm'>
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

                            <div className="text-center mt-[10rem] sm:mt-[12rem]">
                                <h1 className="text-base sm:text-lg md:text-xl font-bold">
                                    <code>{`<Hi there! I'm`} <span className="text-primary">Shaikh Sajed</span> {`/>`}</code>
                                </h1>
                                <div className="typewriter sm:mt-0 mt-10 sm:mb-0 mb-5 sm:mx-0 mx-2">
                                    <p className="text-[2.7rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[5rem] leading-[3.2rem] sm:leading-[6rem] font-extrabold text-slate-800">A Fullstack Web Developer</p>
                                </div>
                                <p className="text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.5rem] xl:text-[1.6rem] font-extrabold text-slate-800 sm:leading-[20px]"> where, &nbsp; I &nbsp;bring&nbsp;<span className='text-primary'> Ideas </span>&nbsp;to&nbsp; Web.
                                </p>
                                <LinkActions />

                            </div>
                        </div>
                    </div>
                </div>

                <figure className="hidden sm:block bg-decoration cd-z-index-1 animate-once animate-fade-down w-full overflow-hidden">
                    <svg
                        className="bg-decoration__svg w-full h-auto"
                        viewBox="0 0 1920 450"
                        fill="none"
                        preserveAspectRatio="xMidYMid slice"
                    >
                        <rect opacity="0.5" x="610.131" y="-440" width="128" height="836.003" transform="rotate(46.8712 610.131 -440)" fill="url(#bg-decoration-v1-fx-5-linear-1)" />
                        <rect opacity="0.5" x="1899.13" y="-262" width="128" height="836.003" transform="rotate(46.8712 1899.13 -262)" fill="url(#bg-decoration-v1-fx-5-linear-2)" />
                        <rect opacity="0.5" x="2076.13" y="-321" width="128" height="836.003" transform="rotate(46.8712 2076.13 -321)" fill="url(#bg-decoration-v1-fx-5-linear-3)" />
                        <rect opacity="0.5" x="1294.5" y="40.3308" width="128" height="836.003" transform="rotate(-132.518 1294.5 40.3308)" fill="url(#bg-decoration-v1-fx-5-linear-4)" />
                        <rect opacity="0.5" x="1866.13" y="-453" width="128" height="836.003" transform="rotate(46.8712 1866.13 -453)" fill="url(#bg-decoration-v1-fx-5-linear-5)" />
                        <rect opacity="0.5" x="800.131" y="-418" width="128" height="836.003" transform="rotate(46.8712 800.131 -418)" fill="url(#bg-decoration-v1-fx-5-linear-5)" />
                        <rect opacity="0.5" x="436.448" y="-251" width="76.1734" height="340.424" transform="rotate(46.8712 436.448 -251)" fill="url(#bg-decoration-v1-fx-5-linear-7)" />
                        <defs>
                            <linearGradient id="bg-decoration-v1-fx-5-linear-1" x1="674.131" y1="-440" x2="674.131" y2="396.003" gradientUnits="userSpaceOnUse">
                                <stop stopColor="var(--bg-decoration-color-2)" />
                                <stop offset="1" stopColor="var(--bg-decoration-color-2)" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="bg-decoration-v1-fx-5-linear-2" x1="1963.13" y1="-262" x2="1963.13" y2="574.003" gradientUnits="userSpaceOnUse">
                                <stop stopColor="var(--bg-decoration-color-2)" />
                                <stop offset="1" stopColor="var(--bg-decoration-color-2)" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="bg-decoration-v1-fx-5-linear-3" x1="2140.13" y1="-321" x2="2140.13" y2="515.003" gradientUnits="userSpaceOnUse">
                                <stop stopColor="var(--bg-decoration-color-2)" />
                                <stop offset="1" stopColor="var(--bg-decoration-color-2)" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="bg-decoration-v1-fx-5-linear-4" x1="1358.5" y1="40.3308" x2="1358.5" y2="876.334" gradientUnits="userSpaceOnUse">
                                <stop stopColor="var(--bg-decoration-color-2)" />
                                <stop offset="1" stopColor="var(--bg-decoration-color-2)" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="bg-decoration-v1-fx-5-linear-5" x1="1930.13" y1="-453" x2="1930.13" y2="383.003" gradientUnits="userSpaceOnUse">
                                <stop stopColor="var(--bg-decoration-color-2)" />
                                <stop offset="1" stopColor="var(--bg-decoration-color-2)" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="bg-decoration-v1-fx-5-linear-5" x1="864.131" y1="-418" x2="864.131" y2="418.003" gradientUnits="userSpaceOnUse">
                                <stop stopColor="var(--bg-decoration-color-2)" />
                                <stop offset="1" stopColor="var(--bg-decoration-color-2)" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="bg-decoration-v1-fx-5-linear-7" x1="474.534" y1="-251" x2="474.534" y2="89.4236" gradientUnits="userSpaceOnUse">
                                <stop stopColor="var(--bg-decoration-color-2)" stopOpacity="0" />
                                <stop offset="1" stopColor="var(--bg-decoration-color-2)" />
                            </linearGradient>
                        </defs>
                    </svg>
                </figure>

                <figure className="block sm:hidden bg-decoration animate-once animate-fade-down w-full overflow-hidden">
                    <svg
                        className="w-full h-auto"
                        viewBox="0 0 360 640"
                        fill="none"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <rect opacity="0.5" x="50" y="-100" width="60" height="400" transform="rotate(30 10 20)" fill="url(#gradient1)" />
                        <rect opacity="0.5" x="120" y="-190" width="60" height="900" transform="rotate(30 10 20)" fill="url(#gradient2)" />
                        <rect opacity="0.5" x="300" y="-100" width="60" height="300" transform="rotate(30 250 100)" fill="url(#gradient2)" />
                        <rect opacity="0.5" x="150" y="-200" width="60" height="300" transform="rotate(30 150 200)" fill="url(#gradient3)" />
                        <rect opacity="0.5" x="100" y="-50" width="60" height="400" transform="rotate(30 100 50)" fill="url(#gradient4)" />

                        <circle opacity="0.5" cx="50" cy="400" r="30" fill="url(#gradient5)" />
                        <defs>
                            <linearGradient id="gradient1" x1="100" y1="20" x2="70" y2="220" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#1e90ff" />
                                <stop offset="1" stopColor="#1e90ff" stopOpacity="-1" />
                            </linearGradient>
                            <linearGradient id="gradient2" x1="19" y1="1" x2="70" y2="420" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#e6f2fe" />
                                <stop offset="1" stopColor="#e6f2fe" stopOpacity="-1" />
                            </linearGradient>
                            <linearGradient id="gradient5" x1="50" y1="370" x2="50" y2="430" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#d0e8ff" />
                                <stop offset="1" stopColor="#d0e8ff" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="gradient6" x1="300" y1="470" x2="300" y2="530" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00ced1" />
                                <stop offset="1" stopColor="#00ced1" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="gradient7" x1="200" y1="520" x2="200" y2="580" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#ff6347" />
                                <stop offset="1" stopColor="#ff6347" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="gradient8" x1="100" y1="570" x2="100" y2="630" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#ffff00" />
                                <stop offset="1" stopColor="#ffff00" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </figure>



            </section>
        </div>
    )
}

export default Hero
