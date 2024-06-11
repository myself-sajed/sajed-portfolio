"use client"
import { Button } from '@/components/ui/button'
import { ArrowRight, FileText } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const LinkActions = () => {


    const downloadResume = () => {
        const pdfUrl = "/assets/Shaikh Sajed Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Shaikh Sajed Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <div className='sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-5 mt-16 sm:mt-24'>
            <Link href="https://github.com/myself-sajed" className="hidden sm:block">
                <Image draggable={false} src="/assets/icons/github.svg" alt="github" width={58} height={58} /></Link>
            <Link href="https://www.linkedin.com/in/shaikhsajed" className="hidden sm:block">
                <Image draggable={false} src="/assets/icons/linkedin.svg" alt="linkedin" width={52} height={52} />
            </Link>
            <Link href="#skills" className="hidden sm:block">
                <Button type="button" className="flex items-center gap-3" >
                    <span>Get to Know Me</span> <ArrowRight strokeWidth={3} size={16} />
                </Button>
            </Link>
            <Button onClick={downloadResume} type="button" className="sm:flex items-center gap-3 hidden" >
                <span>Download Resume</span> <FileText size={20} />
            </Button>



            <div className='flex items-center justify-center gap-2 sm:hidden'>
                <Link href="https://github.com/myself-sajed">
                    <Image draggable={false} src="/assets/icons/github.svg" alt="github" width={38} height={38} />
                </Link>
                <Link href="https://www.linkedin.com/in/shaikhsajed">
                    <Image draggable={false} src="/assets/icons/linkedin.svg" alt="linkedin" width={32} height={32} />
                </Link>
            </div>


            <div className='flex items-center justify-center gap-2 sm:hidden mt-5'>
                <Button onClick={downloadResume} type="button" className="flex items-center gap-3">
                    <span>Download Resume</span> <FileText size={20} />
                </Button>
                <Link href="#skills">
                    <Button type="button" className="flex items-center gap-3">
                        <span>Know Me</span> <ArrowRight strokeWidth={3} size={16} />
                    </Button>
                </Link>

            </div>


        </div>
    )
}

export default LinkActions
