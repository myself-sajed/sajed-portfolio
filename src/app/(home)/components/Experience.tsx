import Image from "next/image"
import SkillIcons from "./SkillIcons"
import ScrollingIcons from "./ScrollingIcons"

const Experience = () => {
    return (
        <div id="skills" className="w-full h-screen relative overflow-hidden">
            <div className="absolute left-[10%] top-[10%] w-full">
                <p className="inline text-[19.5rem] font-extrabold text-gray-100">M  E  R  N</p>
            </div>
            <h1 className="text-xl font-semibold text-center">
                <code className="text-primary">{`<Skills />`}</code>
            </h1>
            <div className="w-[90%]">
                <ScrollingIcons />
            </div>
        </div>
    )
}

export default Experience
