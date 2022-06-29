import Footer from '@layout/Footer'
import Header from '@layout/Header'
import { 
  All, 
  ReservationSection1,
  ReservationBetween, 
  ReservationCustomBtn, 
  ReservationLogo, 
  ReservationLogoSize, 
  ReservationNmember, 
  ReservationTitle, 
  ReservationAll,
  ReservationLogSignBtn,
  ReservationHeight
} from '@layout/index.style'
import { useOnMount, useOnUnmount } from '@utils/hook'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import ReservationImg from '../../img/reservation.png'

interface IProps {
}
 
const Reservation: React.FC<IProps> = (props: IProps) => {
  useOnMount(() => { window.scrollTo({top:0, behavior:'smooth'}) })
  useOnUnmount(() => {})
  
  return ( 
    <Fragment>
    
      <ReservationHeight>
        <ReservationAll>
          <ReservationSection1>
            <ReservationBetween>
              <ReservationTitle>멍타냥택시 예약하기</ReservationTitle>
              <ReservationLogoSize>
                <ReservationLogo src={ ReservationImg } alt="" />
              </ReservationLogoSize>
            </ReservationBetween>
            <ReservationNmember>
              예약하기는 로그인이 필요한 서비스 입니다.<br /><br /><br />
              <ReservationCustomBtn>
                <ReservationLogSignBtn to='/Login'>로그인 하기&nbsp;&nbsp; | &nbsp;&nbsp;</ReservationLogSignBtn>
                <ReservationLogSignBtn to='/Sign'>회원가입 하기</ReservationLogSignBtn>       
              </ReservationCustomBtn>
            </ReservationNmember>
            
          </ReservationSection1>
        </ReservationAll>
      </ReservationHeight>
      
      
      
    </Fragment>
  )
}

export default Reservation