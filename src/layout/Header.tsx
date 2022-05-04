import React, { Fragment } from 'react'
import { useOnMount, useOnUnmount } from '@utils/hook'
import { Link } from 'react-router-dom'
import HeaderImg from "../img/header.png"
import { CustomWrapper, HeaderIogo, HeaderLogin, HeaderSign, MainMenu } from './index.style'

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  
  useOnMount(() => {
    
  })

  useOnUnmount(() => {

  })
  
  return (
    <Fragment>
      <CustomWrapper>
        <Link to="/">
          <HeaderIogo>
            <img src={ HeaderImg } alt="이미지" />
          </HeaderIogo>
        </Link>
        <Link to="/">
          <MainMenu>홈</MainMenu>
        </Link>
        <Link to="/">
          <MainMenu>서비스</MainMenu>
        </Link>
        <Link to="/">
          <MainMenu>이용가이드</MainMenu>
        </Link>
        <Link to="/">
          <MainMenu>예약하기</MainMenu>
        </Link>
        <Link to="/">
          <MainMenu>예상요금</MainMenu>
        </Link>
        <Link to="/">
          <HeaderLogin>로그인</HeaderLogin>
        </Link>
        <Link to="/">
          <HeaderSign>회원가입</HeaderSign>
        </Link>
        
      </CustomWrapper>
    </Fragment>
  )
}

export default Header