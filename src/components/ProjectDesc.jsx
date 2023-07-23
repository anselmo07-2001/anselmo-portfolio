import MyProjectStyle from "../style/MyProjectStyle.css"
import githubIcon from "../assets/images/github-icon.png"
import externalLink from "../assets/images/external-link.png"


const ProjectDesc = (props) => {

    const { projectName, description,
            tools, flip, githubLink, liveDemoLink } = props

    return (
        <div className={`project-desc ${flip ? 'move-desc-toLeft' : ''}`}>
                <div className="project-subheading leagueSpartanFont mainColor">Featured Project</div>
                <div className="project-title leagueSpartanFont">{projectName}</div>
                <div className="project-summary">
                    <p className="project-explain futuraPtLight">{description}
                    </p>
                </div>
                <ul className="project-tools futuraPtMd">
                    {tools.map((tool, i) => <li key={i}>{tool}</li>)}
                </ul>
                <div className="project-external-link hideWhenBreakout">
                    <a href={githubLink} target="_blank"><img src={githubIcon} alt="project github link" className="project-icon"/></a>
                    <a href={liveDemoLink} target="_blank"><img src={externalLink} alt="project live demo" className="project-icon"  /></a>
                </div>
            </div>
    )
}

export default ProjectDesc