import AboutMeStyle from "../style/AboutMeStyle.css"
import SubHeading from "./SubHeading"

const AboutMe = () => {
    return (
        <div className="container">
            <SubHeading title={"About Me"} ml={"3.5rem"}/>
            <div className="aboutMe">
                <div className="aboutMe__photoWrapper">
                    <div className="aboutMe__photo"></div>
                </div>
                <div>
                    <div className="aboutMe__subheading leagueSpartanFont">A <span className="mainColor">Dedicated Web Developer</span> based in Angeles City Pampanga</div>
                    <div className="futuraPtMd aboutMe__desc">As a junior web developer. I possess an impressive arsenal 
                        of skills both in frontend and backend I use <span className="mainColor">MERN stack
                        technology </span>, one of the popular cutting-edge development tools 
                        to create modern web application. My expertise lies in my passion
                        in this field to craft dynamic and user-friendly web apps 
                    </div>
                    <button className="resumeBtn">Resume</button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe