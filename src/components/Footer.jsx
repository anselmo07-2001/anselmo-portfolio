import FooterStyle from "../style/FooterStyle.css"
import linkedinIcon from "../assets/images/linkin-black.png"
import facebookIcon from "../assets/images/facebook-icon.png"
import githubIcon from "../assets/images/github-icon.png"

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="container">
                <div className="footer-content">
                    <h2 className="footer-heading leagueSpartanFont">anselmo.dev</h2>
                    <div className="footer-desc futuraPtBook">Living, learning, & leveling up one day at a time.</div>
                    <div className="footer-icons">
                        <div className="footer-icon">
                            <a href="#"><img src={facebookIcon} className="footer-image-icon"/></a>
                        </div>
                        <div className="footer-icon">
                            <a href="#"><img src={githubIcon} className="footer-image-icon"/></a>
                        </div>
                        <div className="footer-icon">
                            <a href="#"><img src={linkedinIcon} className="footer-image-icon"/></a>
                        </div>
                    </div>
                    <div className="futuraPtBook">Copyright © 2023 by Anselmo Rivera III. All rights reserved</div>
                </div>
            </div>
        </div>
    )
}

export default Footer