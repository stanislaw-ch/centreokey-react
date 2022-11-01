import {useState} from "react";
import classesRoot from '../../../App.module.css'
import classes from './Nav.module.css'
import NavItem from "./Item/Item";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const navClasses = [
        classes.mainNav,
        isOpen ? classes.mainNavOpened: classes.mainNavClosed
    ].join(" ");

    const handleBurgerClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className={navClasses}>
            <button className={classes.mainNavToggle} type="button" onClick={handleBurgerClick}>
                <span className={classesRoot.visuallyHidden}>Открыть меню</span>
            </button>
            <div className={classes.mainNavWrapper}>
                <ul className={classes.siteList}>
                    <NavItem to={'main'} title={'Главная'} fontColor={'Red'}/>
                    <NavItem to={'comprehensive_education'} title={'Комплексное развитие'} fontColor={'Green'}/>
                    <NavItem to={'english_for_everyone'} title={'Английский для всех'} fontColor={'Pink'}/>
                    <NavItem to={'art_studio'} title={'Арт-студия'} fontColor={'Yellow'}/>
                    <NavItem to={'about_us'} title={'О нас'} fontColor={'Blue'}/>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;