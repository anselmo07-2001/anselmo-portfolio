import { useState } from "react"
import HeaderStyle from "../style/HeaderStyle.css"

const Header = () => {

    const [ isToggleActive, setIsToggleActive ] = useState(false)


   

    

    return (
        <nav className="leagueSpartanFont nav">
            <div>anselmo.dev</div>
            <div className={`nav__navigationLink ${isToggleActive ? 'move-toogle' : ""}`}>
                <ul className="nav__links">
                    <li><a href="#" className="nav__link">Home</a></li>
                    <li><a href="#" className="nav__link">Contact</a></li>
                    <li><a href="#" className="nav__link">About</a></li>
                    <li><a href="#" className="nav__link">Skill</a></li>
                    <li><a href="#" className="nav__link">Project</a></li>
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