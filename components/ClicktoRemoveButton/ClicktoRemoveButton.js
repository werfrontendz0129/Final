import React, { useState } from 'react'
import './ClicktoRemoveButton.scss'

function ClicktoRemoveButton() {
  return (
    <>
      <button type="button" className="close w-remove" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </>
  )
}

export default ClicktoRemoveButton
