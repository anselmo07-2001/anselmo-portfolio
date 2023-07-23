import SubHeading from "./SubHeading"
import ContactStyle from "../style/ContactStyle.css"

const Contact = () => {   
    return (
        <section className="contact-section" id="contact-id">
            <div className="container">
                <SubHeading title="Contact"/>     
                    <form className="contact-form">
                        <div className="form-inputFieldsGroup">
                            <div className="form-inputGroup">
                                <label for="name" className="leagueSpartanFont form-label">Name</label>
                                <br/>
                                <input id="name" type="text" className="form-input-field futuraPtBook" placeholder="Enter your name"/>
                            </div>
                            <div className="form-inputGroup">
                                <label for="email" className="leagueSpartanFont form-label">Email</label>
                                <br/>
                                <input id="email" type="email" className="form-input-field futuraPtBook" placeholder="Enter your email"/>
                            </div>
                            <div className="form-inputGroup">
                                <label for="message" className="leagueSpartanFont form-label">Message</label>
                                <br/>
                                <textarea id="message" type="text" className="form-input-field futuraPtBook" placeholder="Enter your message"/>
                            </div>

                            <div className="contactBtnContainer">
                                <button className="contactBtn">Submit</button>
                            </div>
                        </div>
                    </form>
            </div>
        </section>
    )
}

export default Contact