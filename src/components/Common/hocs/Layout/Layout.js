import classes from "../../../../App.module.css";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import MainPage from "../MainPage/MainPage";
import News from "../../../MainPage/News/News";

import {menuItems} from "../../../../Moks/menu";
import {news} from "../../../../Moks/news";

function Layout({children}) {
    return (
        <div className={classes.container}>
            <Header menuItems={menuItems} />
            <main>
                <h1 className={classes.visuallyHidden}>Центр 'Окей' - психолого - развивающий центр</h1>
                <div className={classes.pageMainWrapper}>
                    <MainPage>
                        {children}
                        <News news={news}/>
                    </MainPage>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Layout;