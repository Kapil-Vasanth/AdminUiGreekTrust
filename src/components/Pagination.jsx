import React from 'react'

function Pagination({pagination, totalUsers, setPagination, handleDeleteSelected}) {

    const paginationBtns = () => {
        const btns = []
        if(pagination > 0){
            btns.push(<button key="paginationLeftIcon"  className='pagination-btn pagination-left' onClick={() => setPagination(pagination - 1)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"></path>
          </svg></button>)
        }
        
        for(let i = 0; i < totalUsers; i+=10){
            btns.push(<button key={i} className='pagination-btn' onClick={() => setPagination((i/10 + 1) - 1)}>{i/10 + 1}</button>)
        }

        if(pagination < Math.ceil(totalUsers / 10) - 1){
            btns.push(<button key="paginationRightIcon"  className='pagination-btn pagination-left' onClick={() => setPagination(pagination + 1)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg></button>)
            
        }
        return btns
    }

  return (
    <div className='pagination'>
        <div>
            <button type='button' onClick={handleDeleteSelected} className='deleteButton'>Delete Selected</button>
        </div>
        <div className='pagination-btns'>
        {paginationBtns()}
        </div>
    </div>
  )
}

export default Pagination