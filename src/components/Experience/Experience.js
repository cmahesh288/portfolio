import "./Experience.scss"
import tcs from "../../assets/tcs.jpg"
import useMediaQuery from "../../util";

const Experience = () => {

    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <section id={"experience"}>
            <div className={"exp-wrapper"}>
                <h1 className={"exp-header"}>EXPERIENCE</h1>
                <div>
                    <div className={"exp-org"}>
                        {isDesktop && <div>
                            <img src={tcs} alt={"tcs logo"} className={"exp-logo"}/>
                        </div>}
                        <div className={"exp-info"}>
                            <h3><b>TATA CONSULTANCY SERVICES</b></h3>
                            <h5><b>Software Engineer</b></h5>
                            <h6>July 2021 - July 2024</h6>
                            <li>Spearheaded the development and deployment of 5 interactive dashboards using ReactJS for
                                front-end,
                                Spring Boot framework for backend and Docker, AWS and GCP for deployment, elevating user
                                engagement
                                by
                                showcasing key metrics and increasing the visibility by 50%.
                            </li>
                            <li> Developed a scalable microservices architecture using Spring Boot, implementing REST
                                APIs
                                that
                                streamlined inter-service communication and improved scheduling efficiency, reducing API
                                response
                                time
                                by 35% and enabling 30% faster data processing across distributed services.
                            </li>
                            <li>Developed a Network Intrusion Detection System by establishing a robust data pipeline by
                                leveraging
                                AWS
                                Kinesis streams to ingest and process data from the source, utilizing Java and Drools
                                rule
                                engine,
                                significantly reducing data processing time by 50%.
                            </li>
                            <li>Implemented data parsing and persistence from Amazon Kinesis data streams to MongoDB,
                                enabling
                                effective
                                storage and retrieval of processed data.
                            </li>
                            <li>Provided valuable technical support for an internally developed IntelliJ plugin,
                                enhancing
                                productivity
                                and usability for the team, and successfully resolved 100% of reported issues.
                            </li>
                        </div>
                    </div>
                    <div className={"exp-org"}>
                        {isDesktop && <div>
                            <img src={tcs} alt={"tcs logo"} className={"exp-logo"}/>
                        </div>}
                        <div className={"exp-info"}>
                            <h3><b>TATA CONSULTANCY SERVICES</b></h3>
                            <h5><b>Software Engineer Intern</b></h5>
                            <h6>July 2021 - July 2024</h6>
                            <li>Automated project management processes by designing solutions for employee assignment
                                and
                                scheduling, cutting project scheduling time by 30%.
                            </li>
                            <li>Applied Mixed Integer Linear and Non-Linear Programming (MILP/MINLP) concepts to
                                optimize
                                complex
                                assignment and scheduling challenges.
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience