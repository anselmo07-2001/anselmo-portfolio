import HeroStyle from "../style/HeroStyle.css"
import githubIcon from "../assets/images/github-icon.png"
import linkedinIcon from "../assets/images/linkedin-icon.png"

const Hero = () => {
    return (
        <div className="hero--wrapper">
            <div className="container heroLayout">
                <div>
                    <h1 className="hero--heading leagueSpartanFont">Hi, <span className="mainColor">I'm Anselmo</span></h1>
                    <h3 className="hero--subheading leagueSpartanFont">Javascript Fullstack Developer</h3>
                    <div className="hero--desc futuraPtMd">A Highly motivated and passionate <span className="mainColor">Web Developer </span>
                        who creating interactive web applications and experiences
                        on the web
                    </div>
                    <div className="hero--icons">
                        <span><img className="hero--icon" src={linkedinIcon} alt="githubIcon" /></span>
                        <span><img className="hero--icon" src={githubIcon} alt="linkedinIcon"/></span>
                    </div>
                </div>
                <div className="profileContainer">
                    <div className="profile mainColor">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero