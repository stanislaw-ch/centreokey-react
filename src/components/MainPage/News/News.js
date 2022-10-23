import classes from '../../../App.module.css'

function News() {
    return (
        <section className={classes.news}>
            <div className={`${classes.newsHeader} ${classes.header}`}><h2>Новости</h2></div>
            <button className={`${classes.newsSlideButton} ${classes.newsSlideButtonRight}`} type="button"></button>
            <button className={`${classes.newsSlideButton} ${classes.newsSlideButtonLeft}`} type="button"></button>
            <div className={classes.newsSliderContainer}>
                <ul className={classes.newsWrapper} style={{transform: `translateX(0px)`}}>
                    <li className={classes.newsItem}>
                        <h3>СТАРТ ЗАНЯТИЙ В ГРУППЕ 3 КЛАССА для новичков</h3>
                        <p>Если ваш ребенок перешел в 3 класс, но вам кажется, что первый год ...</p>
                        <div className={classes.contentFooter}>
                            <span>16.08.2020 18:08</span>
                            <a href="src/components/MainPage/News/News#">Читать далее ⟩⟩</a>
                        </div>
                    </li>
                    <li className={classes.newsItem}>
                        <h3>СТАРТ ЗАНЯТИЙ В ГРУППЕ 3 КЛАССА для новичков</h3>
                        <p>Если ваш ребенок перешел в 3 класс, но вам кажется, что первый год ...</p>
                        <div className={classes.contentFooter}>
                            <span>16.08.2020 18:08</span>
                            <a href="src/components/MainPage/News/News#">Читать далее ⟩⟩</a>
                        </div>
                    </li>
                    <li className={classes.newsItem}>
                        <h3>СТАРТ ЗАНЯТИЙ В ГРУППЕ 3 КЛАССА для новичков</h3>
                        <p>Если ваш ребенок перешел в 3 класс, но вам кажется, что первый год ...</p>
                        <div className={classes.contentFooter}>
                            <span>16.08.2020 18:08</span>
                            <a href="src/components/MainPage/News/News#">Читать далее ⟩⟩</a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default News;