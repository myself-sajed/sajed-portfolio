import Timeline from "../design/Timeline"

const Experience = () => {
    return (
        <div id="skills" className="w-full">
            <div className="py-10 bg-[#ffffff9f] relative overflow-hidden z-30 border-double border-b-4 border-primary">
                <h1 className="text-xl font-semibold text-center">
                    <code className="text-primary">{`<Experience & Skill Set />`}</code>
                </h1>
                <Timeline />
            </div>
            <div className="h-screen">
                <div className="fixed left-[10%] bottom-[10%] w-full">
                    <p className="inline text-[19.5rem] font-extrabold  text-[#50a7ff50]">M  E  R  N</p>
                </div>
            </div>
        </div>
    )
}

export default Experience
