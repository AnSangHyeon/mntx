import BottomSection from '@components/BottomSection'
import Footer from '@layout/Footer'
import Header from '@layout/Header'
import { GuideStep1Logo, GuideSection1, GuideSection1SubTitle, GuideSection1Title, GuideSectionAll, GuideStep1, HeaderFixed, ServicePoint1SubTitle, ServicePoint1Title, ServicePoint1Txt, GuideStep2, GuideStep3, GuideStep4, GuideStep4Logo } from '@layout/index.style'
import { useOnMount, useOnUnmount } from '@utils/hook'
import React, { Fragment } from 'react'
import GuideSection1Img from '../../img/guidesection1.png'
import GuideStep1Img from '../../img/guidestep1.png'
import GuideStep2Img from '../../img/guidestep2.png'
import GuideStep3Img from '../../img/guidestep3.png'
import GuideStep4Img from '../../img/homesection3contents4.png'

interface IProps {

}

const Guide: React.FC<IProps> = (props: IProps) => {
  useOnMount(() => {})
  useOnUnmount(() => {})
  return (
    <Fragment>
      <HeaderFixed>
        <Header></Header>
      </HeaderFixed>

      <GuideSectionAll>
        <GuideSection1>
          <GuideSection1Title>멍타냥택시</GuideSection1Title>
          <GuideSection1SubTitle>이용 안내 가이드</GuideSection1SubTitle>
          <img src={ GuideSection1Img } alt="" />
        </GuideSection1>
      </GuideSectionAll>

      <GuideStep1>
        <ServicePoint1Title>step 01</ServicePoint1Title>
        <ServicePoint1SubTitle>멍타냥택시 예약</ServicePoint1SubTitle>
        <ServicePoint1Txt>멍타냥택시 이용 희망 시간과 추가정보를 입력해주세요.</ServicePoint1Txt>
        <GuideStep1Logo src={ GuideStep1Img } alt="" />
      </GuideStep1>

      <GuideStep2>
        <ServicePoint1Title>step 02</ServicePoint1Title>
        <ServicePoint1SubTitle>예약 문자 확인</ServicePoint1SubTitle>
        <ServicePoint1Txt>
          입력하신 번호로 전송된 예약 확정 문자를 확인해주세요.<br/>
          3분 내로 전송 됩니다.
        </ServicePoint1Txt>
        <GuideStep1Logo src={ GuideStep2Img } alt="" />
      </GuideStep2>

      <GuideStep3>
        <ServicePoint1Title>step 03</ServicePoint1Title>
        <ServicePoint1SubTitle>멍타냥택시에 탑승해 주세요.</ServicePoint1SubTitle>
        <ServicePoint1Txt>예약한 시간과 장소에서 기다리고 있습니다.</ServicePoint1Txt>
        <GuideStep1Logo src={ GuideStep3Img } alt="" />
      </GuideStep3>

      <GuideStep4>
        <ServicePoint1Title>step 04</ServicePoint1Title>
        <ServicePoint1SubTitle>목적지 도착 후, 이용 요금을 결제해 주세요.</ServicePoint1SubTitle>
        <GuideStep4Logo src={ GuideStep4Img } alt="" />
      </GuideStep4>

      <BottomSection></BottomSection>
      <Footer></Footer>
    </Fragment>
  )
}

export default Guide