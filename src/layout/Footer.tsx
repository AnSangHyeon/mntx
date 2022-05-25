import React, { Fragment } from 'react'
import { useOnMount, useOnUnmount } from '@utils/hook'
import { FooterAll, FooterBtn, FooterBtn2, FooterBtn3, FooterBtnAll, FooterInfo, FooterLogo, FooterMainTxt, FooterSubTitle, FooterTitle, Top30pxPadding } from './index.style'
import FooterImg from '../../src/img/footerlogo.png'
import { Button, Col, Row } from 'react-bootstrap'

interface IFooterProps {

}

const Footer: React.FC<IFooterProps> = (props: IFooterProps) => {

  useOnMount(() => {

  })

  useOnUnmount(() => {

  })

  return (
    <Fragment>

      <FooterAll>
        <FooterInfo>
          <FooterLogo src={ FooterImg } alt="" />
          <Row>
            <Col md={6}>
              
              <FooterMainTxt>회사명 ｜ 주식회사 뉴플러스기획 &nbsp;&nbsp;&nbsp; 사업자등록번호 ｜ 864-81-01703 &nbsp;&nbsp;&nbsp; 대표자 ｜ 임세란</FooterMainTxt>
              <FooterMainTxt>주소 | 서울특별시 강남구 강남대로 156길 18, 3층</FooterMainTxt>
              <FooterMainTxt>동물운송업 등록번호 ｜ 3220000-037-2022-0016</FooterMainTxt>
              <FooterMainTxt>전화번호 | 010-3898-0114 (운영시간 평일 오전 10시 ~ 오후 6시)</FooterMainTxt>
              <Top30pxPadding></Top30pxPadding>
              <FooterMainTxt>© 2021 주식회사 뉴플러스기획</FooterMainTxt>
              <FooterBtnAll>
                <FooterBtn variant="primary">이용약관</FooterBtn>{' '}
                &nbsp;
                <FooterBtn2 variant="primary">개인정보처리방침안내</FooterBtn2>{' '}
              </FooterBtnAll>
              
            </Col>
            <Col md={6}>
              <FooterTitle>반려동물과 이동이 필요하신가요?</FooterTitle>
              <FooterSubTitle>아래로 문의주시면 친절히 답변해드리겠습니다.</FooterSubTitle>
              <FooterBtn3>실시간 문의</FooterBtn3>
            </Col>
          </Row>
          
        </FooterInfo>
      </FooterAll>
    </Fragment>
  )
}

export default Footer