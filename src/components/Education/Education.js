import uc from "../../assets/uc.png"
import sastra from "../../assets/sastra.jpg"
import "../Experience/Experience.scss"
import useMediaQuery from "../../util";
import {useContext} from "react";
import {GLOBAL_CONTEXT} from "../../App";


const Education = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const {isDarkMode, setIsDarkMode} = useContext(GLOBAL_CONTEXT)

    return (
        <div id={"education"} className={"exp-wrapper"}>
            <h1 className={"exp-header"}>EDUCATION</h1>
            <div className={`${isDarkMode} exp-org`}>
                {isDesktop && <div>
                    <img src={uc} alt={"tcs logo"} className={"exp-logo"}/>
                </div>}
                <div className={"exp-info"}>
                    <h3><b>University of Cincinnati</b></h3>
                    <h5>Master of Engineering, Computer Science</h5>
                    <h6>August 2024 - Present</h6>
                    <p>Coursework: Advanced Algorithms, Requirements Engineering, Distributed Operating Systems,
                        Software Testing and Quality Assurance</p>
                    <h5>Activities:</h5>
                    <li>Member of Junoon - Singing Club of UC</li>
                    <li>Member of University of Cincinnati Telugu Association(UCTA)</li>
                </div>
            </div>

            <div className={`${isDarkMode} exp-org`}>
                {isDesktop && <div>
                    <img src={sastra} alt={"tcs logo"} className={"exp-logo"}/>
                </div>}
                <div className={"exp-info"}>
                    <h3><b>SASTRA Deemed University</b></h3>
                    <h5>Bachelor of Technology, Mechatronics</h5>
                    <h6>July 2017-June 2021</h6>
                    <p>Coursework: Artificial Intelligence and Expert Systems, Industrial Robotics, Digital Image
                        Processing, Data Structures through C, Programming through C++, Microprocessors &
                        Microcontrollers.</p>
                    <h5>Activities:</h5>
                    <li>President of Unmaad - The Hindi Literary Club of SASTRA</li>
                    <li>Head of Technical Events at School of Mechanical Engineering, Daksh</li>
                    <li>Member of National Service Scheme(NSS)</li>
                    <li>Volunteer at Student Council of SASTRA(SCOS)</li>
                </div>
            </div>
        </div>
    )
}

export default Education