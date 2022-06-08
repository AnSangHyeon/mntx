import React, { Fragment, useState } from 'react'
import { useOnMount, useOnUnmount } from '@utils/hook'
import { Link, useLocation } from 'react-router-dom'
import HeaderImg from "../img/header.png"
import { 
  CustomWrapper, 
  HeaderIogo, 
  HeaderLeft, 
  HeaderLink, 
  HeaderLogin, 
  HeaderRight,
  HeaderSign, 
  HeaderUnderLineLog, 
  HeaderUnderLineMenu, 
  HeaderUnderLineSign, 
  MainMenu, 
  MainMenuActive 
} from './index.style'

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  
  const location = useLocation()
  
  const st = {color: location.pathname.indexOf('Reservation') >= 0 ? '#fff' : '#000'}
  useOnMount(() => {})
  useOnUnmount(() => {})
  
  

  return ( 
    <Fragment>
      <CustomWrapper>
        <HeaderLeft>
          <HeaderLink to="/">
            <HeaderIogo>
              <img src={ HeaderImg } alt="이미지" />
            </HeaderIogo>
          </HeaderLink>
          <HeaderUnderLineMenu>
            <HeaderLink to="/" style={st}>
              <MainMenu>홈</MainMenu>  
            </HeaderLink>
          </HeaderUnderLineMenu>
          <HeaderUnderLineMenu>
            <HeaderLink to="/Service" style={st}>
              <MainMenu>서비스</MainMenu>
            </HeaderLink>
          </HeaderUnderLineMenu>
          <HeaderUnderLineMenu>
            <HeaderLink to="/Guide" style={st}>
              <MainMenu>이용가이드</MainMenu>
            </HeaderLink>
          </HeaderUnderLineMenu>
          <HeaderUnderLineMenu>
            <HeaderLink to="/Reservation" style={st}>
              <MainMenuActive>예약하기</MainMenuActive> 
            </HeaderLink>
          </HeaderUnderLineMenu>
          <HeaderUnderLineMenu>
            <HeaderLink to="/Fare" style={st}>
              <MainMenu>예상요금</MainMenu>
            </HeaderLink>
          </HeaderUnderLineMenu>
          <HeaderUnderLineMenu>
            <HeaderLink to="/Recruitment" style={st}>
              <MainMenu>인재 모집</MainMenu>
            </HeaderLink>
          </HeaderUnderLineMenu>
        </HeaderLeft>
        <HeaderRight>
          <HeaderUnderLineLog>
            <HeaderLink to="/Login" style={st}>
              <HeaderLogin>로그인</HeaderLogin>
            </HeaderLink>
          </HeaderUnderLineLog>
          <HeaderUnderLineSign>
            <HeaderLink to="/Sign" style={st}>
              <HeaderSign>회원가입</HeaderSign>
            </HeaderLink>
          </HeaderUnderLineSign>
        </HeaderRight>
        
        
      </CustomWrapper>
    </Fragment>
  )
}

export default Header