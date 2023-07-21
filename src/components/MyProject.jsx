import ProjectDesc from "./ProjectDesc"
import MyProjectStyle from "../style/MyProjectStyle.css"
import SubHeading from "./SubHeading"
import omnifood from "../assets/images/omnifood.png"
import natours from "../assets/images/natours.png"
import recipedirectory from "../assets/images/recipedirectory.png"
import chatty from "../assets/images/chatty.png"


const MyProject = () => {
    return (
        <div className="project-wrapper">
            <div className="container">
                <SubHeading title="My Project" ml="4rem"/>
                <div className="projects">
                    <div className="project">
                        <div className="project-imageContainer">
                            <img src={omnifood} alt="omnifood" className="project-image"/>
                        </div>
                        <ProjectDesc projectName={"Omnifood"}
                                     tools={["HTML","CSS","JAVASCRIPT"]}
                                     description="A beautiful static page for people love healthy food 
                                     and customize the customer based in its personal
                                     tastes and nutrional need"/>
                    </div>

                    <div className="project project-image-toRight">
                        <div className="project-imageContainer">
                            <img src={natours} alt="natours" className="project-image"/>
                            <ProjectDesc projectName={"Natours"}
                                     tools={["Node.js","Express.js","Mongoose","Mongo DB"]}
                                     description="A beautiful static page for people love healthy food 
                                     and customize the customer based in its personal
                                     tastes and nutrional need"
                                     flip={true} />
                        </div>
                    </div>

                    <div className="project">
                        <div className="project-imageContainer">
                            <img src={recipedirectory} alt="recipe directory" className="project-image"/>
                        </div>
                        <ProjectDesc projectName={"Cooking Directory"}
                                     tools={["React.js","Bootstrap","Redux"]}
                                     description="A beautiful static page for people love healthy food 
                                     and customize the customer based in its personal
                                     tastes and nutrional need"/>
                    </div>

                    <div className="project project-image-toRight">
                        <div className="project-imageContainer">
                            <img src={chatty} alt="chatty" className="project-image"/>
                            <ProjectDesc projectName={"Chatty"}
                                     tools={["Express.js","Socket.io"]}
                                     description="A beautiful static page for people love healthy food 
                                     and customize the customer based in its personal
                                     tastes and nutrional need"
                                     flip={true} />
                        </div>
                    </div>    
                </div>

                <div className="linkProject">
                     <a href="#" className="more-project futuraPtMd">Discover More Projects</a>
                </div>
            </div>
        </div>
    )
}

export default MyProject