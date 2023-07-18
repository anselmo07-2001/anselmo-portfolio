import AboutMeStyle from "../style/AboutMeStyle.css"

const AboutMe = () => {
    return (
        <div className="container">
            <div className="aboutMe__headingWrapper">
                <h4 className="aboutMe__heading leagueSpartanFont">About Me</h4>
                <span className="headingLine" style={{marginLeft:"3.5rem"}}></span>
            </div>
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