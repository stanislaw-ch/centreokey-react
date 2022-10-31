import classes from '../Posts.module.css'
import classesRoot from '../../../../App.module.css'
import news1 from '../../../../img/news_11@1x.png';
import news2 from '../../../../img/news_11@2x.png';
import {useParams} from "react-router-dom";


function Post({posts}) {
    const {postId} = useParams();
    const {id, title, subtitle, full_text, date} = posts.find(({id}) => id === Number(postId))

    return (
        <section className={classes.post}>

            <div className={classes.postWrapperFull} key={id}>
                <div className={classes.postHeader}>
                    <h2>{title}</h2>
                </div>
                <img src={news1} srcSet={`${news2} 2x`}
                     width="830" height="415" alt="Изображение новости"/>
                <div className={classes.postContentWrapper}>
                    <h3>{subtitle}</h3>
                    <p>{full_text}
                    </p>
                    <div className={`${classes.postFooter} ${classesRoot.contentFooter}`}>
                        <span>{date}</span>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Post;