import {AiOutlineSend} from "react-icons/ai";
import React, {useState} from "react";
import s from "./style.module.scss"
import {useForm} from "react-hook-form";
import emailjs from "@emailjs/browser";
import {messageValidation, nameValidation} from "./validators/validators";


export const ContactsForm = () => {
    const [feedBackMessage, setMessage] = useState("")

    const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm({
        mode: "onTouched"
    })

    const onSubmit = (data) => {
        emailjs.send("service_jtgx795", "template_s6q93yc", data, "JUuFtUSTkjC8Q_kuD")
            .then(() => setMessage("Email has been sent"))
            .catch(() => setMessage("Some error"))
            .finally(() => reset())
    }

    return (
        <div className={s.contactsForm}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.inputContainer}>
                    <label className={s.label} htmlFor="name">Name</label>
                    <input className={s.inputs}
                           placeholder="Enter your name"
                           autoComplete="name"
                           id="name"
                           type="text"
                           name="name"
                           {...register("name", nameValidation)}/>
                    {errors?.name && <span className={s.errorMessage}>{errors.name?.message}</span>}
                </div>
                <div className={s.inputContainer}>
                    <label className={s.label} htmlFor="email">Email</label>
                    <input className={s.inputs}
                           placeholder="Enter your email"
                           autoComplete="email"
                           id="email"
                           type="email"
                           name="email"
                           {...register("email")}/>
                </div>
                <div className={s.inputContainer}>
                    <label className={s.label} htmlFor="message">Message</label>
                    <textarea className={s.textField}
                              placeholder="Type your message..."
                              id="message"
                              type="text"
                              name="message"
                              {...register("message", messageValidation)}/>
                    {errors?.message && <span className={s.errorMessage}>{errors.message?.message}</span>}
                    {feedBackMessage && <span className={s.feedBackMessage}>{feedBackMessage}</span>}
                </div>
                <div className={s.submitBtn}>
                    <button type="submit" disabled={!isValid}>
                        <p>Send</p>
                        <AiOutlineSend className={s.submitIcon}/>
                    </button>
                </div>
            </form>
        </div>
    )
}