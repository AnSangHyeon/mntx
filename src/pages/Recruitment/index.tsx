import Header from '@layout/Header'
import { LinkLineNone, RecruitmentFixed, RecruitmentImg } from '@layout/index.style'
import { useOnMount, useOnUnmount } from '@utils/hook'
import React, { Fragment } from 'react'
import RecruitmentImg1 from '../../img/Recruitment1.jpg'
import RecruitmentImg2 from '../../img/Recruitment2.jpg'
import RecruitmentImg3 from '../../img/Recruitment3.jpg'
import RecruitmentImg4 from '../../img/Recruitment4.jpg'
import RecruitmentImg5 from '../../img/Recruitment5.jpg'
import RecruitmentFixedImg from '../../img/RecruitmentFixedImg.png'

interface IProps {

}

const Recruitment: React.FC<IProps> = (props: IProps) => {
  useOnMount(() => { window.scrollTo({top:0, behavior:'smooth'}) })
  useOnUnmount(() => {})
  return (
    <Fragment>
      <Header></Header>
      <LinkLineNone to='#'>
        <RecruitmentFixed src={ RecruitmentFixedImg } alt="멍타냥택시 드라이버 지원하기" />
      </LinkLineNone>
      
      <RecruitmentImg src={ RecruitmentImg1 }/>
      <RecruitmentImg src={ RecruitmentImg2 }/>
      <RecruitmentImg src={ RecruitmentImg3 }/>
      <RecruitmentImg src={ RecruitmentImg4 }/>
      <RecruitmentImg src={ RecruitmentImg5 }/>
    </Fragment>
  )
}

export default Recruitment