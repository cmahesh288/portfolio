import "./Navbar.scss"
import Socials from "./Socials";
import Tabs from "./Tabs";
import HamburgerTabs from "./HamburgerTabs";
import {GiHamburgerMenu} from "react-icons/gi";
import useMediaQuery from "../../util";


const Navbar = () => {

    const isDesktop = useMediaQuery('(min-width: 980px)');


    return (
        <div className={"navbar-wrapper"}>
            {/*{!isDesktop && <HamburgerTabs/>}*/}
                <Tabs/>
                <Socials/>

        </div>
    )
}

export default Navbar