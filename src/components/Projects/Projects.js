import {Card, ListGroup} from "react-bootstrap";
import mask from "../../assets/face-mask.jpg"
import {FaGithub} from "react-icons/fa";
import "./Projects.scss"
import road from "../../assets/road-accident.jpg"
import flask from "../../assets/flask.jpg"
import chrome from "../../assets/chrome-extension.jpg"
import portfolio from "../../assets/portfolio-cover.jpg"
import notes from "../../assets/notes.jpg"
import {useContext} from "react";
import {GLOBAL_CONTEXT} from "../../App";

const Projects = () => {
    const {isDarkMode, setIsDarkMode} = useContext(GLOBAL_CONTEXT)

    return (<div id={"projects"} className={"project-wrapper"}>
            <h1 className={"project-header"}>PROJECTS</h1>
            <div className={"project-wrap"}>
                <Card bg={isDarkMode === 'dark' ? 'secondary' : ''}>
                    <Card.Img variant="top" src={notes}/>
                    <Card.Body>
                        <Card.Title>QuickNotes</Card.Title>
                        <Card.Text>
                            Built a note taking web application using MERN stack and deployed it using Vercel.
                        </Card.Text>
                        <div className={'tech-icons'}>

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"/>


                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"/>

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"/>
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"/>


                        </div>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://github.com/cmahesh288/quicknotes" target={"_blank"}>Source Code</Card.Link>
                        <Card.Link href="https://quicknotes-frontend-tau.vercel.app/" target={"_blank"}>Demo</Card.Link>
                    </Card.Body>
                </Card>
                <Card bg={isDarkMode === 'dark' ? 'secondary' : ''}>
                    <Card.Img variant="top" src={chrome}/>
                    <Card.Body>
                        <Card.Title>Short Content Blocker</Card.Title>
                        <Card.Text>
                            Built a Chrome extension that blocks Youtube Shorts and Instagram Reels on the web, helping me stay focused and avoid mindless scrolling.
                        </Card.Text>
                        <div className={'tech-icons'}>

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"/>


                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"/>


                        </div>

                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://github.com/cmahesh288/yt-insta-shorts-blocker" target={"_blank"}>Source code</Card.Link>
                        <Card.Link href="https://www.linkedin.com/posts/chandra-mahesh-patwari_code-chromeextension-instagram-activity-7301086772111847424-Aa_O?utm_source=share&utm_medium=member_desktop&rcm=ACoAACUgrCcBpJ1NVGzas12lBwzDec5H68DtACQ" target={"_blank"}>Demo</Card.Link>
                    </Card.Body>
                </Card>
                <Card bg={isDarkMode === 'dark' ? 'secondary' : ''}>
                    <Card.Img variant="top" src={portfolio}/>
                    <Card.Body>
                        <Card.Title>Portfolio</Card.Title>
                        <Card.Text>
                            Portfolio website showcasing my skills, professional experience and projects made using ReactJS and Sass.
                        </Card.Text>
                        <div className={'tech-icons'}>
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"/>

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>


                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"/>

                        </div>

                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://github.com/cmahesh288/portfolio" target={"_blank"}>Source code</Card.Link>
                        <Card.Link href="https://cmahesh288.github.io/portfolio/#" target={"_blank"}>Demo</Card.Link>
                    </Card.Body>
                </Card>
            </div>
            <div className={"project-wrap"}>
                <Card bg={isDarkMode === 'dark' ? 'secondary' : ''}>
                    <Card.Img variant="top" src={flask}/>
                    <Card.Body>
                        <Card.Title>Flask application</Card.Title>
                        <Card.Text>
                            Built a flask application to enable user authentication. The application was hosted on AWS EC2.
                        </Card.Text>
                        <div className={'tech-icons'}>
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"/>

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"/>

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"/>

                        </div>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://github.com/cmahesh288/aws_flask_app" target={"_blank"}>Source Code</Card.Link>
                    </Card.Body>
                </Card>
                <Card bg={isDarkMode === 'dark' ? 'secondary' : ''}>
                    <Card.Img variant="top" src={road}/>
                    <Card.Body>
                        <Card.Title>Road accident severity prediction and analysis</Card.Title>
                        <Card.Text>
                            Analyzed the different factors responsible for a road accident and how the severity of a
                                road accident depends on these factors, visualized the data using matplotlib and seaborn
                                libraries.
                        </Card.Text>
                        <div className={'tech-icons'}>
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"/>

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg"/>

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original-wordmark.svg"/>

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original-wordmark.svg"/>

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"/>

                        </div>

                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://drive.google.com/file/d/1rUJ38B055fIxblCd1I-9aZJf17PNJBDr/view" target={"_blank"}>Demo</Card.Link>
                    </Card.Body>
                </Card>
                <Card bg={isDarkMode === 'dark' ? 'secondary' : ''}>
                    <Card.Img variant="top" src={mask} width={500}/>
                    <Card.Body>
                        <Card.Title>Face Mask Detection</Card.Title>
                        <Card.Text>
                            Built a face mask detection system using a pre-trained model with 96% accuracy. The
                            architecture used was MobileNetV2 and CAFFE framework was used for detecting face.
                        </Card.Text>
                        <div className={'tech-icons'}>
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"/>

                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original-wordmark.svg"/>

                        </div>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://github.com/cmahesh288/Face-Mask-Detection" target={"_blank"}>Source Code</Card.Link>
                        <Card.Link href="https://www.linkedin.com/posts/chandra-mahesh-patwari_transferlearning-deeplearning-cnn-activity-6720984772711084032-xGnY?utm_source=share&utm_medium=member_desktop&rcm=ACoAACUgrCcBpJ1NVGzas12lBwzDec5H68DtACQ" target={"_blank"}>Demo</Card.Link>
                    </Card.Body>
                </Card>
                {/*<Card bg={isDarkMode === 'dark' ? 'secondary' : ''}>*/}
                {/*    <Card.Img variant="top" src={titanic} width={500}/>*/}
                {/*    <Card.Body>*/}
                {/*        <Card.Title>Titanic Survivor Prediction</Card.Title>*/}
                {/*        <Card.Text>*/}
                {/*            Built a face mask detection system using a pre-trained model with 96% accuracy. The*/}
                {/*            architecture used was MobileNetV2 and CAFFE framework was used for detecting face.*/}
                {/*        </Card.Text>*/}
                {/*        <div className={'tech-icons'}>*/}
                {/*            <img*/}
                {/*                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"/>*/}

                {/*            <img*/}
                {/*                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg"/>*/}

                {/*            <img*/}
                {/*                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original-wordmark.svg"/>*/}

                {/*            <img*/}
                {/*                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original-wordmark.svg"/>*/}

                {/*            <img*/}
                {/*                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"/>*/}

                {/*        </div>*/}
                {/*    </Card.Body>*/}
                {/*    <Card.Body>*/}
                {/*        <Card.Link href="#">Source Code</Card.Link>*/}
                {/*        <Card.Link href="#">Demo</Card.Link>*/}
                {/*    </Card.Body>*/}
                {/*</Card>*/}
                {/*<Card bg={isDarkMode === 'dark' ? 'secondary' : ''}>*/}
                {/*    <Card.Img variant="top" src={face}/>*/}
                {/*    <Card.Body>*/}
                {/*        <Card.Title>Facial Expression Recognition</Card.Title>*/}
                {/*        <Card.Text>*/}
                {/*            Built a face mask detection system using a pre-trained model with 96% accuracy. The*/}
                {/*            architecture used was MobileNetV2 and CAFFE framework was used for detecting face.*/}
                {/*        </Card.Text>*/}
                {/*        <div className={'tech-icons'}>*/}
                {/*            <img*/}
                {/*                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"/>*/}

                {/*            <img*/}
                {/*                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg"/>*/}

                {/*            <img*/}
                {/*                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original-wordmark.svg"/>*/}

                {/*            <img*/}
                {/*                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original-wordmark.svg"/>*/}

                {/*            <img*/}
                {/*                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"/>*/}

                {/*        </div>*/}
                {/*    </Card.Body>*/}
                {/*    <Card.Body>*/}
                {/*        <Card.Link href="#">Source Code</Card.Link>*/}
                {/*        <Card.Link href="#">Demo</Card.Link>*/}
                {/*    </Card.Body>*/}
                {/*</Card>*/}
                {/*<Card bg={isDarkMode === 'dark' ? 'secondary' : ''}>*/}
                {/*    <Card.Img variant="top" src={loan}/>*/}
                {/*    <Card.Body>*/}
                {/*        <Card.Title>Loan Status Prediction</Card.Title>*/}
                {/*        <Card.Text>*/}
                {/*            Built a face mask detection system using a pre-trained model with 96% accuracy. The*/}
                {/*            architecture used was MobileNetV2 and CAFFE framework was used for detecting face.*/}
                {/*        </Card.Text>*/}
                {/*        <div className={'tech-icons'}>*/}
                {/*            <img*/}
                {/*                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"/>*/}

                {/*            <img*/}
                {/*                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg"/>*/}

                {/*            <img*/}
                {/*                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original-wordmark.svg"/>*/}

                {/*            <img*/}
                {/*                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original-wordmark.svg"/>*/}

                {/*            <img*/}
                {/*                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"/>*/}

                {/*        </div>*/}
                {/*    </Card.Body>*/}
                {/*    <Card.Body>*/}
                {/*        <Card.Link href="#">Source Code</Card.Link>*/}
                {/*        <Card.Link href="#">Demo</Card.Link>*/}
                {/*    </Card.Body>*/}
                {/*</Card>*/}
            </div>

        </div>)
}

export default Projects