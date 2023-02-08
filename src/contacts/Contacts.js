import React from "react";
import style from "./Contacts.module.css"
import {Title} from "../common/components/Title";

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <Title title={"Contacts"}/>
                <form className={style.contactsForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                </form>
                <button>Send</button>
            </div>
        </div>
    );
}

export default Contacts;