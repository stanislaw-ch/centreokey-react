import {NavLink} from "react-router-dom";
import classes from '../Nav.module.css'

function NavItem({to, title, fontColor}) {
    console.log(to)
    return (
        <li className={`${classes.siteListItem} ${classes[`siteListItem${fontColor}`]}`}>
            <NavLink to={to} className={({isActive}) => (isActive ? classes.siteListItemActive : null)}>
                {title}
            </NavLink>
        </li>
    )
}

export default NavItem;