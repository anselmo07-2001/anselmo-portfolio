import SubHeadingStyle from "../style/SubHeadingStyle.css"


const SubHeading = ({title,ml}) => {
    return (
        <div className="subheading-section">
            <div className="subheading-desc">
                <h4 className="subheading-title leagueSpartanFont">{title}</h4>
                <span className="headingLine"></span>
            </div>
        </div>
    )
}

export default SubHeading