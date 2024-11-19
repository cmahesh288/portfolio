import "./Navbar.scss"
import Socials from "./Socials";
import Tabs from "./Tabs";
import HamburgerTabs from "./HamburgerTabs";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {

    return(
        <div className={"navbar-wrapper"}>
           <HamburgerTabs/>
            <Tabs/>
            <Socials/>

        </div>
    )
}

export default Navbar