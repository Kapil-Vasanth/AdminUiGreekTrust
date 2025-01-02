import React, { useState } from 'react'

function Search({setFilterNameEmailRole}) {
  const [filterValue,setFilterValue] = useState('')

  const handleChangeFilter = (e) => {
    setFilterValue(e.target.value)
    setFilterNameEmailRole(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFilterNameEmailRole(filterValue)
  }

  return (
    <div className='search-component'>
      <form onSubmit={handleSubmit}>
        <input type="text" value={filterValue} onChange={handleChangeFilter} className='search-input' />
      </form>
    </div>
  )
}

export default Search