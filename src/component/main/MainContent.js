import React, { useState, useEffect } from 'react'

function MainContent(props) {
  return (
    <>
      <main
        role="main"
        style={{
          // padding: '0 120px',
          // textAlign: 'center',
          width: '100vw',
          // maxWidth: '1440px',
          // border: '1px solid red',
        }}
      >
        <div className="container">{props.children}</div>
      </main>
    </>
  )
}

export default MainContent
