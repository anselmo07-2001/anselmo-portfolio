import { Link } from "react-scroll"
import { useContext, useState } from "react"
import HeaderStyle from "../style/HeaderStyle.css"
import { Context } from "../context/headerContext"

const Header = () => {

    const [ isToggleActive, setIsToggleActive ] = useState(false)
    const { isHeroVisible } = useContext(Context)


    const handleClickLink = () => {
        setIsToggleActive(!isToggleActive)
    }

    return (
        <nav className={`leagueSpartanFont nav ${isHeroVisible ? "" : "sticky"}`}>
            <div>anselmo.dev</div>
            <div className={`nav__navigationLink ${isToggleActive ? 'move-toogle' : ""}`}>
                <ul className="nav__links">
                    <li>
                        <Link to="hero-id" className="nav__link" spy={true} smooth={true} 
                              offset={-100} duration={1200} onClick={handleClickLink}>Home</Link>
                    </li>
                    <li>
                       <Link to="skill-id" className="nav__link" spy={true} smooth={true} 
                              offset={-100} duration={1200} onClick={handleClickLink}>Skills</Link>
                    </li>
                    <li> 
                        <Link to="project-id" className="nav__link" spy={true} smooth={true} 
                              offset={-100} duration={1200} onClick={handleClickLink}>Projects</Link>
                    </li>
                    <li>
                        <Link to="contact-id" className="nav__link" spy={true} smooth={true} 
                              offset={-100} duration={1200} onClick={handleClickLink}>Contact</Link>
                    </li>
                    <li>
                        <Link to="aboutMe-id" className="nav__link" spy={true} smooth={true} 
                              offset={-100} duration={1200} onClick={handleClickLink}>About</Link>
                    </li>
                </ul>
            </div>
            <div className="toggleBtnWrapper">

                    { isToggleActive ?
                        <div className="toggleBtn--close" onClick={() => setIsToggleActive((active) => !active)}>
                            <span className="toggleBtn__line--close line-1"></span>
                            <span className="toggleBtn__line--close line-2"></span>
                        </div>
                    :
                        <div className="toggleBtn--open" onClick={() => setIsToggleActive((active) => !active)}>
                            <span className="toggleBtn__line--open"></span>
                            <span className="toggleBtn__line--open"></span>
                            <span className="toggleBtn__line--open"></span>
                        </div>
                    }
            </div>
        </nav>
    )
}

export default Header