import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Projects from "./components/Projects"

const Home = () => {
    return (
        <div className="w-full">
            <Hero />
            <Experience />
            <div className="relative z-40 bg-white">
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default Home
