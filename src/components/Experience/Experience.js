import "./Experience.scss"
import tcs from "../../assets/tcs.jpg"
import uc from "../../assets/uc.png"
import useMediaQuery from "../../util";
import {useContext} from "react";
import {GLOBAL_CONTEXT} from "../../App";

const Experience = () => {

    const isDesktop = useMediaQuery('(min-width: 768px)');
    const {isDarkMode, setIsDarkMode} = useContext(GLOBAL_CONTEXT)

    return (
        <section id={"experience"}>
            <div className={"exp-wrapper"}>
                <h1 className={"exp-header"}>EXPERIENCE</h1>
                <div>
                    <div className={`${isDarkMode} exp-org`}>
                        {isDesktop && <div>
                            <img src={uc} alt={"UC logo"} className={"exp-logo"}/>
                        </div>}
                        <div className={"exp-info"}>
                            <h3><b>UNIVERSITY OF CINCINNATI</b></h3>
                            <h5><b>Backend Software Engineer - Volunteer</b></h5>
                            <h6>Jan 2025 - Present</h6>
                            <li>Built an ICU patient monitoring dashboard, integrating EHR data for real-time insights on 299K+ patients, improving data
                                accessibility using PowerBI.
                            </li>
                            <li>Engineered scalable data pipelines to process large datasets, reducing query response time by 30%.
                            </li>
                            <li>Developed advanced filtering, sorting, and visualization features, enhancing researcher efficiency by 25%.
                            </li>
                        </div>
                    </div>
                    <div className={`${isDarkMode} exp-org`}>
                        {isDesktop && <div>
                            <img src={tcs} alt={"tcs logo"} className={"exp-logo"}/>
                        </div>}
                        <div className={"exp-info"}>
                            <h3><b>TATA CONSULTANCY SERVICES</b></h3>
                            <h5><b>Software Engineer</b></h5>
                            <h6>July 2021 - July 2024</h6>
                            <li>Delivered and deployed 5 interactive dashboards using ReactJS and Spring Boot, enhancing
                                data visualization and user engagement
                                by 50%.
                            </li>
                            <li> Designed scalable microservices with Spring Boot and REST APIs, reducing API response
                                time by 35% and accelerating data
                                processing by 30%.
                            </li>
                            <li>Devised a Network Intrusion Detection System with AWS Kinesis and Java, integrating
                                Drools to cut data processing time by 50%.
                            </li>
                            <li>Implemented DevOps practices and optimized CI/CD pipelines with Jenkins, Docker, and
                                Kubernetes, improving deployment
                                efficiency by 30%.
                            </li>
                            <li>Enabled real-time MongoDB data persistence from Amazon Kinesis, enhancing analytics
                                capabilities and reducing data latency by
                                25%.
                            </li>
                            <li>Collaborated in Agile methodology teams to solve complex challenges, ensuring 100% on
                                time software delivery through effective
                                communication.
                            </li>

                        </div>
                    </div>
                    <div className={`${isDarkMode} exp-org`}>
                        {isDesktop && <div>
                            <img src={tcs} alt={"tcs logo"} className={"exp-logo"}/>
                        </div>}
                        <div className={"exp-info"}>
                            <h3><b>TATA CONSULTANCY SERVICES</b></h3>
                            <h5><b>Software Engineer Intern</b></h5>
                            <h6>July 2021 - July 2024</h6>
                            <li>Designed automated employee assignment and scheduling solutions, reducing project
                                scheduling time by 30%.
                            </li>
                            <li>Tackled complex scheduling challenges using Mixed Integer Linear and Non-Linear
                                Programming (MILP/MINLP) reducing
                                scheduling conflicts by 40%.
                            </li>
                            <li>Improved resource allocation efficiency, boosting workforce utilization by 25% and
                                project delivery timelines.
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience