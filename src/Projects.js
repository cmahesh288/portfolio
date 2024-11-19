import {Card, ListGroup} from "react-bootstrap";
import mask from "./assets/face-mask.jpg"
import {FaGithub} from "react-icons/fa";
import "./Projects.scss"
import house from "./assets/house-price.jpg"
import loan from "./assets/loan.jpg"
import titanic from "./assets/titanic.jpg"
import face from "./assets/facial expression.jpg"
import road from "./assets/road-accident.jpg"

const Projects = () => {
    return (
        <div id={"projects"} className={"project-wrapper"}>
            <h1 className={"project-header"}>PROJECTS</h1>
            <div className={"project-wrap"}>
                <Card>
                    <Card.Img variant="top" src={road}/>
                    <Card.Body>
                        <Card.Title>Road accident severity prediction and analysis</Card.Title>
                        <Card.Text>
                            <li>Analyzed the different factors responsible for a road accident and how the severity of a
                                road accident depends on these factors, visualized the data using matplotlib and seaborn
                                libraries.
                            </li>
                            <li>Used various classification techniques like KNN, Naïve Bayes, Decision tree, Logistic
                                regression, Random Forest and a boosting algorithm called XG Boost for predicting the
                                severity of an accident with an accuracy of 92%.
                            </li>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#"><FaGithub/>Source Code</Card.Link>
                        <Card.Link href="#">Demo</Card.Link>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src={mask} width={500}/>
                    <Card.Body>
                        <Card.Title>Face Mask Detection</Card.Title>
                        <Card.Text>
                            Built a face mask detection system using a pre-trained model with 96% accuracy. The
                            architecture used was MobileNetV2 and CAFFE framework was used for detecting face.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#"><FaGithub/>Source Code</Card.Link>
                        <Card.Link href="#">Demo</Card.Link>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src={house}/>
                    <Card.Body>
                        <Card.Title>House Price Prediction</Card.Title>
                        <Card.Text>
                            Built a face mask detection system using a pre-trained model with 96% accuracy. The
                            architecture used was MobileNetV2 and CAFFE framework was used for detecting face.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#"><FaGithub/>Source Code</Card.Link>
                        <Card.Link href="#">Demo</Card.Link>
                    </Card.Body>
                </Card>


            </div>
            <div className={"project-wrap"}>
                <Card>
                    <Card.Img variant="top" src={titanic} width={500}/>
                    <Card.Body>
                        <Card.Title>Titanic Survivor Prediction</Card.Title>
                        <Card.Text>
                            Built a face mask detection system using a pre-trained model with 96% accuracy. The
                            architecture used was MobileNetV2 and CAFFE framework was used for detecting face.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#"><FaGithub/>Source Code</Card.Link>
                        <Card.Link href="#">Demo</Card.Link>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src={face}/>
                    <Card.Body>
                        <Card.Title>Facial Expression Recognition</Card.Title>
                        <Card.Text>
                            Built a face mask detection system using a pre-trained model with 96% accuracy. The
                            architecture used was MobileNetV2 and CAFFE framework was used for detecting face.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#"><FaGithub/>Source Code</Card.Link>
                        <Card.Link href="#">Demo</Card.Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={loan}/>
                    <Card.Body>
                        <Card.Title>Loan Status Prediction</Card.Title>
                        <Card.Text>
                            Built a face mask detection system using a pre-trained model with 96% accuracy. The
                            architecture used was MobileNetV2 and CAFFE framework was used for detecting face.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#"><FaGithub/>Source Code</Card.Link>
                        <Card.Link href="#">Demo</Card.Link>
                    </Card.Body>
                </Card>


            </div>

        </div>
    )
}

export default Projects