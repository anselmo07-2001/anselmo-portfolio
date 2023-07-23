import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import SubHeading from "./SubHeading"
import ContactStyle from "../style/ContactStyle.css"

const Contact = () => {   
    const form = useRef()
    const [isEmailSending, setIsEmailSending] = useState(false)

    const [inputName, setInputName] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [inputMessage, setInputMessage] = useState("")

    const [inputNameErrMsg, setInputNameErrMsg] = useState("")
    const [inputEmailErrMsg, setInputEmailErrMsg] = useState("")
    const [inputMessageErrMsg, setInputMessageErrMsg] = useState("")

    const sendEmail = async (e) => {
        e.preventDefault();
        console.log("email sending....")
        setIsEmailSending(true)

        !inputName ? setInputNameErrMsg("Name is required")  : setInputNameErrMsg("")
        !inputEmail ? setInputEmailErrMsg("Email is required") : setInputEmailErrMsg("")
        !inputMessage ? setInputMessageErrMsg("Message is required") : setInputMessageErrMsg("")

        try {

            if (!inputName || !inputEmail || !inputMessage) {
                 throw new Error("Some Input Field is Empty")
            }

            const res = await emailjs.sendForm('service_ks5mg5f', 'template_dh484as', 
                                          form.current, '558vTnzLwzKPQrID0')
                                        
            console.log(res.text, "Email sent succesfully")
            setInputName("");
            setInputEmail("");
            setInputMessage("");
            
        }
        catch(err) {
            console.log(err)
            console.log("Email sent unsuccesfully")
        }
    

        console.log("finish email sending")
        setIsEmailSending(false)
      };


    return (
        <section className="contact-section" id="contact-id">
            <div className="container">
                <SubHeading title="Contact"/>     
                    <form className="contact-form" ref={form} onSubmit={sendEmail}>
                        <div className="form-inputFieldsGroup">
                            <div className="form-inputGroup">
                                <label for="name" className="futuraPtMd form-label">Name</label>
                                <br/>
                                <input id="name" type="text" className="form-input-field futuraPtBook" 
                                       placeholder="Enter your name" name="visitor_name"
                                       onChange={(e) => setInputName(e.target.value)}
                                       value={inputName}/>
                                <span className="msgError futuraPtLight">{inputNameErrMsg}</span>
                            </div>
                            <div className="form-inputGroup">
                                <label for="email" className="futuraPtMd form-label">Email</label>
                                <br/>
                                <input id="email" type="email" className="form-input-field futuraPtBook" 
                                       placeholder="Enter your email" name="visitor_email"
                                       onChange={(e) => setInputEmail(e.target.value)}
                                       value={inputEmail}/>          
                                <span className="msgError futuraPtLight">{inputEmailErrMsg}</span>
                            </div>
                            <div className="form-inputGroup">
                                <label for="message" className="futuraPtMd form-label">Message</label>
                                <br/>
                                <textarea id="message" type="text" className="form-input-field futuraPtBook" 
                                       placeholder="Enter your message" name="message"
                                       onChange={(e) => setInputMessage(e.target.value)}
                                       value={inputMessage}/>
                                <span className="msgError futuraPtLight">{inputMessageErrMsg}</span>
                            </div>

                            <div className="contactBtnContainer">
                                {/* <button className="contactBtn">Submit</button> */}
                                <button type="submit" value="Send" className="contactBtn" disabled={isEmailSending}>{isEmailSending ? "Sending.." : "Submit"}</button>
                            </div>
                        </div>
                    </form>
            </div>
        </section>
    )
}

export default Contact