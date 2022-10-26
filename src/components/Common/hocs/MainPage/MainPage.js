import classes from "../../../../App.module.css";

function MainPage({children}) {
    return (
        <main>
            <h1 className={classes.visuallyHidden}>Центр 'Окей' - психолого - развивающий центр</h1>
            <div className={classes.pageMainWrapper}>
                {children}
            </div>
        </main>
    );
}

export default MainPage;