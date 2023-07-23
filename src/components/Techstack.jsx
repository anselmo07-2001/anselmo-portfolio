import SubHeading from "./SubHeading"
import TechstackStyle from "../style/TechstackStyle.css"
import html from "../assets/images/html.png"
import css from "../assets/images/css.png"
import js from "../assets/images/js.png"
import sass from "../assets/images/sass.png"
import redux from "../assets/images/redux.png"
import typescript from "../assets/images/typescript.png"
import react from "../assets/images/react.png"
import bootstrap from "../assets/images/bootstrap.png"
import node from "../assets/images/node.png"
import express from "../assets/images/express.png"
import firebase from "../assets/images/firebase.png"
import pug from "../assets/images/pug.png"
import mongoose from "../assets/images/mongoose.png"
import mongodb from "../assets/images/mongodb.png"

const Techstack = () => {
    return (
        <section className="techstack-section" id="skill-id">
            <div className="container">
                <SubHeading title={"Technologies Stack (Skills)"} ml={"13rem"}/>
                <div className="techstack">

                    <div className="tech-box tech-box-1">
                        <div className="tech-box-heading futuraPtBl">Frontend Technologies</div>
                        <div className="techologies">
                            <div className="tech-name">
                                <img src={html} alt="html" className="tech-image"/>
                            </div>
                            <div className="tech-name">
                                <img src={css} alt="css" className="tech-image"/>
                            </div>
                            <div className="tech-name">
                                <img src={sass} alt="sass" className="tech-image"/>
                            </div>
                            <div className="tech-name">
                                <img src={react} alt="react" className="tech-image"/>
                            </div>
                            <div className="tech-name">
                                <img src={js} alt="js" className="tech-image"/>
                            </div>
                            <div className="tech-name">
                                <img src={redux} alt="redux" className="tech-image"/>
                            </div>
                            <div className="tech-name">
                                <img src={bootstrap} alt="bootstrap" className="tech-image"/>
                            </div>
                            <div className="tech-name">
                                <img src={typescript} alt="typescript" className="tech-image"/>
                            </div>
                        </div>
                    </div>

                    <div className="tech-box tech-box-2">
                        <div className="tech-box-heading futuraPtBl">Backend Technologies</div>
                        <div className="techologies">
                            <div className="tech-name">
                                <img src={node} alt="node" className="tech-image"/>
                            </div>
                            <div className="tech-name">
                                <img src={mongoose} alt="mongoose" className="tech-image"/>
                            </div>
                            <div className="tech-name">
                                <img src={mongodb} alt="mongodb" className="tech-image"/>
                            </div>
                            <div className="tech-name">
                                <img src={firebase} alt="firebase" className="tech-image"/>
                            </div>
                            <div className="tech-name">
                                <img src={express} alt="express" className="tech-image"/>
                            </div>
                            <div className="tech-name">
                                <img src={pug} alt="pug" className="tech-image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Techstack