import classesRoot from '../../App.module.css'
import classes from './Header.module.css'

import header1x from '../../img/header@1x.png';
import header2x from '../../img/header@2x.png';
import Nav from "./Nav/Nav";
import Contacts from "./Contacts/Contacts";

function Header() {
    return (
        <header>
            <div className={classes.pageHeaderContact}>
                <Contacts />
            </div>
            <div className={classes.pageHeaderHeader}>
                <div className={classes.pageHeaderTitle}><p>Добро пожаловать на сайт развивающего центра "О'кей"</p></div>

                {/*TODO: move to component Search*/}
                <form className={`${classes.pageHeaderSearchForm} ${classesRoot.searchForm}`} action="src/components/Header/Header#" method="POST" name="searchform">
                    <input type="text" name="search_words" placeholder="Поиск по сайту..." />
                    <button type="submit" name="search">поиск</button>
                </form>

            </div>
            <div className={classes.pageHeaderPicture}>
                <img src={header1x}
                     srcSet={`${header2x} 2x`}
                     width="960"
                     height="270"
                     alt="Заглавное изображение" />
            </div>
            <Nav />
        </header>
    )
}

export default Header;