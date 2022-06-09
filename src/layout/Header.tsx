import React, { Fragment, useState } from 'react'
import { useOnMount, useOnUnmount } from '@utils/hook'
import { Link, useLocation } from 'react-router-dom'
import HeaderImg from "../img/header.png"
import { 
  CustomWrapper, 
  HeaderLogo,  
  HeaderLink, 
  HeaderLogin, 
  HeaderSign, 
  HeaderUnderLineLog, 
  HeaderUnderLineMenu, 
  HeaderUnderLineSign, 
  MainMenu, 
  MainMenuActive,
  HeaderRight,
  HeaderLeft,
} from './index.style'

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {

  // const [isListHover, setIsListHover] = useState(false)
  // const onMouseOver = () => setIsListHover(true)
  // const onMouseOut = () => setIsListHover(false)


  const location = useLocation()
  const HeaderColor = {
    color: location.pathname.indexOf('Reservation') >= 0 ? '#fff' : '#000'
  }
  const HeaderPosi = {
    position: location.pathname.indexOf('Recruitment') >= 0 ? 'absolute' : 'fixed'
  }
  const HeaderBackground = {
    background: location.pathname.indexOf('Reservation') >= 0 ? '#2a4a9e' : '#fff'
  }


  useOnMount(() => {})
  useOnUnmount(() => {})

  return ( 
    <Fragment>
      <CustomWrapper style={ HeaderBackground }>
        <HeaderLink to="/">
          <HeaderLogo>
            <img src={ HeaderImg } alt="이미지" />
          </HeaderLogo>
        </HeaderLink>

        <HeaderLeft>
          <HeaderUnderLineMenu>
            <HeaderLink to="/" style={ HeaderColor }>
              <MainMenu>홈</MainMenu>  
            </HeaderLink>
          </HeaderUnderLineMenu>
          <HeaderUnderLineMenu>
            <HeaderLink to="/Service" style={ HeaderColor }>
              <MainMenu>서비스</MainMenu>
            </HeaderLink>
          </HeaderUnderLineMenu>
          <HeaderUnderLineMenu>
            <HeaderLink to="/Guide" style={ HeaderColor }>
              <MainMenu>이용가이드</MainMenu>
            </HeaderLink>
          </HeaderUnderLineMenu>
          <HeaderUnderLineMenu>
            <HeaderLink to="/Reservation" style={ HeaderColor }>
              <MainMenuActive>예약하기</MainMenuActive> 
            </HeaderLink>
          </HeaderUnderLineMenu>
          <HeaderUnderLineMenu>
            <HeaderLink to="/Fare" style={ HeaderColor }>
              <MainMenu>예상요금</MainMenu>
            </HeaderLink>
          </HeaderUnderLineMenu>
          <HeaderUnderLineMenu>
            <HeaderLink to="/Recruitment" style={ HeaderColor }>
              <MainMenu>인재 모집</MainMenu>
            </HeaderLink>
          </HeaderUnderLineMenu>
        </HeaderLeft>
        
        <HeaderRight>
          <HeaderUnderLineLog>
            <HeaderLink to="/Login" style={ HeaderColor }>
              <HeaderLogin>로그인</HeaderLogin>
            </HeaderLink>
          </HeaderUnderLineLog>
          <HeaderUnderLineSign>
            <HeaderLink to="/Sign" style={ HeaderColor }>
              <HeaderSign>회원가입</HeaderSign>
            </HeaderLink>
          </HeaderUnderLineSign>
        </HeaderRight>
        
       
      </CustomWrapper>
    </Fragment>
  )
}

export default Header