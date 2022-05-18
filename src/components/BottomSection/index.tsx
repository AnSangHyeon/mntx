import Footer from '@layout/Footer'
import Header from '@layout/Header'
import { HeaderFixed, HomeSection525px, HomeSection55px, HomeSection5All, HomeSection5Col, HomeSection5CustomBtn, HomeSection5Img, HomeSection5Row, HomeSection5SubTitle, HomeSection5Title } from '@layout/index.style'
import { useOnMount, useOnUnmount } from '@utils/hook'
import React, { Fragment } from 'react'
import Section3Contents5Img from '../../img/HomeSection5Img.png'
interface IProps {

}

const BottomSection: React.FC<IProps> = (props: IProps) => {
  useOnMount(() => {})
  useOnUnmount(() => {})
  return (
    <Fragment>
      <HomeSection5All>
        <HomeSection5Row>
          <HomeSection5Col xs={12} md={6}>
            <HomeSection5Title>멍타냥택시는</HomeSection5Title>
            <HomeSection5Title>반려동물 이동의 기준을 세웁니다.</HomeSection5Title>
            <HomeSection525px></HomeSection525px>
            <HomeSection5SubTitle>꼭 필요한 반려동물의 이동,</HomeSection5SubTitle>
            <HomeSection5SubTitle>쾌적하고 안전한 환경에서 이동할 수 있도록</HomeSection5SubTitle>
            <HomeSection5SubTitle>멍타냥 택시가 더 나은 반려동물과의 생활을 만들어갑니다.</HomeSection5SubTitle>
            <HomeSection525px></HomeSection525px>
            <HomeSection55px></HomeSection55px>
            <HomeSection5CustomBtn>지금 예약하기</HomeSection5CustomBtn>
          
          </HomeSection5Col>
          <HomeSection5Col xs={12} md={6}>
            <HomeSection5Img src={ Section3Contents5Img } alt="" />
          </HomeSection5Col>
        </HomeSection5Row>
        
      </HomeSection5All>
    </Fragment>
  )
}

export default BottomSection