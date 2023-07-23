import HeroStyle from "../style/HeroStyle.css"
import githubIcon from "../assets/images/github-icon.png"
import linkedinIcon from "../assets/images/linkedin-icon.png"
import user from "../assets/images/user.jpg"
import { useEffect, useRef, useContext} from "react"
import { Context } from "../context/headerContext"

const Hero = () => {

    const ref = useRef(0)
    const { setIsHeroVisible, isHeroVisible } = useContext(Context)
    

    useEffect(() => {

        const obs = new IntersectionObserver(function(entries){
            const hero = entries[0]
    
            if (!hero.isIntersecting) {
                setIsHeroVisible(false)
            }
        
            if (hero.isIntersecting) {
                setIsHeroVisible(true)
            }
        },{
           root:null,
           threshold:0,
           rootMargin:"-64px"
        })
        
        obs.observe(ref.current)

    },[])


    return (
        <section className="hero-section" id="hero-id" style={ isHeroVisible ? {} : { marginTop: "8rem" }}>
            <div className="container heroLayout" ref={ref}>
                <div className="hero-user-desc">
                    <h1 className="hero-heading leagueSpartanFont">Hi, <span className="mainColor">I'm Anselmo</span></h1>
                    <h3 className="hero-subheading leagueSpartanFont">Javascript Fullstack Developer</h3>
                    <div className="hero-desc futuraPtLight">A Highly motivated and passionate <span className="mainColor">Web Developer </span>
                        who creating interactive web applications and experiences
                        on the web
                    </div>
                    <div className="hero-icons">
                        <a href="https://www.linkedin.com/in/anselmo-rivera-iii" target="_blank"><span><img className="hero-icon" src={linkedinIcon} alt="githubIcon" /></span></a>
                        <a href="https://www.github.com/anselmo07-2001"><span><img className="hero-icon" src={githubIcon} alt="linkedinIcon"/></span></a>
                    </div>
                </div>
                <div className="profileContainer">
                    <div className="profile mainColor">
                        <img src={user} className="profile-img"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero