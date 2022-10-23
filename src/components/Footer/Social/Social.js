import classes from './Social.module.css'
import classesFooter from '../Footer.module.css'
import classesRoot from '../../../App.module.css'
import vk1x from '../../../img/icon-vk@1x.png';
import vk2x from '../../../img/icon-vk@2x.png';
import ok1x from '../../../img/icon-ok@1x.png';
import ok2x from '../../../img/icon-ok@2x.png';

function Social() {
    return (
        <ul className={`${classesFooter.pageFooterSocial} ${classes.social}`}>
            <li className={classes.socialItem}>
                <a href="http://vk.com/centreokey"
                   target="_blank"
                   rel="noopener">
                    <span className={classesRoot.visuallyHidden}>vkontakte</span>
                    <img src={vk1x}
                         srcSet={`${vk2x} 2x`}
                         width="30" height="30" alt="vk-icon" />
                </a>
            </li>
            <li className={classes.socialItem}>
                <a href="https://ok.ru/okey.centrrazvitiya"
                   target="_blank"
                   rel="noopener">
                    <span className={classesRoot.visuallyHidden}>odnoklassiniki</span>
                    <img src={ok1x}
                         srcSet={`${ok2x} 2x`}
                         width="30" height="30" alt="ok-icon" />
                </a>
            </li>
        </ul>
    )
}

export default Social;