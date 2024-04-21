
const Search = () => {
    return (
        <div className="search-papa">
      <label htmlFor="p">
      <input type="text" placeholder="Search" className="search-input" id="p" />
            <p className="search-icon"><ion-icon name="search-outline"></ion-icon></p>
      </label>
        </div>
    )
}

export default Search;