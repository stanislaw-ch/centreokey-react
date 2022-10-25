import classes from './Header.module.css'

import header1x from '../../img/header@1x.png';
import header2x from '../../img/header@2x.png';
import Nav from "./Nav/Nav";
import Contacts from "./Contacts/Contacts";
import SearchForm from "../Common/SearchForm/SearchForm";

function Header({menuItems}) {
    return (
        <header>
            <Contacts />

            <div className={classes.pageHeaderHeader}>
                <div className={classes.pageHeaderTitle}>
                    <p>Добро пожаловать на сайт развивающего центра "О'кей"</p>
                </div>

                <SearchForm typ={'Header'}/>
            </div>

            <div className={classes.pageHeaderPicture}>
                <img src={header1x}
                     srcSet={`${header2x} 2x`}
                     width="960"
                     height="270"
                     alt="Заглавное изображение" />
            </div>

            <Nav menuItems={menuItems} />
        </header>
    )
}

export default Header;