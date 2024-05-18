import { Button } from '@/components/ui/button'
import { ArrowRight, FileText } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const LinkActions = () => {
    return (
        <div className='flex items-center justify-center gap-5 mt-24'>
            <Link href="https://github.com/myself-sajed">
                <Image draggable={false} src="/assets/icons/github.svg" alt="github" width={58} height={58} /></Link>
            <Link href="https://www.linkedin.com/in/shaikhsajed">
                <Image draggable={false} src="/assets/icons/linkedin.svg" alt="linkedin" width={52} height={52} />
            </Link>
            <Link href="#skills">
                <Button type="submit" className="flex items-center gap-3">
                    <span>Get to Know Me</span> <ArrowRight strokeWidth={3} size={16} />
                </Button>
            </Link>
            <Link href="#skills">
                <Button type="submit" className="flex items-center gap-3">
                    <span>Download Resume</span> <FileText size={20} />
                </Button>
            </Link>
        </div>
    )
}

export default LinkActions
