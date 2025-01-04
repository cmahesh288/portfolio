// import resume from "../../assets/Chandra Mahesh Patwari Resume.pdf";
import resume from "../../assets/Chandra_Mahesh_Patwari_Resume.pdf"
import "./Resume.scss"
import useMediaQuery from "../../util";

const Resume = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <div id="resume" className={"resume-wrapper"}>
            <h1 className={"resume-header"}>RESUME</h1>
            {isDesktop && <embed className="pdf"
                                 src={resume}
                                 height="800"/>}
            {!isDesktop && <object
                data={resume}
                width="100%" height="100%">
                <p>Your web browser doesn't have a PDF plugin.
                    Instead you can <a href="../../assets/Chandra_Mahesh_Patwari_Resume.pdf">click here to
                        download the PDF file.</a></p>
            </object>}
        </div>
    )
}

export default Resume