import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LinkActions = () => {
    return (
        <div className='flex items-center justify-center gap-5 mt-24'>
            <Link href="https://github.com/myself-sajed">
                <Image draggable={false} src="/assets/github.svg" alt="github" width={58} height={58} /></Link>
            <Link href="https://www.linkedin.com/in/shaikhsajed">
                <Image draggable={false} src="/assets/linkedin.svg" alt="linkedin" width={52} height={52} />
            </Link>
            <Link href="#skills">
                <Button>Get to Know Me</Button>
            </Link>
        </div>
    )
}

export default LinkActions
