import BottomSection from '@components/BottomSection'
import Footer from '@layout/Footer'
import Header from '@layout/Header'
import { GuideSection1, GuideSection1SubTitle, GuideSection1Title, GuideSectionAll, HeaderFixed } from '@layout/index.style'
import { useOnMount, useOnUnmount } from '@utils/hook'
import React, { Fragment } from 'react'

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
        </GuideSection1>
      </GuideSectionAll>


      <BottomSection></BottomSection>
      <Footer></Footer>
    </Fragment>
  )
}

export default Guide