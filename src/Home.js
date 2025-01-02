import "./Home.scss"
import Intro from "./Intro/Intro";
import Resume from "./Resume";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";

const Home = () => {

    return (
        <div className={"home-wrapper"}>
            <Intro/>
            {/*<Resume/>*/}
            <Experience/>
            <Education/>
            <Projects/>
            <Resume/>
        </div>
    )
}

export default Home