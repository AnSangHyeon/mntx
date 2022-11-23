import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { All, AwesomeBlock, EventInput, EventTestAll } from "@layout/index.style"
import { Fragment, useState } from "react"
import { faMicrophone, faMicrophoneSlash, faX, faO } from "@fortawesome/free-solid-svg-icons"
interface IProps {

}

const EventTest: React.FC<IProps> = (props: IProps) => {

  const [visible, setVisible] = useState(true) 
  const [testhover, setTesthover] = useState(true)

  function onHover() {
    setTesthover(true)
  }
  function onOut() {
    setTesthover(false)
  }
  function onTestKeyDown() {
    console.log("keydown")
  }
  function onTestKeyUp() {
    console.log("keyup")
  }
  function onTestFocus() {
    console.log("focus")
  }
  function onTestBlur() {
    console.log("blur")
  }
  function onTestKeyPress() {
    console.log("keypress")
  }
  return (
   <Fragment>
    <All></All>
    <EventTestAll>
      <AwesomeBlock 
        onClick={() => { setVisible(!visible) }} 
        icon={visible ? faMicrophone : faMicrophoneSlash} 
      />
      <AwesomeBlock 
        onMouseOver={ onHover }
        onMouseOut={ onOut }
        icon={ testhover ? faO : faX } 
      />
      <EventInput 
        type="text" 
        placeholder="keyup,keydown,keypress,focus,blur" 
        onKeyUp={onTestKeyUp} //키보드 눌렀다 땔때
        onKeyDown={onTestKeyDown} //키보드 누를때
        onFocus={onTestFocus} //이 요소를 클릭하거나 Tab으로 이동했을때
        onBlur={onTestBlur} //포커스 된상태에서 다른곳을 클릭하거나 Tab으로 이동할때
        onKeyPress={onTestKeyPress} //키보드 키를 누르고있을때
      /> 
      
    </EventTestAll>
   </Fragment>
  ) 
}

export default EventTest