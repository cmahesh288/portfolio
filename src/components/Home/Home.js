import "./Home.scss"
import Intro from "../Intro/Intro";
import Resume from "../Resume/Resume";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import {useContext} from "react";
import {GLOBAL_CONTEXT} from "../../App";
import {Button} from "react-bootstrap";
import {FaHeart} from "react-icons/fa";

const Home = () => {
    const {isDarkMode, setIsDarkMode} = useContext(GLOBAL_CONTEXT)

    return (
        <div className={`${isDarkMode}home-wrapper`}>
            <Intro/>
            {/*<Resume/>*/}
            <Experience/>
            <Education/>
            <Projects/>
            <Resume/>
            <div className={'footer'}><h6>Made with <FaHeart fill={'red'}/> by Chandra</h6></div>
        </div>
    )
}

export default Home