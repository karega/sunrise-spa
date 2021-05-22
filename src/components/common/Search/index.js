import React from "react";
import clsx from 'clsx'

const Search = ({search, isSearchOpen, toggleSearch}) => {
  return (
    <div
    className={clsx('search-content-wrap main-search-active', {['search-visible']: isSearchOpen})}
  >
    <a onClick={ ()=> toggleSearch(!isSearchOpen) } className="search-close"
      ><i className="dl-icon-close"></i
    ></a>
    <div className="search-content">
      <form className="search-form">
        <input
          name="q"
          type="text"
          // v-model="searchText"
          placeholder="Search entire store…"
        />
        <button onClick={search} className="button-search">
          <i className="dl-icon-search10"></i>
        </button>
      </form>
    </div>
  </div>
  )
}

export default Search