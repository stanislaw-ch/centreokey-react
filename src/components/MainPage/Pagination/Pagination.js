import classes from './Pagination.module.css'

function Pagination({postsLength, handleClick, pageNumber}) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(postsLength / 4); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className={classes.postPagination}>
            {pageNumbers.map((page) => {
                return (
                    <li className = {pageNumber === page ? classes.postPaginationItemActive: null}
                        key={page}
                        id={page}
                        onClick={handleClick}
                    >
                        {page}
                    </li>
                    )
                })
            }
        </ul>
    )
}

export default Pagination;