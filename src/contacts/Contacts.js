import React from "react";
import style from "./Contacts.module.css"
import {Title} from "../common/components/Title";
import {FaLinkedinIn, FaGithub, FaTelegramPlane, FaPhone, FaSkype} from "react-icons/fa";
import {AiOutlineSend, AiOutlineCheckCircle} from "react-icons/ai";
import {FiPhone, FiAtSign} from "react-icons/fi";
import {HiOutlineLocationMarker} from "react-icons/hi";

const email = "plysheuski.maksim@gmail.com"

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <Title title={"Contacts"}/>
            < p className={style.introText}>
                I am open to new opportunities. <br/> Please chose the most convenient way to contact with me.
            </p>
            <div className={style.contactsContainer}>
                {/*<Title title={"Contacts"}/>
                <form className={style.contactsForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                </form>
                <button>Send</button>
                */}


                <div className={style.contactsBody}>
                    <div className={style.contactsForm}>
                        <form>
                            <div className={style.inputContainer}>
                                <label htmlFor="Name" className={style.label}>
                                    Name
                                </label>
                                <input type="text" name="Name" className={style.inputForm}/>
                            </div>
                            <div className={style.inputContainer}>
                                <label htmlFor="Email" className={style.label}>
                                    Email
                                </label>
                                <input type="email" name="Email" className={style.inputForm}/>
                            </div>
                            <div className={style.inputContainer}>
                                <label className={style.label} htmlFor="Message">
                                    Message
                                </label>
                                <textarea placeholder="Type your message..." type="text" name="Message"
                                          className={style.formMessage}/>
                            </div>
                            <div className={style.submitBtn}>
                                <button type="submit">
                                    <p>Send</p>
                                    <div className={style.submitIcon}>
                                        <AiOutlineSend className={style.sendIcon}/>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className={style.contactsDetails}>
                        <a href={`mailto: ${email}`}
                           className={style.personalDetails}>
                            <div className={style.detailsIcon}>
                                <FiAtSign/>
                            </div>
                            <p>plysheuski.maksim@gmail.com</p>
                        </a>
                        <a href="tel:+375447406523"
                           className={style.personalDetails}>
                            <div className={style.detailsIcon}>
                                <FaPhone/>
                            </div>
                            <p>+375447406523</p>
                        </a>
                        <a href="tg://resolve?domain=maksfilms"
                           target="_blank"
                           className={style.personalDetails}>
                            <div className={style.detailsIcon}>
                                <FaTelegramPlane/>
                            </div>
                            <p>Telegram</p>
                        </a>
                        <div className={style.socialIcons}>
                            <a
                                href="https://github.com/maksim-plysheuski"
                                target="_blank"
                                rel="noreferrer"
                                className={style.socialIcon}
                            >
                                <FaGithub aria-label="GitHub"/>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/plysheuski-maksim/"
                                target="_blank"
                                rel="noreferrer"
                                className={style.socialIcon}
                            >
                                <FaLinkedinIn aria-label="LinkedIn"/>
                            </a>
                            <a
                                href="https://join.skype.com/invite/zOc4ufeIaFew"
                                target="_blank"
                                rel="noreferrer"
                                className={style.socialIcon}
                            >
                                <FaSkype aria-label="LinkedIn"/>
                            </a>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contacts;