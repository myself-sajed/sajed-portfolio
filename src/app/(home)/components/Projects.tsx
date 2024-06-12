import ProjectCard from "../design/ProjectCard"
import Title from "./Title"

const Projects = () => {

    const projectDetails = [
        {
            title: "SRTMUN-UIMS",
            desc: "A University Information Management System.",
            techStack: ["react.svg", "redux.svg", "tailwind.svg", "node.svg", "mongodb.svg",],
            websiteURL: 'https://srtmun-uims.org',
            githubURL: 'https://github.com/myself-sajed/SRTMUN-UIMS',
            imgURL: 'p3.png'
        },
        {
            title: "Connector",
            desc: "A reliable chatting and realtime coding platform.",
            techStack: ["next.svg", "redux.svg", "tailwind.svg", "node.svg", "mongodb.svg", "socket.svg"],
            websiteURL: 'https://connector-sajed.vercel.app/',
            githubURL: 'https://github.com/myself-sajed/connector-client',
            imgURL: 'p1.png'
        },
        {
            title: "PhonePe Web (UI Only)",
            desc: "A UI PhonePe Web version with mock banking services.",
            techStack: ["react.svg", "redux.svg", "tailwind.svg", "firebase.svg"],
            websiteURL: 'https://phonepe-web.vercel.app/',
            githubURL: 'https://github.com/myself-sajed/PhonePe',
            imgURL: 'p2.png'
        },
    ]


    return (
        <div>
            <div id="fullstack-projects" className='w-full py-10 pb-[4rem] shadow-border'>
                <Title title="Projects" />

                <div className="mt-10 p-3 md:p-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        projectDetails.map((project) => {
                            return (
                                <ProjectCard key={project.title} project={project} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects
