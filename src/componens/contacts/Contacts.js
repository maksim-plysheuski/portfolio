import React from "react";
import s from "./Contacts.module.scss"
import {Title} from "../../common/components/title/Title";
import {ContactLinks} from "./contactLinksBlock/ContactLinks";
import {ContactsForm} from "./contactsForm/ContactsForm";


function Contacts() {
    return (
        <div className={s.contactsBlock} id="contact">
            <Title title={"Contacts"}/>
            <p className={s.introText}>
                I am open to new opportunities. <br/> Please chose the most convenient way to contact with me.
            </p>
            <div className={s.contactsBody}>
                <ContactsForm/>
                <ContactLinks/>
            </div>
        </div>
    );
}

export default Contacts;