import "./Navbar.scss"
import Socials from "./Socials";
import Tabs from "./Tabs";
import useMediaQuery from "../../util";


const Navbar = () => {

    const isDesktop = useMediaQuery('(min-width: 980px)');


    return (
        <div className={"navbar-wrapper"}>
                <Tabs/>
                <Socials/>

        </div>
    )
}

export default Navbar