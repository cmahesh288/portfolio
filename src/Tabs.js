import "./Tabs.scss"
const Tabs = () => {

    return(
        <div className={'tabs-wrapper'}>
            <a href={"#experience"} className={"tabs"}>EXPERIENCE</a>
            <a href={"#projects"} className={"tabs"}>PROJECTS</a>
            <a href={"#skills"} className={"tabs"}>SKILLS</a>
            <a href={"#education"} className={"tabs"}>EDUCATION</a>
            <a href={"#resume"} className={"tabs"}>RESUME</a>
        </div>
    )
}

export default Tabs