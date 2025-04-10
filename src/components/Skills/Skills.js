import {useContext} from "react";
import {GLOBAL_CONTEXT} from "../../App";
import "../Skills/Skills.scss"

const Skills = () => {
    const {isDarkMode, setIsDarkMode} = useContext(GLOBAL_CONTEXT)
    return (
        <div id={"skills"} className={"skills-wrapper"}>
            <h1 className={"skills-header"}>SKILLS</h1>
            <div>
                <h1 className={'section'}>Languages</h1>
                <div className={'icons'}>

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"/>

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"/>

                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"/>

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"/>

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"/>
                </div>
            </div>
            <div>
                <h1 className={'section'}>Frameworks</h1>
                <div className={'icons'}>

                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg"/>


                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"/>

                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg"/>

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"/>

                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"/>

                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg"/>

                </div>
            </div>
            <div>
                <h1 className={'section'}>Tools</h1>
                <div className={'icons'}>

                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original-wordmark.svg"/>

                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original-wordmark.svg"/>

                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original-wordmark.svg"/>

                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg"/>

                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"/>

                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"/>

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg"/>

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg"/>

                </div>
                <div>
                    <h1 className={'section'}>Platforms</h1>
                    <div className={'icons'}>

                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"/>


                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original-wordmark.svg"/>


                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"/>


                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"/>


                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg"/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills