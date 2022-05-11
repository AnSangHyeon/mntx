import React, { Fragment } from 'react'
import { useOnMount, useOnUnmount } from '@utils/hook'
import { Link } from 'react-router-dom'
import HeaderImg from "../img/header.png"
import { CustomWrapper, HeaderIogo, HeaderLeft, HeaderLogin, HeaderRight, HeaderSign, LinkLineNone, MainMenu } from './index.style'

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  
  useOnMount(() => {
    
  })

  useOnUnmount(() => {

  })
  
  return (
    <Fragment>
      <CustomWrapper>
        <HeaderLeft>
          <LinkLineNone to="/">
            <HeaderIogo>
              <img src={ HeaderImg } alt="이미지" />
            </HeaderIogo>
          </LinkLineNone>
          <LinkLineNone to="/">
            <MainMenu>홈</MainMenu>
          </LinkLineNone>
          <LinkLineNone to="/Service">
            <MainMenu>서비스</MainMenu>
          </LinkLineNone>
          <LinkLineNone to="/Guide">
            <MainMenu>이용가이드</MainMenu>
          </LinkLineNone>
          <LinkLineNone to="/Reservation">
            <MainMenu>예약하기</MainMenu>
          </LinkLineNone>
          <LinkLineNone to="/Fare">
            <MainMenu>예상요금</MainMenu>
          </LinkLineNone>
          <LinkLineNone to="/">
            <MainMenu>인재 모집</MainMenu>
          </LinkLineNone>
        </HeaderLeft>
        <HeaderRight>
          <LinkLineNone to="/Login">
            <HeaderLogin>로그인</HeaderLogin>
          </LinkLineNone>
          <LinkLineNone to="/Sign">
            <HeaderSign>회원가입</HeaderSign>
          </LinkLineNone>
        </HeaderRight>
        
        
      </CustomWrapper>
    </Fragment>
  )
}

export default Header