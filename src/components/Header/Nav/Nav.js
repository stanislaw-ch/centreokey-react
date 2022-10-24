import {useState} from "react";
import classesRoot from '../../../App.module.css'
import classes from './Nav.module.css'

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(1);

    const navClasses = [
        classes.mainNav,
        isOpen ? classes.mainNavOpened: classes.mainNavClosed
    ].join(" ");

    const handleBurgerClick = () => {
        setIsOpen(!isOpen);
    }

    const handleMenuItemClick = (e) => {
        const itemIndex = Number(e.target.getAttribute('data-key'))
        setActiveIndex(itemIndex);
    }

    return (
        <nav className={navClasses}>
            <button className={classes.mainNavToggle} type="button" onClick={handleBurgerClick}>
                <span className={classesRoot.visuallyHidden}>Открыть меню</span>
            </button>
            <div className={classes.mainNavWrapper}>
                <ul className={classes.siteList}>
                    <li className={`${classes.siteListItem} ${classes.siteListItemOption1} ${activeIndex === 1? classes.siteListItemActive: null}`}
                        onClick={handleMenuItemClick}
                    >
                        <a data-key={1}>Главная</a>
                    </li>
                    <li className={`${classes.siteListItem} ${classes.siteListItemOption2} ${activeIndex === 2? classes.siteListItemActive: null}`}
                        onClick={handleMenuItemClick}
                    >
                        <a data-key={2}>Комплексное развитие</a>
                    </li>
                    <li className={`${classes.siteListItem} ${classes.siteListItemOption3} ${activeIndex === 3? classes.siteListItemActive: null}`}
                        onClick={handleMenuItemClick}
                    >
                        <a data-key={3}>Английский для всех</a>
                    </li>
                    <li className={`${classes.siteListItem} ${classes.siteListItemOption4} ${activeIndex === 4? classes.siteListItemActive: null}`}
                        onClick={handleMenuItemClick}
                    >
                        <a data-key={4}>Арт-студия</a>
                    </li>
                    <li className={`${classes.siteListItem} ${classes.siteListItemOption5} ${activeIndex === 5? classes.siteListItemActive: null}`}
                        onClick={handleMenuItemClick}
                    >
                        <a data-key={5}>О нас</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;