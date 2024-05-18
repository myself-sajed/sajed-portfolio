import ProjectCard from "../design/ProjectCard"

// https://codyhouse.co/ds/components/app/call-to-action-banner--img-no-padding
const Projects = () => {
    return (
        <div id="projects" className='w-full pt-10 pb-[4rem] border-double border-t-4 border-primary'>
            <h1 className="text-xl font-semibold text-center">
                <code className="text-primary">{`<Major Projects />`}</code>
            </h1>
            <div className="mt-10 px-10 grid grid-cols-3 gap-10">
                <ProjectCard title="SRTMUN-UIMS" description="University Information Management" imgUrl="/assets/projects/p3.png" url="https://codeshare.netlify.app" />
                <ProjectCard title="CodeShare" description="Share code in an easy way" imgUrl="/assets/projects/p1.png" url="https://codeshare.netlify.app" />
                <ProjectCard title="Indian Toll Calculator" description="Calculate Indian tolls with ease" imgUrl="/assets/projects/p2.png" url="https://codeshare.netlify.app" />
            </div>
        </div>
    )
}

export default Projects
