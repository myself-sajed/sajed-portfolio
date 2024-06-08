import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface IProjectItem {
    title: string;
    desc: string;
    imgURL: string;
    websiteURL: string;
    githubURL: string;
    techStack: string[];
}

const ProjectCard = ({ project }: { project: IProjectItem }) => {
    return (
        <div className="cta-banner bg-white rounded-xl overflow-hidden border-2 cursor-pointer group">
            <div className="grid items-center gap-6">
                <figure className="min-w-2 lg:col-2 border-b">
                    <Image className="w-full rounded-t-lg cursor-pointer group-hover:brightness-75 transition duration-300" src={`/assets/projects/${project.imgURL}`} height={1500} width={1500} alt="Image description" />
                </figure>
                <div className="p-6 min-w-0 lg:col-1">
                    <div className="text-center grid gap-3 lg:text-left lg:pl-6">
                        <h1 className="text-[1.75rem]">{project.title}</h1>

                        <p className="text-[0.9375rem] text-gray-500 lg:text-lg lg:leading-tight">{project.desc}</p>

                        <div className='mt-3'>
                            <span className="text-muted-foreground text-sm">Built utilizing:</span>
                            <div className="flex space-x-2 mt-2">
                                {
                                    project.techStack.map((tech) => {
                                        return <Image key={tech} src={`/assets/icons/${tech}`} className="inline-block rounded-full border-blue-500 border-[2.5px] bg-white p-1" alt={tech} height={35} width={35} />
                                    })
                                }

                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start mt-5">
                            <Link href={project.websiteURL} target='_blank'>
                                <Button className='flex items-center gap-4'><span>Go to Website</span> <ExternalLink size={17} strokeWidth={2} />
                                </Button>
                            </Link>
                            <Link href={project.githubURL} target='_blank'>
                                <Button className='flex items-center gap-4 bg-black hover:bg-slate-800'>
                                    <Github size={17} strokeWidth={2} /> <span>Source Code</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard

