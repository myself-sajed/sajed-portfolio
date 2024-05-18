import Image from "next/image"
import CircleSquare from "./CircleSquare"
import Services from "./Services"

const WhyMe = () => {


    return (
        <div id="why-me" className='w-full pt-10 border-double border-t-4 border-primary'>
            <h1 className="text-xl font-semibold text-center">
                <code className="text-primary">{`<Why Me? />`}</code>
            </h1>
            <div className="m-[5rem] h-screen flex items-start justify-between">

                <div className="relative mt-[5rem]">
                    <div className="absolute top-[-15%] right-[-15%]">
                        <Image draggable={false} src="/assets/icons/circle.svg" width={100} height={100} alt="Sajed Shaikh" />

                    </div>
                    <div className="absolute bottom-[-15%]">
                        <CircleSquare color="#1FA2FF" />
                    </div>
                    <Image draggable={false} src="/assets/dev.jpeg" className="rounded-tl-3xl rounded-br-3xl ml-10" width={300} height={300} alt="Sajed Shaikh" />
                </div>
                <div className="w-[60%]">
                    <Services />
                </div>
            </div>
        </div>
    )
}

export default WhyMe
