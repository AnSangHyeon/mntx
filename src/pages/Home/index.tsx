import { getCookie, setCookie } from '@utils/index'
import { useOnMount, useOnUnmount } from '@utils/hook'
import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from '@components/Loader'
import Header from '@layout/Header'
import { AccordionAll, AccordionHead, AccordionItem, CustomBtn, CustomBtnPosition, HomeContents, HomeContentsBottomMargin, HomeContentsTopMargin, HomeLogo, HomeLogo1, HomeLogo2, HomeSection1, HomeSection2, HomeSection2All, HomeSection3, HomeSection3All, HomeSection3Contents, HomeSection3ContentsCenter, HomeSection3ContentsEnd, HomeSection3ContentsHighlight, HomeSection3ContentsHighlight2, HomeSection3ContentsImg, HomeSection3ContentsText, HomeSection3ContentsText1, HomeSection3ContentsText2, HomeSection3Img4, HomeSection3Title, HomeSection4,  HomeSection4All, HomeSection4Btn, HomeSection4BtnHighlight, HomeSection4BtnImg, HomeSection4BtnRight, HomeSection4SubTitle, HomeSection4Title, HomeSection4Txt, HomeTitle, LinkLineNone, Section2ContentsImg } from '@layout/index.style'
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
import Section4BtnImg from '../../img/section4btnimg.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion'


interface IHomeProps {

}


const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
  useOnMount(() => {})
  useOnUnmount(() => {})
  return (
    
    <Fragment>
     
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
            <LinkLineNone to='/Guide'>
              <img src={ Section2Contents1 } alt="" />
            </LinkLineNone>
          </Section2ContentsImg>
          <Section2ContentsImg>
            <LinkLineNone to='/Guide'>
              <img src={ Section2Contents2 } alt="" />
            </LinkLineNone>
          </Section2ContentsImg>
          <Section2ContentsImg>
            <LinkLineNone to='/Guide'>
              <img src={ Section2Contents3 } alt="" />
            </LinkLineNone>
          </Section2ContentsImg>
          <Section2ContentsImg>
            <LinkLineNone to='/Guide'>
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
            <Accordion defaultActiveKey="0">
              <AccordionItem eventKey='0'>
                <AccordionHead>
                  <HomeSection4BtnHighlight>Q</HomeSection4BtnHighlight>
                  <HomeSection4Txt>차량 운행시간이 어떻게 되나요?</HomeSection4Txt>
                </AccordionHead>
                <Accordion.Body>2</Accordion.Body>
              </AccordionItem>
            </Accordion>
          </AccordionAll>
          
          
        </HomeSection4>
      </HomeSection4All>
      
    </Fragment>
  )
}

export default Home