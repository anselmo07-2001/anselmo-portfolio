import ProjectDesc from "./ProjectDesc"
import MyProjectStyle from "../style/MyProjectStyle.css"
import SubHeading from "./SubHeading"
import omnifood from "../assets/images/omnifood.png"
import natours from "../assets/images/natours.png"
import recipedirectory from "../assets/images/recipedirectory.png"
import chatty from "../assets/images/chatty.png"
import githubIcon from "../assets/images/github-icon.png"
import externalLink from "../assets/images/external-link.png"

const MyProject = () => {
    return (
        <section className="project-section" id="project-id">
            <div className="container">
                <SubHeading title="My Project" ml="4rem"/>
                <div className="projects">
                    <div className="project">
                        <div className="project-imageContainer">
                            <img src={omnifood} alt="omnifood" className="project-image"/>
                            {/* show this links only when viewport is mobile size happen */}
                            <div className="project-external-link showWhenBreakout">
                                <a href="https://github.com/anselmo07-2001/Omnifood-" target="_blank"><img src={githubIcon} alt="project github link" className="project-icon"/></a>
                                <a href="https://omnifoodei.netlify.app/" target="_blank"><img src={externalLink} alt="project live demo" className="project-icon"  /></a>
                            </div>
                        </div>
                        {/* show this links only when viewport is not mobile size happen */}
                        <ProjectDesc projectName={"Omnifood"}
                                     tools={["HTML","CSS","JAVASCRIPT"]}
                                     description="A beautiful static landing web page for people love healthy food 
                                     and customize the customer based in its personal
                                     tastes and nutrional need"
                                     githubLink="https://github.com/anselmo07-2001/Omnifood-"
                                     liveDemoLink="https://omnifoodei.netlify.app/"/>
                    </div>

                    <div className="project project-image-toRight">
                        <div className="project-imageContainer">
                            <img src={natours} alt="chatty" className="project-image"/>
                            <div className="project-external-link showWhenBreakout">
                                <a href="https://github.com/anselmo07-2001/myNatoursApp" target="_blank"><img src={githubIcon} alt="project github link" className="project-icon"/></a>
                                <a href="https://mynatours-fjyk.onrender.com/" target="_blank"><img src={externalLink} alt="project live demo" className="project-icon"  /></a>
                            </div>
                        </div>
                            <ProjectDesc projectName={"Natours"}
                                     tools={["Node.js","Express.js","Mongoose","Mongo DB"]}
                                     description="A tour web application for people who wants adventure and 
                                     experience the different amazing places around the world, Uses Stripe API to
                                     handled secure international transaction and Mapbox API to render the tour location"
                                     flip={true}
                                     githubLink="https://github.com/anselmo07-2001/myNatoursApp"
                                     liveDemoLink="https://mynatours-fjyk.onrender.com/" />
                    </div>  

                    <div className="project">
                        <div className="project-imageContainer">
                            <img src={recipedirectory} alt="recipe directory" className="project-image"/>
                            <div className="project-external-link showWhenBreakout">
                                <a href="https://github.com/anselmo07-2001/Cooking-Directory-App" target="_blank"><img src={githubIcon} alt="project github link" className="project-icon"/></a>
                                <a href="https://thecookingdirectory.netlify.app" target="_blank"><img src={externalLink} alt="project live demo" className="project-icon"  /></a>
                            </div>
                        </div>
                        <ProjectDesc projectName={"Cooking Directory"}
                                     tools={["React.js","Bootstrap","Redux"]}
                                     description="A CRUD application that allow the user to take notes of different 
                                     cooking methods or technique and the food descriptions as well the ingredients
                                     that will be used"
                                     githubLink="https://github.com/anselmo07-2001/Cooking-Directory-App"
                                     liveDemoLink="https://thecookingdirectory.netlify.app/"/>
                    </div>

                    <div className="project project-image-toRight">
                        <div className="project-imageContainer">
                            <img src={chatty} alt="chatty" className="project-image"/>
                            <div className="project-external-link showWhenBreakout">
                                <a href="https://github.com/anselmo07-2001/chatty" target="_blank"><img src={githubIcon} alt="project github link" className="project-icon"/></a>
                                <a href="https://chatty-p9zz.onrender.com" target="_blank"><img src={externalLink} alt="project live demo" className="project-icon"  /></a>
                            </div>
                        </div>
                            <ProjectDesc projectName={"Chatty"}
                                     tools={["Express.js","Socket.io"]}
                                     description="A simple messaging application that uses web socket that enabled full duplex
                                     to experience real time messaging, This application can create rooms or can join rooms
                                     and user can share its current location"
                                     flip={true}
                                     githubLink="https://github.com/anselmo07-2001/chatty"
                                     liveDemoLink="https://chatty-p9zz.onrender.com" />
                    </div>    
                </div>

                <div className="linkProject">
                     <a href="https://www.github.com/anselmo07-2001" target="_blank" className="more-project futuraPtMd">Discover More Projects</a>
                </div>
            </div>
        </section>
    )
}

export default MyProject