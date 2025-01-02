import "./Tabs.scss"
import useMediaQuery from "../../util";
import {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";

const Tabs = () => {
    const isDesktop = useMediaQuery('(min-width: 980px)');
    const [showTabs, setShowTabs] = useState(false)


    return (
        <div className={isDesktop ? 'tabs-wrapper' : 'tabs-small-wrapper'}>
            {(!isDesktop && !showTabs) && <GiHamburgerMenu className={'hamburger'} onClick={()=>{setShowTabs(!showTabs)}}/>}
            {(isDesktop || showTabs ) && <div className={!isDesktop ? 'tabs-menu' : 'tabs-nav'}>
                <a onClick={()=>{setShowTabs(false)}}  href={"#experience"} className={"tabs"}>EXPERIENCE</a>
                <a onClick={()=>{setShowTabs(false)}} href={"#education"} className={"tabs"}>EDUCATION</a>
                <a onClick={()=>{setShowTabs(false)}} href={"#skills"} className={"tabs"}>SKILLS</a>
                <a onClick={()=>{setShowTabs(false)}} href={"#projects"} className={"tabs"}>PROJECTS</a>
                <a onClick={()=>{setShowTabs(false)}} href={"#resume"} className={"tabs"}>RESUME</a>
            </div>}
        </div>
    )
}

export default Tabs