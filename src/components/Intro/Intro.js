import "./Intro.scss"
import {TypeAnimation} from "react-type-animation";
import {Button} from "react-bootstrap";
import {GiGraduateCap} from "react-icons/gi";
import {FaLocationDot} from "react-icons/fa6";
import {FaUniversity} from "react-icons/fa";
import useMediaQuery from "../../util";
import {useContext} from "react";
import {GLOBAL_CONTEXT} from "../../App";

const Intro = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const {isDarkMode, setIsDarkMode} = useContext(GLOBAL_CONTEXT)

    return (
        <div className={"intro-wrapper"}>
            <div className={"intro-text"}>
                <h2>Hello!</h2>
                <h1 className={"intro-name"}>I'm Chandra Mahesh Patwari</h1>
                <TypeAnimation
                    sequence={[
                        'Front-end Development',
                        1000,
                        'Back-end Development',
                        1000,
                        'Full-stack Development',
                        1000,
                        'Data Engineering',
                        1000
                    ]}
                    wrapper="span"
                    speed={45}
                    deletionSpeed={20}
                    style={{
                        fontSize: isDesktop ? '3em' : '1em', fontWeight: isDesktop ? 300 : 600,
                        marginBottom: isDesktop ? 0 : '10px', display: 'inline-block'
                    }}
                    repeat={Infinity}
                />
                <p>
                    Software Engineer with over <mark><b>3 years of experience</b></mark> in a wide range of programming
                    languages,
                    frameworks, and tools including <mark><b>Java, ReactJS, Spring Boot, Kubernetes, Docker</b></mark>,
                    and more.
                    Seeking a challenging role to leverage my technical skills, problem-solving abilities, and soft
                    skills to contribute effectively to a dynamic team and deliver innovative solutions in a
                    collaborative environment.
                </p>
                <a href={"https://www.linkedin.com/in/chandra-mahesh-patwari/"}
                   rel="noreferrer"
                   target={"_blank"}><Button
                    style={{
                        background: isDarkMode ? '#d9d9d9' : '#001f3f',
                        borderColor: isDarkMode ? '#d9d9d9' : '#001f3f',
                        color: isDarkMode ? '#001f3f' : '#d9d9d9'
                    }}>LinkedIn</Button></a>
                <a href={"#resume"}><Button style={{
                    background: isDarkMode ? '#d9d9d9' : '#001f3f',
                    borderColor: isDarkMode ? '#d9d9d9' : '#001f3f',
                    color: isDarkMode ? '#001f3f' : '#d9d9d9'
                }}>Resume</Button></a>

            </div>
            <div className={'intro-details'}>
                <div className={`${isDarkMode} blob`}></div>
                {isDesktop && <div>
                    <h6><GiGraduateCap/> Master of Engineering in Computer Science</h6>
                    <h6><FaUniversity/> University of Cincinnati</h6>
                    <h6><FaLocationDot/> Cincinnati, OH</h6>
                </div>}
            </div>
        </div>
    )
}

export default Intro
