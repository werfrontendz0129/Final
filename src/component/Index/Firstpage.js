import React,{useState} from 'react'
import {CgToggleOff, CgToggleOn} from 'react-icons/cg'


function Firstpage() {

  const [turn , setTurn] = useState(true)
  function toggle(){
    setTurn(!turn)
  }
  return (
    <>
      <div className="c-first-layer">
        <div className={turn?`c-backgroundleft`:`c-backgroundleft2`}></div>
        <div className="c-second-layer">
          <div className="c-backgroundmiddletop">
            <div className="c-word1 align-content-between row">
              <div className="h2">Why Plants?</div>
              {/* <div className="h2">Click to See<span>&nbsp;&nbsp;</span><i class="fas fa-angle-double-down"></i></div> */}
              <div className={turn?`c-lh18px`:`c-lh18px-g`}>居家布置</div><div onClick={toggle}><span>&nbsp;&nbsp;</span>{turn?<CgToggleOn className="c-LH" />:<CgToggleOff className="c-LH" />}<span>&nbsp;&nbsp;</span></div><div className={turn?`c-lh18px-g`:`c-lh18px`}>商業空間</div>
              <div className="h4">
                隨心所欲,
                <br />
                改變室內空間的氣氛｡
              </div>
            </div>
          </div>
          <div className={turn?`c-backgroundmiddle`:`c-backgroundmiddle2`}></div>
        </div>
        <div className="c-second-layer">
          <div className="c-backgroundrighttop"></div>
          <div className={turn?`c-backgroundrightmiddle`:`c-backgroundrightmiddle2`}></div>
          <div className="c-last">
            <div className="c-word2">
              <div className="h4">是生活美學, 也是人生哲學</div>
              <div className="h6">
                A Promise of Aesthetics & <br />
                Philosophy of Life.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Firstpage
