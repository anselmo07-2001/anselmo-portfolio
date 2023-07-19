import SubHeadingStyle from "../style/SubHeadingStyle.css"


const SubHeading = ({title,ml}) => {
    return (
        <div className="subheading__wrapper">
            <h4 className="subheading__title leagueSpartanFont">{title}</h4>
            <span className="headingLine" style={{marginLeft:ml}}></span>
        </div>
    )
}

export default SubHeading