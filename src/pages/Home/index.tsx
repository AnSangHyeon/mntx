import { getCookie, setCookie } from '@utils/index'
import { useOnMount, useOnUnmount } from '@utils/hook'
import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from '@components/Loader'
import Header from '@layout/Header'
import { 
  AccordionA, 
  AccordionA1, 
  AccordionA2, 
  AccordionAll, 
  AccordionBody, 
  AccordionBody1, 
  AccordionBody2, 
  AccordionHead, 
  AccordionItem, 
  AccordionTxt, 
  AccordionTxtLeft, 
  CustomBtn, 
  CustomBtnPosition, 
  HeaderFixed, 
  All, 
  HomeContents, 
  HomeContentsBottomMargin, 
  HomeContentsTopMargin, 
  HomeLogo, 
  HomeLogo1, 
  HomeLogo2, 
  HomeSection1, 
  HomeSection2, 
  HomeSection2All, 
  HomeSection3, 
  HomeSection3All, 
  HomeSection3Contents, 
  HomeSection3ContentsCenter, 
  HomeSection3ContentsEnd, 
  HomeSection3ContentsHighlight, 
  HomeSection3ContentsHighlight2, 
  HomeSection3ContentsImg, 
  HomeSection3ContentsText, 
  HomeSection3ContentsText1, 
  HomeSection3ContentsText2,
  HomeSection3Img4,
  HomeSection3Title,
  HomeSection4,
  HomeSection4All, 
  HomeSection4BtnHighlight, 
  HomeSection4Notice1, 
  HomeSection4Notice2, 
  HomeSection4Padding, 
  HomeSection4SubTitle, 
  HomeSection4Title, 
  HomeSection4Txt, 
  HomeSection4Txt1, 
  HomeSection4TxtRed, 
  HomeTitle, 
  LinkLineNone, 
  Section2ContentsImg } from '@layout/index.style'
import HomeTopImg from '../../img/home.png'
import HomeText from '../../img/hometext.png'
import Mntx from '../../img/mntx.png'
import Section2Contents1 from '../../img/homecontents1.png'
import Section2Contents2 from '../../img/homecontents2.png'
import Section2Contents3 from '../../img/homecontents3.png'
import Section2Contents4 from '../../img/homecontents4.png'
import Section3Contents1 from '../../img/homesection3contents1.png'
import Section3Contents2 from '../../img/homesection3contents2.png'
import Section3Contents3 from '../../img/homesection3contents3.png'
import Section3Contents4 from '../../img/homesection3contents4.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '@layout/Footer'
import BottomSection from '@components/BottomSection'



interface IHomeProps {

}


const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  function ScrollClick1() {
    window.scrollTo({top:567, behavior:'smooth'})
  }
  function ScrollClick2() {
    window.scrollTo({top:1374, behavior:'smooth'})
  }

  function ScrollClick3() {
    window.scrollTo({top:1771, behavior:'smooth'})
  }

  function ScrollClick4() {
    window.scrollTo({top:2316, behavior:'smooth'})
  }


  useOnMount(() => { window.scrollTo({top:0, behavior:'smooth'}) })
  useOnUnmount(() => {})
  return (
    
    <Fragment>
      <HeaderFixed>
        <Header></Header>
      </HeaderFixed>
      <All></All>
      <HomeSection1>
        <HomeLogo>
          <img src={ HomeTopImg } alt="" />
        </HomeLogo>
        <HomeLogo1>
          <img src={ HomeText } alt="" />
        </HomeLogo1>
        <HomeLogo2>
          <img src={ Mntx } alt="" />
        </HomeLogo2>
        <CustomBtnPosition>
          <LinkLineNone to='/Reservation'>
            <CustomBtn>예약하기</CustomBtn>
          </LinkLineNone>
          
        </CustomBtnPosition>  
      </HomeSection1>

      <HomeSection2All>
        <HomeSection2>
          <HomeTitle>이제 편하게 반려동물과 함께</HomeTitle>
          <HomeTitle>이동하세요!</HomeTitle>
          <HomeContentsTopMargin></HomeContentsTopMargin>
          <HomeContents>멍타냥택시는 반려동물과의 이동이 필요할 때</HomeContents>
          <HomeContents>집 앞에서부터 원하는 목적지까지 안전하고 편안한 이동을 선사합니다.</HomeContents>
          <HomeContentsBottomMargin></HomeContentsBottomMargin>
          <Section2ContentsImg>
            <LinkLineNone onClick={ScrollClick1} to='/Service'>
              <img src={ Section2Contents1 } alt="" />
            </LinkLineNone>
          </Section2ContentsImg>
          <Section2ContentsImg>
            <LinkLineNone onClick={ScrollClick2} to='/Service'>
              <img src={ Section2Contents2 } alt="" />
            </LinkLineNone>
          </Section2ContentsImg>
          <Section2ContentsImg>
            <LinkLineNone onClick={ScrollClick3} to='/Service'>
              <img src={ Section2Contents3 } alt="" />
            </LinkLineNone>
          </Section2ContentsImg>
          <Section2ContentsImg>
            <LinkLineNone onClick={ScrollClick4} to='/Service'>
              <img src={ Section2Contents4 } alt="" />
            </LinkLineNone>
          </Section2ContentsImg>
        </HomeSection2>
      </HomeSection2All>

      <HomeSection3All>
        <HomeSection3>
          <HomeSection3Title>멍타냥택시 이용 가이드</HomeSection3Title>
          <HomeSection3Contents>
            <HomeSection3ContentsText>
              <HomeSection3ContentsText1>
                <HomeSection3ContentsHighlight>STEP 01</HomeSection3ContentsHighlight>
                <HomeSection3ContentsHighlight2>예약 정보를 입력해주세요.</HomeSection3ContentsHighlight2>
              </HomeSection3ContentsText1>
            </HomeSection3ContentsText>
            <HomeSection3ContentsImg>
              <HomeSection3ContentsEnd>
                <img src={ Section3Contents1 } alt="" />
              </HomeSection3ContentsEnd>
            </HomeSection3ContentsImg>
          </HomeSection3Contents>
          <HomeSection3Contents>
            <HomeSection3ContentsText>
              <HomeSection3ContentsText1>
                <HomeSection3ContentsHighlight>STEP 02</HomeSection3ContentsHighlight>
                <HomeSection3ContentsHighlight2>전송된 예약 문자를 확인해주세요.</HomeSection3ContentsHighlight2>
              </HomeSection3ContentsText1>
            </HomeSection3ContentsText>
            <HomeSection3ContentsImg>
              <HomeSection3ContentsCenter>
                <img src={ Section3Contents2 } alt="" />  
              </HomeSection3ContentsCenter>
            </HomeSection3ContentsImg>
          </HomeSection3Contents>
          <HomeSection3Contents>
            <HomeSection3ContentsText>
              <HomeSection3ContentsText2>
                <HomeSection3ContentsHighlight>STEP 03</HomeSection3ContentsHighlight>
                <HomeSection3ContentsHighlight2>예약된 시간과 장소에서</HomeSection3ContentsHighlight2>
                <HomeSection3ContentsHighlight2>멍타냥 택시를 탑승해주세요.</HomeSection3ContentsHighlight2>
              </HomeSection3ContentsText2>
            </HomeSection3ContentsText>
            <HomeSection3ContentsImg>
              <HomeSection3ContentsCenter>
                <img src={ Section3Contents3 } alt="" />
              </HomeSection3ContentsCenter>
            </HomeSection3ContentsImg>
          </HomeSection3Contents>
          <HomeSection3Contents>
            <HomeSection3ContentsText>
              <HomeSection3ContentsText2>
                <HomeSection3ContentsHighlight>STEP 04</HomeSection3ContentsHighlight>
                <HomeSection3ContentsHighlight2>목적지 도착 후,</HomeSection3ContentsHighlight2>
                <HomeSection3ContentsHighlight2>이용 요금을 결제해 주세요.</HomeSection3ContentsHighlight2>
              </HomeSection3ContentsText2>
            </HomeSection3ContentsText>
            <HomeSection3ContentsImg>
              <HomeSection3ContentsEnd>
                <HomeSection3Img4 src={ Section3Contents4 } alt="" />
              </HomeSection3ContentsEnd>
            </HomeSection3ContentsImg>
          </HomeSection3Contents>
        </HomeSection3>
      </HomeSection3All>

      <HomeSection4All>
        <HomeSection4>
          <HomeSection4Title>FAQ</HomeSection4Title>
          <HomeSection4SubTitle>자주 묻는 질문 내용을 확인하세요.</HomeSection4SubTitle>
          
          <AccordionAll>
            <Accordion>
              <AccordionItem eventKey='0'>
                <AccordionHead>
                  <AccordionTxt>
                    <HomeSection4BtnHighlight>Q</HomeSection4BtnHighlight>
                    <HomeSection4Txt>배차가 빠르게 이루어지나요?</HomeSection4Txt>
                  </AccordionTxt>
                </AccordionHead>
                <AccordionBody>
                  <AccordionTxt>
                    <AccordionTxtLeft>
                      <AccordionA>A</AccordionA>
                      <HomeSection4Txt>배차가 빠르게 이루어지고 출발 1시간 전까지 예약이 가능합니다.</HomeSection4Txt>
                    </AccordionTxtLeft>
                    </AccordionTxt>
                </AccordionBody>
              </AccordionItem>
              <HomeSection4Padding></HomeSection4Padding>
              <AccordionItem eventKey='1'>
                <AccordionHead>
                  <AccordionTxt>
                    <HomeSection4BtnHighlight>Q</HomeSection4BtnHighlight>
                    <HomeSection4Txt>예약 확인 문자가 안와요.</HomeSection4Txt>
                  </AccordionTxt>
                </AccordionHead>
                <AccordionBody1>
                  <AccordionTxt>
                    <AccordionA1>A</AccordionA1>
                    <HomeSection4Txt1>
                      고객센터 운영시간 외 예약을 완료하셨다면,
                      예약확인 문자는 다음 고객센터 운영시간에 전송됩니다.
                    </HomeSection4Txt1> 
                    <HomeSection4Notice1>
                      * 고객센터 운영시간 (평일 오전 10시 ~ 오후 6시)
                    </HomeSection4Notice1>
                  </AccordionTxt>
                </AccordionBody1>
              </AccordionItem>
              <HomeSection4Padding></HomeSection4Padding>
              <AccordionItem eventKey='2'>
                <AccordionHead>
                  <AccordionTxt>
                    <HomeSection4BtnHighlight>Q</HomeSection4BtnHighlight>
                    <HomeSection4Txt>예약[확인 / 변경 / 취소]는 어떻게 하나요?</HomeSection4Txt>
                  </AccordionTxt>
                </AccordionHead>
                <AccordionBody1>
                  <AccordionTxt>
                    <AccordionA1>A</AccordionA1>
                    <HomeSection4Txt1>
                    예약[확인 / 변경 / 취소]는 우측 하단에 위치한 
                    '실시간 문의하기' 버튼을 통해 최대한 빠르게 도와드리고 있습니다.
                    </HomeSection4Txt1> 
                    <HomeSection4Notice2>
                      예약[변경 / 취소]는 출발 1시간 전까지 
                      가능한 점 양해 부탁드리겠습니다.
                    </HomeSection4Notice2>
                  </AccordionTxt>
                </AccordionBody1>
              </AccordionItem>
              <HomeSection4Padding></HomeSection4Padding>
              <AccordionItem eventKey='3'>
                <AccordionHead>
                  <AccordionTxt>
                    <HomeSection4BtnHighlight>Q</HomeSection4BtnHighlight>
                    <HomeSection4Txt>차량 운전시간이 어떻게 되나요?</HomeSection4Txt>
                  </AccordionTxt>
                </AccordionHead>
                <AccordionBody2>
                  <AccordionTxt>
                    <AccordionA2>A</AccordionA2>
                    <HomeSection4Txt1>운행시간은 [오전 7시 ~ 오후 11시] 까지입니다.</HomeSection4Txt1> 
                    <HomeSection4Notice2>[오후 7시 ~ 오후 11시], [오전 7시 ~ 오후 12시]사이</HomeSection4Notice2>
                    <HomeSection4Txt>이용을 희망하시는 고객분들께서는 오후 6시 전에 예약을 완료해주셔야합니다.</HomeSection4Txt>
                    <HomeSection4Notice1>* 할증요금 시간</HomeSection4Notice1>
                    <HomeSection4TxtRed>
                      [오전 7시~오전 9시], [오후 9시 ~ 오후 11시]
                    </HomeSection4TxtRed>
                  </AccordionTxt>
                </AccordionBody2>
              </AccordionItem>
            </Accordion>
          </AccordionAll>
        </HomeSection4>
      </HomeSection4All>
      
      <BottomSection></BottomSection>
      <Footer></Footer>
    </Fragment>
    
  )
}

export default Home