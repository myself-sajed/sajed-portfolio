import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface IProjectItem {
    imgUrl: string
    title: string
    description: string
    url: string
}

const ProjectCard = ({ imgUrl, title, description, url }: IProjectItem) => {
    return (
        <Link href={url} className="cta-banner bg-white rounded-xl overflow-hidden border-2 cursor-pointer group">
            <div className="grid items-center gap-6">
                <figure className="min-w-2 lg:col-2">
                    <Image className="w-full rounded-t-lg cursor-pointer group-hover:brightness-75 transition duration-300" src={imgUrl} height={1500} width={1500} alt="Image description" />
                </figure>
                <div className="p-6 min-w-0 lg:col-1">
                    <div className="text-center grid gap-3 lg:text-left lg:pl-6">
                        <h1 className="text-[1.75rem]">{title}</h1>

                        <p className="text-[0.9375rem] text-gray-500 lg:text-lg lg:leading-tight">{description}</p>

                        <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start mt-5">
                            <Button className='flex items-center gap-4'><span>Go to Website</span> <ExternalLink size={17} strokeWidth={2} /></Button>
                            <Button className='flex items-center gap-4 bg-black hover:bg-slate-800'><Github size={17} strokeWidth={2} /> <span>Source Code</span> </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard

