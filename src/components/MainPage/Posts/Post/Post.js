import classes from '../Posts.module.css'
import classesRoot from '../../../../App.module.css'
import news1 from '../../../../img/news_11@1x.png';
import news2 from '../../../../img/news_11@2x.png';
import {NavLink, useParams} from "react-router-dom";


function Post({posts}) {
    const {postId} = useParams();
    const {id, title, subtitle, text, date} = posts.find((post) => post.id === Number(postId))

    return (
        <section className={classes.post}>

            <div className={classes.postWrapper} key={id}>
                <div className={classes.postHeader}>
                    <h2>{title}</h2>
                </div>
                <img src={news1} srcSet={`${news2} 2x`}
                     width="830" height="415" alt="Изображение новости"/>
                <div className={classes.postContentWrapper}>
                    <h3>{subtitle}</h3>
                    <p>{text}
                    </p>
                    <div className={`${classes.postFooter} ${classesRoot.contentFooter}`}>
                        <span>{date}</span>
                        <NavLink to={`article_${id}`}>Читать далее ⟩⟩</NavLink>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Post;