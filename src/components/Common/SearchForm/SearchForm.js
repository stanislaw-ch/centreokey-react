import classes from './SearchForm.module.css'

function SearchForm({typ}) {
    const classesSearch = [
        classes.searchForm,
        typ ? classes.searchFormHeader: ""
    ].join(" ");
    return (
        <form className={classesSearch} action="src/components/Header/Header#" method="POST" name="searchform">
            <input type="text" name="search_words" placeholder="Поиск по сайту..." />
            <button type="submit" name="search">поиск</button>
        </form>
    )
}

export default SearchForm;