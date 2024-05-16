import ScrollingIcons from "../design/ScrollingIcons"
import Timeline from "../design/Timeline"

const Experience = () => {
    return (
        <div id="skills" className="w-full relative overflow-hidden">
            <h1 className="text-xl font-semibold text-center">
                <code className="text-primary">{`<Experience & Skill Set />`}</code>
            </h1>
            <Timeline />
            <div className="h-screen">
                <div className="fixed left-[10%] bottom-[10%] w-full">
                    <p className="inline text-[19.5rem] font-extrabold  text-[#ededed50]">M  E  R  N</p>
                </div>
            </div>
        </div>
    )
}

export default Experience
