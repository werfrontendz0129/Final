import React from 'react'
import './VPagination.scss'
import { PaginationItem } from 'semantic-ui-react'


const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <nav>
      <ul className="pagination pagination-md">
        {/* <li className="page-item">
        <a className="page-link">《</a>
        </li> */}
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
          
        ))}
        {/* <li className="page-item">
        <a className="page-link">》</a>
        </li> */}
      </ul>
    </nav>
  )
}

export default Pagination
