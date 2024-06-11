import Image from "next/image"
import CircleSquare from "./CircleSquare"
import Services from "./Services"
import Title from "../components/Title"

const WhyMe = () => {


    return (
        <div id="why-me" className='w-full pt-10'>
            <Title title="Why me?" />

            <div className="m-[1rem] sm:m-[2rem] md:m-[3rem] lg:m-[3.5rem] xl:m-[5rem] min-h-screen lg:flex items-start justify-between">
                <div className="relative mt-[5rem] flex items-center justify-center w-full lg:w-fit lg:block">
                    <div className="absolute top-[-15%] right-[12%] sm:right-[30%] md:right-[33%] lg:right-[-15%]">
                        <Image draggable={false} src="/assets/icons/circle.svg" width={100} height={100} alt="Sajed Shaikh" className="h-[45px] w-[45px] sm:h-[60px] sm:w-[60px] md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px] " />
                    </div>
                    <div className="absolute left-[12%] sm:left-[27%] md:left-[32%] lg:left-0 bottom-[-15%] md:bottom-[-21%] lg:bottom-[-15%]">
                        <CircleSquare color="#1FA2FF" />
                    </div>
                    <Image draggable={false} src="/assets/dev.jpeg" className="rounded-tl-3xl rounded-br-3xl lg:ml-10 w-[170px] h-[170px] sm:w-[190px] sm:h-[190px] md:w-[220px] md:h-[220px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px]" width={300} height={300} alt="Sajed Shaikh" />
                </div>
                <div className="w-full lg:w-[60%] mt-[10rem] lg:mt-0">
                    <Services />
                </div>
            </div>
        </div>
    )
}

export default WhyMe
