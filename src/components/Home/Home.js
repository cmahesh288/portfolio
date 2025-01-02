import "./Home.scss"
import Intro from "../Intro/Intro";
import Resume from "../Resume/Resume";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";

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