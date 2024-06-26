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
  HeaderHeightAll,
} from './index.style'
import styled from 'styled-components'

interface IHeaderProps {

}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {


  const location = useLocation()
  const HeaderColor = location.pathname.indexOf('Reservation') >= 0 ? '#fff' : '#000'
  const HeaderPosition = location.pathname.indexOf('Recruitment') >= 0 ? 'absolute' : 'fixed'
  const HeaderBackground = location.pathname.indexOf('Reservation') >= 0 ? '#2a4a9e' : '#fff'
  const HeaderHeight = location.pathname.indexOf('Reservation') >= 0 ? '' : 'none'

  function MouseOver(e) {
    e.target.style.color = location.pathname.indexOf('Reservation') >= 0 ? '' : '#2a4a9e'  
  }
  function MouseOut(e){
    e.target.style.color = location.pathname.indexOf('Reservation') >= 0 ? '' : ''  
  }
  //이벤트연습
  function TstClick() { alert("클릭") }
  function TstContextMenu() { alert("우클릭") }
  function TstDoubleClick() { alert("더블클릭") } //onClick이벤트있으면 작동 x 
  // function TstDrag() { alert("드래그") }
  function TstDragEnd() { alert("드래그완료") }
  function TstDragEnter(e) {
    e.target.style.background = 'pink' 
  }
  function TstDrop() {
    
  }
 
  //
  useOnMount(() => {})
  useOnUnmount(() => {})

  return ( 
    <Fragment>
      <CustomWrapper style={{position: HeaderPosition, background: HeaderBackground}}>
        <HeaderLink to="/">
          <HeaderLogo>
            <img src={ HeaderImg } alt="이미지" />
          </HeaderLogo>
        </HeaderLink>

        <HeaderLeft>
          <HeaderUnderLineMenu>
            <HeaderLink to="/" style={{color: HeaderColor}} onMouseOut={MouseOut} onMouseOver={MouseOver}>
              <MainMenu>홈</MainMenu>  
            </HeaderLink>
          </HeaderUnderLineMenu>
          <HeaderUnderLineMenu>
            <HeaderLink to="/Service" style={{color: HeaderColor}} onMouseOut={MouseOut} onMouseOver={MouseOver}>
              <MainMenu>서비스</MainMenu>
            </HeaderLink>
          </HeaderUnderLineMenu>
          <HeaderUnderLineMenu>
            <HeaderLink to="/Guide" style={{color: HeaderColor}} onMouseOut={MouseOut} onMouseOver={MouseOver}>
              <MainMenu>이용가이드</MainMenu>
            </HeaderLink>
          </HeaderUnderLineMenu>
          <HeaderUnderLineMenu>
            <HeaderLink to="/Reservation" style={{color: HeaderColor}} onMouseOut={MouseOut} onMouseOver={MouseOver}>
              <MainMenuActive>예약하기</MainMenuActive> 
            </HeaderLink>
          </HeaderUnderLineMenu>
          <HeaderUnderLineMenu>
            <HeaderLink to="/Fare" style={{color: HeaderColor}} onMouseOut={MouseOut} onMouseOver={MouseOver}>
              <MainMenu>예상요금</MainMenu>
            </HeaderLink>
          </HeaderUnderLineMenu>
          <HeaderUnderLineMenu>
            <HeaderLink to="/Recruitment" style={{color: HeaderColor}} onMouseOut={MouseOut} onMouseOver={MouseOver}>
              <MainMenu>인재 모집</MainMenu>
            </HeaderLink>
          </HeaderUnderLineMenu>
          <HeaderUnderLineMenu>
            <HeaderLink
              to="/EventTest" 
              style={{color: HeaderColor}} 
              onMouseOut={MouseOut} 
              onMouseOver={MouseOver}
              onClick={TstClick}
              onContextMenu={TstContextMenu}
              onDoubleClick={TstDoubleClick}
              // onDrag={TstDrag}
              onDragEnd={TstDragEnd}
              onDragEnter={TstDragEnter}
            >
              <MainMenu>event test</MainMenu>
            </HeaderLink>
          </HeaderUnderLineMenu>
        </HeaderLeft>
        
        <HeaderRight>
          <HeaderUnderLineLog>
            <HeaderLink to="/Login" style={{color: HeaderColor}} onMouseOut={MouseOut} onMouseOver={MouseOver}>
              <HeaderLogin>로그인</HeaderLogin>
            </HeaderLink>
          </HeaderUnderLineLog>
          <HeaderUnderLineSign>
            <HeaderLink to="/Sign" style={{color: HeaderColor}} onMouseOut={MouseOut} onMouseOver={MouseOver}>
              <HeaderSign>회원가입</HeaderSign>
            </HeaderLink>
          </HeaderUnderLineSign>
        </HeaderRight>
      </CustomWrapper>
      <HeaderHeightAll style={{display: HeaderHeight}}></HeaderHeightAll>
    </Fragment>
  )
}

export default Header