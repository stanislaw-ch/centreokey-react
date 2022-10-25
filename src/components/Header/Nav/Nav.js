import {useState} from "react";
import classesRoot from '../../../App.module.css'
import classes from './Nav.module.css'

function Nav({menuItems}) {
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
                    {menuItems.map((item, key) => {
                        return (
                            <li className={
                                `${classes.siteListItem} 
                                 ${classes[`siteListItemOption${key}`]} 
                                 ${activeIndex === key? classes.siteListItemActive: null}`
                            }
                                onClick={handleMenuItemClick}
                                key={key}
                            >
                                <a data-key={key}>{item}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Nav;