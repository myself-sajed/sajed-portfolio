import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import HorizontalScrolling from "./design/HorizontalScrolling"
import HorizontalScroll from "./design/HorizontalScrolling"
import WhyMe from "./design/WhyMe"

const Home = () => {
    return (
        <div className="w-full">
            <Hero />
            <Experience />
            <HorizontalScrolling />
            <Projects />
            <WhyMe />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
