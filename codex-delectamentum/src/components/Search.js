import React from 'react'

const Search = ({ setSearch }) => {

  const handleChange = (e) => setSearch(e.target.value);

  return (
    <div className="searchbar">
      <label className="searchLabel" htmlFor="search">Search:</label> 
      
      <input
      autoComplete="off"
      className="queryBox"
      type="text"
      id="search"
      placeholder="Search recipes"
      onChange={handleChange}
      />

    </div>
  )
}

export default Search

