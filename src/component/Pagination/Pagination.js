import React, {useState} from 'react'
import './Pagination.scss'

function Pagination() {
    return (
        <>
        <div>
                        <ul className="pagination d-flex justify-content-center w-pagination">
                            <li className="page-item"><a className="page-link" href="#">&lt;Previous</a></li>
                            <li className="page-item">
                                <a className="page-link active" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next&gt;</a></li>
                        </ul>
                    </div>
        </>
    )
}

export default Pagination