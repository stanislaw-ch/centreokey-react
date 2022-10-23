import classes from './Posts.module.css'
import classesRoot from '../../../App.module.css'
import news1 from '../../../img/news_11@1x.png';
import news2 from '../../../img/news_11@2x.png';

function Posts() {
    return (
        <section className={classes.post}>
            <div className={classes.postWrapper}>
                <div className={classes.postHeader}>
                    <h2>ОГЭ по английскому языку</h2>
                </div>
                <img src={news1} srcSet={`${news2} 2x`}
                     width="830" height="415" alt="Изображение новости" />
                    <div className={classes.postContentWrapper}>
                        <h3>Подготовка к ОГЭ по английскому для учащихся 8-9 классов</h3>
                        <p>Подготовка к ОГЭ по английскому языку - это двухгодичная программа, готовящая к сдаче основного государственного экзамена по английскому языку в 9 классе.Подготовка к ОГЭ по английскому языку - это двухгодичная программа, готовящая к сдаче основного государственного экзамена по английскому языку в 9 классе.
                        </p>
                        <div className={`${classes.postFooter} ${classesRoot.contentFooter}`}>
                            <span>16.08.2020 18:08</span>
                            <a href="src/components/MainPage/Posts/Posts#">Читать далее ⟩⟩</a>
                        </div>
                    </div>
            </div>
            <div className={classes.postWrapper}>
                <div className={classes.postHeader}>
                    <h2>ОГЭ по английскому языку</h2>
                </div>
                <img src={news1} srcSet={`${news2} 2x`}
                     width="830" height="415" alt="Изображение новости" />
                    <div className={classes.postContentWrapper}>
                        <h3>Подготовка к ОГЭ по английскому для учащихся 8-9 классов</h3>
                        <p>Подготовка к ОГЭ по английскому языку - это двухгодичная программа, готовящая к сдаче основного государственного экзамена по английскому языку в 9 классе.Подготовка к ОГЭ по английскому языку - это двухгодичная программа, готовящая к сдаче основного государственного экзамена по английскому языку в 9 классе.
                        </p>
                        <div className={`${classes.postFooter} ${classesRoot.contentFooter}`}>
                            <span>16.08.2020 18:08</span>
                            <a href="src/components/MainPage/Posts/Posts#">Читать далее ⟩⟩</a>
                        </div>
                    </div>
            </div>
            <div className={classes.postWrapper}>
                <div className={classes.postHeader}>
                    <h2>ОГЭ по английскому языку</h2>
                </div>
                <img src={news1} srcSet={`${news2} 2x`}
                     width="830" height="415" alt="Изображение новости" />
                    <div className={classes.postContentWrapper}>
                        <h3>Подготовка к ОГЭ по английскому для учащихся 8-9 классов</h3>
                        <p>Подготовка к ОГЭ по английскому языку - это двухгодичная программа, готовящая к сдаче основного государственного экзамена по английскому языку в 9 классе.Подготовка к ОГЭ по английскому языку - это двухгодичная программа, готовящая к сдаче основного государственного экзамена по английскому языку в 9 классе.
                        </p>
                        <div className={`${classes.postFooter} ${classesRoot.contentFooter}`}>
                            <span>16.08.2020 18:08</span>
                            <a href="src/components/MainPage/Posts/Posts#">Читать далее ⟩⟩</a>
                        </div>
                    </div>
            </div>
            <div className={classes.postWrapper}>
                <div className={classes.postHeader}>
                    <h2>ОГЭ по английскому языку</h2>
                </div>
                <img src={news1} srcSet={`${news2} 2x`}
                     width="830" height="415" alt="Изображение новости" />
                    <div className={classes.postContentWrapper}>
                        <h3>Подготовка к ОГЭ по английскому для учащихся 8-9 классов</h3>
                        <p>Подготовка к ОГЭ по английскому языку - это двухгодичная программа, готовящая к сдаче основного государственного экзамена по английскому языку в 9 классе.Подготовка к ОГЭ по английскому языку - это двухгодичная программа, готовящая к сдаче основного государственного экзамена по английскому языку в 9 классе.
                        </p>
                        <div className={`${classes.postFooter} ${classesRoot.contentFooter}`}>
                            <span>16.08.2020 18:08</span>
                            <a href="src/components/MainPage/Posts/Posts#">Читать далее ⟩⟩</a>
                        </div>
                    </div>
            </div>
            <ul className={classes.postPagination}>
                <li className={classes.postPaginationItemActive}><a href="src/components/MainPage/Posts/Posts#">1</a></li>
                <li><a href="src/components/MainPage/Posts/Posts#">2</a></li>
                <li><a href="src/components/MainPage/Posts/Posts#">3</a></li>
            </ul>
        </section>
    )
}

export default Posts;