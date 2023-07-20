import MyProjectStyle from "../style/MyProjectStyle.css"
import githubIcon from "../assets/images/github-icon.png"
import externalLink from "../assets/images/external-link.png"


const ProjectDesc = (props) => {

    const { projectName, description, tools, flip } = props

    return (
        <div className={`project-desc ${flip ? 'move-desc-toLeft' : ''}`}>
                <div className="project-subheading leagueSpartanFont mainColor">Featured Project</div>
                <div className="project-title leagueSpartanFont">{projectName}</div>
                <div className="project-summary">
                    <p className="project-explain futuraPtBl">{description}
                    </p>
                </div>
                <ul className="project-tools futuraPtMd">
                    {tools.map((tool, i) => <li key={i}>{tool}</li>)}
                </ul>
                <div className="project-external-link">
                    <a href="#"><img src={githubIcon} alt="project github link" className="project-icon"/></a>
                    <a href="#"><img src={externalLink} alt="project live demo" className="project-icon"/></a>
                </div>
            </div>
    )
}

export default ProjectDesc