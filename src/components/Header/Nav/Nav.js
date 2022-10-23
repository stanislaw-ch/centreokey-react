import classesRoot from '../../../App.module.css'
import classes from './Nav.module.css'

function Nav() {
    return (
        <nav className={`${classes.mainNav} ${classes.mainNavClosed}`}>
            <button className={classes.mainNavToggle} type="button">
                <span className={classesRoot.visuallyHidden}>Открыть меню</span>
            </button>
            <div className={classes.mainNavWrapper}>
                <ul className={classes.siteList}>
                    <li className={`${classes.siteListItem} ${classes.siteListItemOption1} ${classes.siteListItemActive}`}>
                        <a href="src/components/Header/Header#">Главная</a>
                    </li>
                    <li className={`${classes.siteListItem} ${classes.siteListItemOption2}`}>
                        <a href="src/components/Header/Header#">Комплексное развитие</a>
                    </li>
                    <li className={`${classes.siteListItem} ${classes.siteListItemOption3}`}>
                        <a href="src/components/Header/Header#">Английский для всех</a>
                    </li>
                    <li className={`${classes.siteListItem} ${classes.siteListItemOption4}`}>
                        <a href="src/components/Header/Header#">Арт-студия</a>
                    </li>
                    <li className={`${classes.siteListItem} ${classes.siteListItemOption5}`}>
                        <a href="src/components/Header/Header#">О нас</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;