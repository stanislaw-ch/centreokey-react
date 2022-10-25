import classes from './SearchForm.module.css'

function SearchForm({placeholder, btnTitle, typ}) {
    const classesSearch = [
        classes.searchForm,
        typ ? classes.searchFormHeader: ""
    ].join(" ");
    return (
        <form className={classesSearch} action="src/components/Header/Header#" method="POST" name="searchform">
            <input type="text" name="search_words" placeholder={placeholder} />
            <button type="submit" name="search">{btnTitle}</button>
        </form>
    )
}

export default SearchForm;