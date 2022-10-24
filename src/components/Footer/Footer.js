import classes from './Footer.module.css'
import Social from "./Social/Social";
import SearchForm from "../Common/SearchForm/SearchForm";

function Footer() {
    return (
        <footer>
            <div className={classes.pageFooterColumnWrapper}>
                <div className={classes.pageFooterLeftColumn}>
                    <div className={classes.pageFooterHeader}>
                        <h3>Будь в курсе!</h3>
                        <p>Введите Ваш E-mail, чтобы подписаться на новостную рассылку сайта</p>
                    </div>

                    <SearchForm />

                    <Social />

                </div>
                <div className={classes.pageFooterRightColumn}>
                    <div className={classes.pageFooterHeader}>
                        <h3>Будь на связи!</h3>
                        <ul className={classes.pageFooterContact}>
                            <li className={classes.pageFooterContactItem}>Наш адрес: г. Екатеринбург, ул. Братская, 14</li>
                            <li className={classes.pageFooterContactItem}>
                                <a href="tel:8-950-19-18-509">8-950-19-18-509 / 8-904-98-19-067</a>
                            </li>
                            <li className={classes.pageFooterContactItem}>
                                <a href="mailto:centre_ok@e1.ru">centre_ok@e1.ru</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={classes.pageFooterCopyright}>
                <p>© Психолого-развивающий центр "О'кей", 2015-2023</p>
            </div>
        </footer>
    )
}

export default Footer;