import React, { Fragment, useState } from 'react'
import { useOnMount, useOnUnmount } from '@utils/hook'
import { Link } from 'react-router-dom'
import HeaderImg from "../img/header.png"
import { CustomWrapper, HeaderIogo, HeaderLeft, HeaderLogin, HeaderRight, HeaderSign, HeaderUnderLineLog, HeaderUnderLineMenu, HeaderUnderLineSign, LinkLineNone, MainMenu } from './index.style'

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  useOnMount(() => {})
  useOnUnmount(() => {})
  
  function ReservationClick() {
    

  }

  return (
    <Fragment>
      <CustomWrapper>
        <HeaderLeft>
          <LinkLineNone to="/">
            <HeaderIogo>
              <img src={ HeaderImg } alt="이미지" />
            </HeaderIogo>
          </LinkLineNone>
          <HeaderUnderLineMenu>
            <LinkLineNone to="/">
              <MainMenu>홈</MainMenu>  
            </LinkLineNone>
          </HeaderUnderLineMenu>
          <HeaderUnderLineMenu>
            <LinkLineNone to="/Service">
              <MainMenu>서비스</MainMenu>
            </LinkLineNone>
          </HeaderUnderLineMenu>
          <HeaderUnderLineMenu>
            <LinkLineNone to="/Guide">
              <MainMenu>이용가이드</MainMenu>
            </LinkLineNone>
          </HeaderUnderLineMenu>
          <HeaderUnderLineMenu>
            <LinkLineNone to="/Reservation">
              <MainMenu onClick={ ReservationClick }>예약하기</MainMenu>
            </LinkLineNone>
          </HeaderUnderLineMenu>
          <HeaderUnderLineMenu>
            <LinkLineNone to="/Fare">
              <MainMenu>예상요금</MainMenu>
            </LinkLineNone>
          </HeaderUnderLineMenu>
          <HeaderUnderLineMenu>
            <LinkLineNone to="/Recruitment">
              <MainMenu>인재 모집</MainMenu>
            </LinkLineNone>
          </HeaderUnderLineMenu>
        </HeaderLeft>
        <HeaderRight>
          <HeaderUnderLineLog>
            <LinkLineNone to="/Login">
              <HeaderLogin>로그인</HeaderLogin>
            </LinkLineNone>
          </HeaderUnderLineLog>
          <HeaderUnderLineSign>
            <LinkLineNone to="/Sign">
              <HeaderSign>회원가입</HeaderSign>
            </LinkLineNone>
          </HeaderUnderLineSign>
        </HeaderRight>
        
        
      </CustomWrapper>
    </Fragment>
  )
}

export default Header