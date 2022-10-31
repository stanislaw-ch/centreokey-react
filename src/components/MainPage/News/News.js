import {NavLink} from "react-router-dom";
import classes from '../../../App.module.css'

function News({news}) {
    return (
        <section className={classes.news}>
            <div className={`${classes.newsHeader} ${classes.header}`}>
                <h2>Новости</h2>
            </div>
            <button className={`${classes.newsSlideButton} ${classes.newsSlideButtonRight}`} type="button"></button>
            <button className={`${classes.newsSlideButton} ${classes.newsSlideButtonLeft}`} type="button"></button>
            <div className={classes.newsSliderContainer}>
                <ul className={classes.newsWrapper} style={{transform: `translateX(0px)`}}>
                    {news.map((newsItem) => {
                        return (
                            <li className={classes.newsItem} key={newsItem.id}>
                                <h3>{newsItem.title}</h3>
                                <p>{newsItem.text}</p>
                                <div className={classes.contentFooter}>
                                    <span>{newsItem.date}</span>
                                    <NavLink to={`news/${newsItem.id}`}>Читать далее ⟩⟩</NavLink>
                                </div>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default News;