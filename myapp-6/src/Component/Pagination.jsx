import React, { useEffect } from 'react'

const Pagination = ({ npages, currentPage, setCurrentPage }) => {

    const PageNumber = [...Array(npages + 1).keys()].slice(1)

        const gotToNextPage = () => {
        if (currentPage !== npages) 
         setCurrentPage(currentPage + 1)
       } 

    useEffect(()=>{ 
  
       console.log(currentPage)

    },[ currentPage])

    const goToPreviousPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)

    }
    return (
      
        <nav >
            <ul className='pagination justify-content-center '>
                <li className='page-item '><a className='page-link border bg-dark text-white' onClick={goToPreviousPage} href='#'>Previous</a></li>


                {
                    PageNumber.map(pgNo=> (


                        <li key={pgNo} className={`page-item  ${currentPage == pgNo ? 'active' : ''}`}  >
                            <a className='page-link border bg-dark ' onClick={() => { setCurrentPage(pgNo) }} href='#'>{pgNo}</a>

                        </li>))        
                }


                <li className='page-item '><a className='page-link border bg-dark text-white' onClick={gotToNextPage} href='#'>Next</a></li>
            </ul>
        </nav>
     
    )
}

export default Pagination
