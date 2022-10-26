import classes from "../../../../App.module.css";
import Header from "../../../Header/Header";
import {menuItems} from "../../../../Moks/menu";
import Footer from "../../../Footer/Footer";

function Layout({children}) {
    return (
        <div className={classes.container}>
            <Header menuItems={menuItems} />
            <main>
                <h1 className={classes.visuallyHidden}>Центр 'Окей' - психолого - развивающий центр</h1>
                <div className={classes.pageMainWrapper}>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Layout;