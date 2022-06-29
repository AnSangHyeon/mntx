import BottomSection from '@components/BottomSection'
import Footer from '@layout/Footer'
import Header from '@layout/Header'
import { 
  ServicePoint1, 
  ServicePoint1Logo, 
  ServicePoint1Row, 
  ServicePoint1SubTitle, 
  ServicePoint1SubTxt, 
  ServicePoint1Title, 
  ServicePoint1Txt, 
  ServicePoint2, 
  ServicePoint2Col, 
  ServicePoint2Logo, 
  ServicePoint2Row, 
  ServicePoint2SubTitle,
  ServicePoint2Title,
  ServicePoint2Txt,
  ServicePoint3,
  ServicePoint3Logo,
  ServicePoint3Row,
  ServicePoint3SubTitle, 
  ServicePoint3Title, 
  ServicePoint3Txt, 
  ServicePoint3TxtAll, 
  ServicePoint4, 
  ServicePoint4Logo, 
  ServicePoint4Row, 
  ServiceRow, 
  ServiceSection1, 
  ServiceSection1All, 
  ServiceSection1Logo, 
  ServiceSection1SubTitle, 
  ServiceSection1Title, 
  ServiceSection1Txt 
} from '@layout/index.style'
import { useOnMount, useOnUnmount } from '@utils/hook'
import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import ServiceSection1Img from '../../img/servicesection1.png'
import ServicePoint1Img from '../../img/servicepoint1.png'
import ServicePoint2Img from '../../img/servicepoint2.png'
import ServicePoint3Img from '../../img/servicepoint3.png'
import ServicePoint4Img from '../../img/servicepoint4.png'
import { Link } from 'react-router-dom'

interface IProps {

}

const Service: React.FC<IProps> = (props: IProps) => {
  useOnMount(() => {})
  useOnUnmount(() => {})
  return (
    <Fragment>
      <ServiceSection1All>
        <ServiceSection1>
          <ServiceRow>
            <Col xs={12} md={6}>
              <ServiceSection1Title>반려동물이</ServiceSection1Title>
              <ServiceSection1SubTitle>더 자유로울 수 있도록</ServiceSection1SubTitle>
              <ServiceSection1Txt>멍타냥택시는 반려동물의 이동권을 보장하는</ServiceSection1Txt>
              <ServiceSection1Txt>반려동물 전용 모빌리티 플랫폼입니다.</ServiceSection1Txt>
              <ServiceSection1Txt>어떤 동물이든, 언제나 어디든 갈 수 있도록 멍타냥택시가 함께합니다.</ServiceSection1Txt>
            </Col>
            <Col xs={12} md={6}>
              <ServiceSection1Logo src={ ServiceSection1Img } alt="" />
            </Col>
          </ServiceRow>
        </ServiceSection1>
      </ServiceSection1All>
      
      <ServicePoint1>
        <ServicePoint1Row>
          <Col xs={12}>
            <ServicePoint1Title>point 01</ServicePoint1Title>
            <ServicePoint1SubTitle>정확하게 이용한 만큼만 지불하세요</ServicePoint1SubTitle>
            <ServicePoint1Txt>결제 후 5분 안에 받아보는 상세 내역!</ServicePoint1Txt>
            <ServicePoint1Txt>합리적인 요금과 투명한 요금 정책으로 새로운 펫택시를 경험하세요</ServicePoint1Txt>
            <Link to='/Fare'>
              <ServicePoint1SubTxt>예상 요금 계산하러 가기</ServicePoint1SubTxt>
            </Link>
            <ServicePoint1Logo src={ ServicePoint1Img }></ServicePoint1Logo>
          </Col>
        </ServicePoint1Row>
      </ServicePoint1>
        
      <ServicePoint2>
        <ServicePoint2Row>
          <ServicePoint2Col>
            <ServicePoint2Title>point 02</ServicePoint2Title>
            <ServicePoint2SubTitle>출발 1시간 전까지 예약 가능해요</ServicePoint2SubTitle>
            <ServicePoint2Txt>이용시간 1시간 전까지 예약이 가능한</ServicePoint2Txt>
            <ServicePoint2Txt>최적의 알고리즘 배차 시스템을 갖추고 있습니다</ServicePoint2Txt>
          </ServicePoint2Col>
          <ServicePoint2Col>
            <ServicePoint2Logo src={ ServicePoint2Img }></ServicePoint2Logo>
          </ServicePoint2Col>
        </ServicePoint2Row>
      </ServicePoint2>
      
      <ServicePoint3>
        <ServicePoint3Row>
          <Col>
          <ServicePoint3Logo>
            <img src={ ServicePoint3Img }></img>
          </ServicePoint3Logo>
           
          </Col>
          <Col>
            <ServicePoint3TxtAll>
              <ServicePoint3Title>point 03</ServicePoint3Title>
              <ServicePoint3SubTitle>교통사고<br/>더 이상 불안해 하지 마세요</ServicePoint3SubTitle>
              <ServicePoint3Txt>
                동물운송업 정식 등록 업체인<br/>
                멍타냥택시는 자동차 보험 및 책임보상제도를 통해<br/>
                안전한 이동을 보장합니다
              </ServicePoint3Txt>
            </ServicePoint3TxtAll>
          </Col>
        </ServicePoint3Row>
      </ServicePoint3>

      <ServicePoint4>
        <ServicePoint4Row>
          <Col>
            <ServicePoint2Title>point 04</ServicePoint2Title>
            <ServicePoint2SubTitle>자체 선발 드라이버<br/>안심하고 타세요</ServicePoint2SubTitle>
            <ServicePoint2Txt>
              배차 시, 드라이버 정보를 받아보세요!<br/>
              멍타냥택시의 자체 신원 검증 시스템으로<br/>
              믿을 수 있는 드라이버님이 배차 됩니다
            </ServicePoint2Txt>
          </Col>
          <Col>
            <ServicePoint4Logo>
              <img src={ ServicePoint4Img } />
            </ServicePoint4Logo>
            
          </Col>
        </ServicePoint4Row>
      </ServicePoint4>
      

      <BottomSection></BottomSection>
  
    </Fragment>
  )
}

export default Service