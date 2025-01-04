import './App.css';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import {createContext, useState} from "react";

export const GLOBAL_CONTEXT = createContext({})

function App() {

    const [isDarkMode, setIsDarkMode] = useState('')

    return (
        <GLOBAL_CONTEXT.Provider value={{isDarkMode, setIsDarkMode}}>
            <div className={"App"}>
                <Navbar/>
                <Home/>
            </div>
        </GLOBAL_CONTEXT.Provider>
    );
}

export default App;
