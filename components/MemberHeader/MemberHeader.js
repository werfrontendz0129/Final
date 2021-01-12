import React from 'react'
import './MemberHeader.scss'

function MemberHeader() {
  return (
    <>
      <nav className="w-memberNav">
        <div className="w-container">
          <div className="d-flex">
            <img className="w-logo" src="images/Logo_o-04.png" alt="" />
          </div>
        </div>
      </nav>
    </>
  )
}

export default MemberHeader
