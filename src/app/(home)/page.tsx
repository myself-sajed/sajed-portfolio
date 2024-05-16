import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Projects from "./components/Projects"

const Home = () => {
    return (
        <div className="w-full">
            <Hero />
            <Experience />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home
