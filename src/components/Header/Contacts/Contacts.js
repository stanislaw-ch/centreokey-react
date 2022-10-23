import classesRoot from '../../../App.module.css'
import classes from './Contacts.module.css'
import phone1x from "../../../img/icon-phone@1x.png";
import phone2x from "../../../img/icon-phone@2x.png";
import mail1x from "../../../img/icon-mail@1x.png";
import mail2x from "../../../img/icon-mail@2x.png";
import address1x from "../../../img/icon-pin@1x.png";
import address2x from "../../../img/icon-pin@2x.png";

function Contacts() {
    return (
        <ul className={classes.contactList}>
            <li className={`${classes.contactItem} ${classes.contactItemPhone}`}>
                <span className={classesRoot.visuallyHidden}>phone</span>
                <img src={phone1x} srcSet={`${phone2x} 2x`} width="23" height="23" alt="phone-icon" />
                <a href="tel:8-950-19-18-509">8-950-19-18-509 / 8-904-98-19-067</a>
            </li>
            <li className={classes.contactItem}>
                <span className={classesRoot.visuallyHidden}>email</span>
                <img src={mail1x} srcSet={`${mail2x} 2x`} width="23" height="23" alt="mail-icon" />
                <a href="mailto:centre_ok@e1.ru">centre_ok@e1.ru</a>
            </li>
            <li className={`${classes.contactItem} ${classes.contactItemAddress}`}>
                <span className={classesRoot.visuallyHidden}>address</span>
                <img src={address1x} srcSet={`${address2x} 2x`} width="20" height="24" alt="pin-icon" />
                <p>г. Екатеринбург, ул. Братская, 14</p>
            </li>
        </ul>
    )
}

export default Contacts;