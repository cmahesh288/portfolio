import resume from "./assets/Chandra Mahesh Patwari Resume.pdf";
import "./Resume.scss"

const Resume = () => {
    return(
        <div id="resume" className={"resume-wrapper"}>
            <h1 className={"resume-header"}>RESUME</h1>
            <embed className="pdf"
                   src={resume}
                   height="800"/>
        </div>
    )
}

export default Resume