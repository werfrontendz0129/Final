import React, { useState, useEffect } from 'react'

function MainContent(props) {
  return (
    <>
      <main
        role="main"
        style={{
          padding: '0 120px',
          textAlign: 'center',
          // border: '1px solid black',
        }}
      >
        <div className="container">{props.children}</div>
      </main>
    </>
  )
}

export default MainContent
