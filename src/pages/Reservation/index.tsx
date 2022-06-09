import Footer from '@layout/Footer'
import Header from '@layout/Header'
import { 
  All, 
  ReservationAll,
  ReservationBetween, 
  ReservationCustomBtn, 
  ReservationLogo, 
  ReservationLogoSize, 
  ReservationNmember, 
  ReservationTitle 
} from '@layout/index.style'
import { useOnMount, useOnUnmount } from '@utils/hook'
import React, { Fragment } from 'react'
import ReservationImg from '../../img/reservation.png'

interface IProps {
}
 
const Reservation: React.FC<IProps> = (props: IProps) => {
  useOnMount(() => { window.scrollTo({top:0, behavior:'smooth'}) })
  useOnUnmount(() => {})
  
  return ( 
    <Fragment>
      
      <All></All>
        <ReservationAll>
          <ReservationBetween>
            <ReservationTitle>멍타냥택시 예약하기</ReservationTitle>
            <ReservationLogoSize>
              <ReservationLogo src={ ReservationImg } alt="" />
            </ReservationLogoSize>
          </ReservationBetween>
          <ReservationNmember>
            예약하기는 로그인이 필요한 서비스 입니다.<br/><br/><br/>
            <ReservationCustomBtn>로그인 하기 &nbsp;&nbsp; | &nbsp;&nbsp; 회원가입 하기</ReservationCustomBtn>
          </ReservationNmember>
          
        </ReservationAll>
      
      
      <Footer></Footer>
      
    </Fragment>
  )
}

export default Reservation