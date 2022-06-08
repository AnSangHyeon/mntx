import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '@layout/Header'
import { 
  All, 
  FareAll, 
  FareCheckAll, 
  FareCheckbox, 
  FareCheckFlex, 
  FareCntNum, 
  FareCol1, 
  FareCol2, 
  FareCol3, 
  FareCol4, 
  FareCol4F, 
  FareColTxt, 
  FareColTxt2, 
  FareContainer1, 
  FareContainer2, 
  FareContainerAll, 
  FareCustomBtn,  
  FareMarginTop, 
  FarePlusMinus,
  FarePlusMinusAll, 
  FareRow1, 
  FareRow2, 
  FareRow4, 
  FareRow5, 
  FareSaveBtn, 
  FareSaveContainer, 
  FareSaveLeft, 
  FareSaveRight, 
  FareSaveRow, 
  FareSpaceCol, 
  FontColorBlack, 
  HeaderFixed, 
  LinkLineNone 
} from '@layout/index.style'
import { useOnMount, useOnUnmount } from '@utils/hook'
import React, { Fragment, useState } from 'react'
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import { faChevronLeft, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { faCheckSquare, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import Footer from '@layout/Footer'




interface IProps {

}
const Fare: React.FC<IProps> = (props: IProps) => {
  useOnMount(() => { window.scrollTo({top:0, behavior:'smooth'}) })
  useOnUnmount(() => {})
  const [cnt, setCnt] = useState(0)
  const PlusBtn = () => {
    setCnt(cnt+1)
  }
  const MinusBtn = () => {
    setCnt(cnt-1)
  }
  return (
    <Fragment>
      <HeaderFixed>
        <Header></Header>
      </HeaderFixed>      
      <All></All>
      <FareAll>
        <FareContainerAll>
          <FareContainer1>
            <FareRow1>
              <FareCol1>
                <LinkLineNone to='/Reservation'>
                  <FontColorBlack>
                    <FontAwesomeIcon icon={ faChevronLeft } />&nbsp;
                    돌아가기
                  </FontColorBlack>
                </LinkLineNone>
              </FareCol1>
            </FareRow1>
          </FareContainer1>
          <FareContainer2>
            <FareRow2>
              <FareCol2 md={12}>예상 요금 계산하기</FareCol2>
              <FareCol3>
              <FareColTxt>주행 시간</FareColTxt>
              <InputGroup>
                <FormControl type='number' defaultValue={0} aria-label="Dollar amount (with dot and two decimal places)" />
                <InputGroup.Text>분</InputGroup.Text>
              </InputGroup>
              </FareCol3>
              <FareCol3>
                <FareColTxt>주행 거리</FareColTxt>
                <InputGroup>
                  <FormControl type='number' defaultValue={0} aria-label="Dollar amount (with dot and two decimal places)" />
                  <InputGroup.Text>km</InputGroup.Text>
                </InputGroup>
              </FareCol3>
            </FareRow2>

            <FareMarginTop></FareMarginTop>

            <FareRow4>
              <FareCol4F md={6}>
                <FarePlusMinusAll>
                  <FareColTxt2>반려동물 수</FareColTxt2>
                  <FarePlusMinus>
                    <FareCustomBtn onClick={ MinusBtn } variant="outline-primary">
                      <FontAwesomeIcon icon={ faMinus } />
                    </FareCustomBtn>{' '}
                    &nbsp;<FareCntNum>{ cnt }</FareCntNum>&nbsp;
                    <FareCustomBtn onClick={ PlusBtn } variant="outline-primary">
                      <FontAwesomeIcon icon={ faPlus } />
                    </FareCustomBtn>{' '} &nbsp;
                    <FareColTxt>마리</FareColTxt>
                  </FarePlusMinus>
                </FarePlusMinusAll>
              </FareCol4F>
              <FareCol4 md={6}>
                <FareCheckFlex>
                  <FareCheckAll>
                    <FareCheckbox aria-label="option 1" />
                    심야 할증 (오전 7~9시 / 오후 9시 ~11시)
                  </FareCheckAll>
                  <FareCheckAll>
                    <FareCheckbox aria-label="option 1" />
                    단독 탑승
                  </FareCheckAll>
                </FareCheckFlex>
              </FareCol4>
            </FareRow4>

            <FareMarginTop></FareMarginTop>

            <FareRow5>
              <FareCol3 md={6}>
                <FareColTxt>통행료</FareColTxt>
                <InputGroup>
                  <FormControl type='number' defaultValue={0} aria-label="Dollar amount (with dot and two decimal places)" />
                  <InputGroup.Text>원</InputGroup.Text>
                </InputGroup>
              </FareCol3>
              <FareCol3 md={6}>
                <FareColTxt>왕복/경유시 대기 시간</FareColTxt>
                <InputGroup>
                  <FormControl type='number' defaultValue={0} aria-label="Dollar amount (with dot and two decimal places)" />
                  <InputGroup.Text>분</InputGroup.Text>
                </InputGroup>
              </FareCol3>

              <FareMarginTop></FareMarginTop>

              <FareSpaceCol md={6}></FareSpaceCol>
              <FareSpaceCol md={6}></FareSpaceCol>

              <FareMarginTop></FareMarginTop>

              <FareSaveBtn>계산하기</FareSaveBtn>
            </FareRow5>
          </FareContainer2>
          <FareSaveContainer>
            <FareSaveRow>
              <FareSaveLeft md={5}>
                최종요금
              </FareSaveLeft>
              <FareSaveRight md={7}>
                8,000원
              </FareSaveRight>
            </FareSaveRow>
          </FareSaveContainer>

        </FareContainerAll>
        
        
      </FareAll>
        
      

      
      <Footer></Footer>
    </Fragment>
  )
}

export default Fare