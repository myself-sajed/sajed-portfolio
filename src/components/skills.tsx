import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { DATA } from "@/data/resume";
import BlurFade from "./magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/app/page";
import Image from "next/image";

export function Skills() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s] mb-10 gap-10">
                {DATA.skills.slice(0, 7).map(({ icon, name }, id) => (
                    <BlurFade key={name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                        <div key={icon} className="flex flex-col items-center gap-1">
                            <Image
                                draggable={false}
                                src={`/assets/icons/${icon}`}
                                alt={name}
                                width={46}
                                height={46}
                                className="w-10 h-10 sm:w-12 sm:h-12"
                            />
                            <span className='text-xs'>{name}</span>
                        </div>
                    </BlurFade>
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {DATA.skills.slice(7).map(({ icon, name }, id) => (
                    <BlurFade key={name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                        <div key={icon} className="flex flex-col items-center gap-1">
                            <Image
                                draggable={false}
                                src={`/assets/icons/${icon}`}
                                alt={name}
                                width={46}
                                height={46}
                                className="w-10 h-10 sm:w-12 sm:h-12"
                            />
                            <span className='text-xs'>{name}</span>
                        </div>
                    </BlurFade>
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
    );
}
