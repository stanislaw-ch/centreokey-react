import {useEffect, useState} from "react";
import Pagination from "../Pagination/Pagination";

import classes from './Posts.module.css'
import classesRoot from '../../../App.module.css'
import news1 from '../../../img/news_11@1x.png';
import news2 from '../../../img/news_11@2x.png';
import {NavLink} from "react-router-dom";

const PAGINATION = {
    INITIAL_AMOUNT: 4,
    SHIFT: 4,
};

function Posts({posts, pageId}) {
    const filteredPosts = pageId === 0 || pageId === 4 ? posts : posts.filter((post) => post.section_id === pageId)

    const [articles, setArticles] = useState([]);
    const [endIndex, setEndIndex] = useState(PAGINATION.INITIAL_AMOUNT);
    const [startIndex, setStartIndex] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        setArticles(filteredPosts.slice(startIndex, endIndex));
    }, [pageId, startIndex, endIndex]);

    useEffect(() => {
        setPageNumber(1);
        setStartIndex(0);
        setEndIndex(PAGINATION.INITIAL_AMOUNT);
    }, [pageId]);

    const handleClick = (e) => {
        const currentPage = Number(e.target.id)

        setStartIndex(currentPage * PAGINATION.INITIAL_AMOUNT - PAGINATION.INITIAL_AMOUNT);
        setEndIndex(currentPage * PAGINATION.INITIAL_AMOUNT);
        setPageNumber(currentPage);
    }

    return (
        <section className={classes.post}>
            {articles.map((article) => {
                return (
                    <div className={classes.postWrapper} key={article.id}>
                        <div className={classes.postHeader}>
                            <h2>{article.title}</h2>
                        </div>
                        <img src={news1} srcSet={`${news2} 2x`}
                             width="830" height="415" alt="Изображение новости"/>
                        <div className={classes.postContentWrapper}>
                            <h3>{article.subtitle}</h3>
                            <p>{article.text}
                            </p>
                            <div className={`${classes.postFooter} ${classesRoot.contentFooter}`}>
                                <span>{article.date}</span>
                                <NavLink to={`article/${article.id}`}>Читать далее ⟩⟩</NavLink>
                            </div>
                        </div>
                    </div>)}
                )
            }

            {filteredPosts.length > 4
                ? <Pagination postsLength={filteredPosts.length} handleClick={handleClick} pageNumber={pageNumber}/>
                : null}
        </section>
    )
}

export default Posts;