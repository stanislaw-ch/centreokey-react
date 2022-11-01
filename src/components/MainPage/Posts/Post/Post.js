import classes from '../Posts.module.css'
import classesRoot from '../../../../App.module.css'
import news1 from '../../../../img/news_11@1x.png';
import news2 from '../../../../img/news_11@2x.png';
import {useParams} from "react-router-dom";


function Post({posts}) {
    const {postId} = useParams();
    console.log('postId')
    console.log(postId)
    let post;
    if (!postId) {
        post = posts[0];
    } else {
        post = posts.find(({id}) => id === Number(postId))
    }

    return (
        <section className={classes.post}>

            <div className={classes.postWrapperFull} key={post.id}>
                <div className={classes.postHeader}>
                    <h2>{post.title}</h2>
                </div>
                {postId && <img src={news1} srcSet={`${news2} 2x`}
                      width="830" height="415" alt="Изображение новости"/>}
                <div className={classes.postContentWrapper}>
                    <h3>{post.subtitle}</h3>
                    <p>{post.full_text}
                    </p>
                    <div className={`${classes.postFooter} ${classesRoot.contentFooter}`}>
                        <span>{post.date}</span>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Post;