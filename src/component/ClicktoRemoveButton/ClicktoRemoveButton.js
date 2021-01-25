import React, {useState} from 'react'
import './ClicktoRemoveButton.scss'

function ClicktoRemoveButton() {
    // const [removeThis, setRemoveThis] = useState()

    return (
        <>
        <button type="button" className="close w-remove" id="w-rrrmove" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </>
    )
}

export default ClicktoRemoveButton