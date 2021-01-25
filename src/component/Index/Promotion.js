import React,{useState,useRef, useEffect} from 'react'
import context from 'react-bootstrap/esm/AccordionContext'

function Promotion() {
  
  const [open , setOpen] = useState(false)
  function Toggle(){
    setOpen(!open)
  }
  // const canvasRef = useRef(null)
  // const contextRef = useRef(null)
  // const [isDrawing, setIsDrawing] = useState(false)
  // useEffect(()=>{
  //   const canvas =  canvasRef.current
  //   canvas.width = window.innerWidth*2
  //   canvas.height = window.innerHeight*2
  //   canvas.style.width = `${window.innerWidth}px`
  //   canvas.style.height = `${window.innerHeight}px`

  //   const context = canvas.getContext("2d")
  //   context.scale(2,2)
  //   context.lineCap = "round"
  //   context.strokeStyle = "black"
  //   context.lineWidth = 5
  //   contextRef.current = context
  // },[])
  // const startDrawing = ({nativeEvent}) =>{
  //   const {offsetX, offsetY} = nativeEvent
  //   contextRef.current.beginPath()
  //   contextRef.current.moveTo(offsetX,offsetY)
  //   setIsDrawing(true)
  // }
  // const finishDrawing= () =>{
  //   contextRef.current.closePath()
  //   setIsDrawing(false)
  // }
  // const drawing = ({nativeEvent}) =>{
  //   if(!isDrawing){
  //     return
  //   }
  //   const{offsetX,offsetY}= nativeEvent
  //   contextRef.current.lineTo(offsetX,offsetY)
  //   contextRef.current.stroke()
  // }
  return (
    <>
      <div className="c-promotion justify-content-center align-items-center">
        <div>開幕慶 - 分享製作長輩圖拿優惠 !</div><div className="c-transition" onClick={Toggle}><span>&nbsp;&nbsp;</span>{open?<i class="fas fa-chevron-up"></i>:<i class="fas fa-chevron-down"></i>}</div>
      </div>
      {/*c-promotion active justify-content-center  */}
      {/* <div className={open?`c-test`:`` }> */}
        {/* <canvs 
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={drawing}
          ref={canvasRef}
        /> */}
      {/* </div> */}
    </>
  )
}

export default Promotion
