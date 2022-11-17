import React from "react";
import style from "./Contacts.module.css"

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <h2>Contacts</h2>
                <form className={style.contactsForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                </form>
                <button className={style.button}>Send</button>
            </div>
        </div>
    );
}

export default Contacts;