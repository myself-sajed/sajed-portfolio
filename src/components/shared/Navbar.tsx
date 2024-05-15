import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='p-3  rounded-full absolute top-10 left-0 right-0 mx-auto w-[40%] z-30'>
            <div className='text-white flex items-center justify-between gap-5'>
                <Link href='/'>Home</Link>
                <Link href='/#'>Projects</Link>
                <Link href='/#'>Contact</Link>
                <Link href='/#'>About</Link>
            </div>
        </div>
    )
}

export default Navbar
