import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Accordion, Button, Col, Container, Form, Modal, Row } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import styled from "styled-components"


export const CustomWrapper = styled.header`
  width: 100%;
  height: 80px;
`
export const HeaderFixed = styled.div` 
  width: 100%;
  position: fixed;
  z-index: 1;
  background: #fff;
`
export const HeaderLeft = styled.div`
  float:left;
`
export const ReservationHeader = styled.div` 
  background: #2a4a9e;
  width: 100%;
  
`
export const LinkLineNone = styled(NavLink)`
  text-decoration: none;
  color: #000;
  
`
export const HeaderRight = styled.div`
  float:right;
`
export const HeaderIogo = styled.div`
  padding:14px 10px;
  width:128px;
  height: 79px;
  display:inline-block;
  
`
export const MainMenu = styled.div`
  position: relative;
  top: 0;
  font-size:1.3rem;
  font-weight: 600;
  display:inline-flex;
  width: 150px;
  height: 80px;
  padding:0px 20px;
  align-items:center;
  justify-content: center;
 
`
export const HeaderLogin = styled.div`
  font-size:1.3rem;
  font-weight: 600;
  display:inline-flex;
  width: 97.42px;
  height: 80px;
  padding:0px 20px;
  align-items:center;
  justify-content: center;
`
export const HeaderSign = styled.div`
  font-size:1.3rem;
  font-weight: 600;
  display:inline-flex;
  width: 116.55px;
  height: 80px;
  padding:0px 20px;
  align-items:center;
  justify-content: center;
`
export const All = styled.div` 
  padding: 80px 0 0 0;
  height: 80px;
`
export const HomeSection1 = styled.div`
  background: #feefd4;  
  padding: 95px 0px 150px 0px;
`
export const HomeLogo = styled.div`
  
  padding: 0px 0px 30px 0px;
`
export const HomeLogo1 = styled.div`
  margin: 0 auto;
  padding: 0px 0px 35px 0px;
`
export const HomeLogo2 = styled.div`
  margin: 0 auto;
`
export const CustomBtn = styled.div`
  display: flex;
  margin: 0 auto;
  border-radius: 50px;
  justify-content: center;
  flex-direction: column;
  width: 350px;
  height: 80px;
  background: #f49d2c;
  font-size: 1.5rem;
  color: #fff;
`
export const CustomBtnPosition = styled.div`
  position: relative;
  top: -30px;
`
export const HomeSection2All = styled.div`
  background: #2a4a9e;
  padding: 135px 0px 115px 0px;
`
export const HomeSection2 = styled.div`
  width: 1490.78px;
  height: 745.78px;
  margin: 0 auto;
`
export const HomeTitle = styled.div`
  color: #fff;
  font-size: 3rem;
  font-weight: 600;
  height:72px;
`
export const HomeContentsTopMargin = styled.div`
  margin: 25px 0px 0px;
`
export const HomeContentsBottomMargin = styled.div`
  padding: 0px 0px 60px;
`
export const HomeContents = styled.div`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 300;
`
export const Section2ContentsImg = styled.div`
  padding: 20px;
  display: inline-block;
`
export const HomeSection3All = styled.div`
  height: 1482px;
`
export const HomeSection3 = styled.div`
  height: 1212px;
  padding: 135px 0px;
`
export const HomeSection3Title = styled.div`
  color: #2a4a9e;
  font-size: 3rem;
  font-weight: 600;
  margin: 0px 0px 60px;
`
export const HomeSection3Contents = styled.div`
  width: 900px;
  height: 250px;
  background: #eef1f7;
  margin 20px 501.5px;
`
export const HomeSection3ContentsImg = styled.div`
  display: inline-block;  
  width: 50%;
  height: 250px;
  float: right;
  padding: 0px 12px;
`
export const HomeSection3ContentsText = styled.div`
  display: inline-block;  
  width: 50%;
  height: 250px;
  float: left;
`
export const HomeSection3ContentsText1 = styled.div`
  padding: 88.7969px 12px 88.7969px 50px;
  height: 250px;
`
export const HomeSection3ContentsText2 = styled.div`
  padding: 71.9844px 12px 71.9844px 50px;
  height: 250px;
`
export const HomeSection3ContentsHighlight = styled.div`
  color: #2a4a9e;
  font-weight: 600;
  font-size: 1.2rem;
  margin: 0px 0px 10px;
  text-align: left;
`
export const HomeSection3ContentsHighlight2 = styled.div`
  font-size: 1.4rem;
  text-align: left;
  color: #212529;
`
export const HomeSection3ContentsCenter = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const HomeSection3ContentsEnd = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`
export const HomeSection3Img4 = styled.img`
  width: 200px;
  height: 186.7px;
`
export const HomeSection4All = styled.div`
  height: 820.58px;
  background: #eef1f7;
`
export const HomeSection4 = styled.div`
  height: 590.58px;
  padding: 115px 0px;
`
export const HomeSection4Title = styled.div`
  color: #2a4a9e;
  font-size: 3rem;
  font-weight: 600;
  padding: 0 0 25px;
`
export const HomeSection4SubTitle = styled.div`
  font-size: 1.6rem;
  color: #474855;
  font-weight: 400;
  padding: 0 0 60px;
`
export const HomeSection4Btn = styled.button`
  width: 900px;
  height: 78.8px;
  padding: 25px;
  background: #fff;
  font-size: 1.5rem;
  color: #212529;
  text-align: left;
  border: none;
  display: flex;
  align-items: center;
  margin: 0 auto;
`
export const HomeSection4BtnHighlight = styled.div`
  color: #2a4a9e;
  padding: 0 20px 0 0;
  font-weight: 600;
  font-size: 1.5rem;
  display: inline-block;
`
export const HomeSection4Txt = styled.span`
  color: #212529;
  font-size: 1.5rem;
  
`
export const HomeSection4BtnImg = styled.img`
  width: 20px;
  height: 20px;  
`
export const HomeSection4BtnRight = styled.div`
  
`
export const AccordionItem = styled(Accordion.Item)`
  width: 900px;
  margin: 0 auto;
`
export const AccordionHead = styled(Accordion.Header)`
  width: 900px;
  
`
export const AccordionAll = styled.div`
  height: 375.19px;
`
export const AccordionTxt = styled.div`
  width: 844.61px;
  padding: 9px 5px;
  
`
export const AccordionA = styled.div`
  font-weight: 600;
  padding: 0 20px 0 0;
  font-size: 1.5rem;
  display: inline-block;
`
export const AccordionBody = styled(Accordion.Body)`
  width: 900px;
  height: 86px;
`
export const AccordionTxt1 = styled.div`
  width: 900px;
  padding: 9px 5px;
`
export const AccordionTxtLeft = styled.div`
  float: left;
`
export const AccordionBody1 = styled(Accordion.Body)`
  width: 900px;
  height: 182px;
 
`
export const AccordionA1 = styled.div`
  font-weight: 600;
  padding: 0 20px 0 0;
  font-size: 1.5rem;
  height: 132px;
  float: left;
`
export const HomeSection4Txt1 = styled.div`
  color: #212529;
  font-size: 1.5rem;
  text-align: left;
`
export const HomeSection4Notice1 = styled.div`
  color: #f41750;
  padding: 24px 0 0 0;
  display: block;
  text-align: left;
  font-size: 1.5rem;
`
export const HomeSection4Notice2 = styled.div`
  color: #1b1d40;
  padding: 24px 0 0 0;
  display: block;
  text-align: left;
  font-size: 1.5rem;
`
export const AccordionBody2 = styled(Accordion.Body)`
  width: 900px;
  height: 278px;
 
`
export const AccordionA2 = styled.div`
  font-weight: 600;
  padding: 0 20px 0 0;
  font-size: 1.5rem;
  height: 228px;
  float: left;
`
export const HomeSection4TxtRed = styled.span`
  color: #f41750;
  font-size: 1.5rem;
  display: block;
  text-align: left;
`
export const HomeSection4Padding = styled.div`
  padding: 0 0 20px 0;
`
export const HomeSection5All = styled.div`
  height: 547.97px;
  background: #eaeae8;
  padding: 80px 0 0 0;
`
export const HomeSection5Col = styled(Col)`
  width: 50%;
  height: 467.97px;
  
`
export const HomeSection5Row = styled(Row)`
  width: 1536px;
  margin: 0 auto;
`
export const HomeSection5Title = styled.div`
  color: #1b1d40;
  font-size: 2rem;
  text-align: left;
  font: weight: 600;
`
export const HomeSection525px = styled.div`
  padding: 0 0 25px 0;
`
export const HomeSection5SubTitle = styled.div`
  color: #1b1d40;
  font-size: 1.5rem;
  text-align: left;
  font: weight: 300;
`
export const HomeSection5CustomBtn = styled.div`
  background: #f49d2c;
  color: #fff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  flex-direction: column;
  width: 350px;
  height: 60px;
`
export const HomeSection55px = styled.div`
  padding: 0 0 5px 0;
`
export const HomeSection5Img = styled.img`
  width: 100%;
  height: 100%;
`
export const FooterAll = styled.div`
  width: 100%;
  font-size: 1rem;
  background: #222837;
  color: #afb3bd;
`
export const FooterInfo = styled.div`
  padding: 60px 183.5px;
`
export const FooterLogo = styled.img` 
  display: flex;
  padding: 0 0 30px 0;
`
export const FooterMainTxt = styled.div` 
  color: #afb3bd;
  font-size: 1rem;
  text-align: left;
`
export const Top30pxPadding = styled.div`
  padding: 30px 0 0 0;
`
export const FooterBtn = styled(Button)`
  height: 40px;
  width: 90.89px;
`
export const FooterBtn2 = styled(Button)`
  height: 40px;
  width: 179.2px;
`
export const FooterBtnAll = styled.div` 
  height: 64px;
  width: 100%;
  display: inline-flex;
  align-items: end;
  justify-content: start;
`
export const FooterTitle = styled.div`
  color: #dbdee6;
  font-weight: 600;
  font-size: 1.1rem;
  text-align: right;
`
export const FooterSubTitle = styled.div`
  color: #dbdee6;
  font-size: 1rem;
  text-align: right;
`
export const FooterBtn3 = styled.div` 
  width: 200px;
  height: 45px;
  margin: 20px 0 0 0;
  border-radius: 30px;
  float: right;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffde00;
  color: #000;
`
export const RecruitmentImg = styled.img` 
  width: 100%;
`
export const RecruitmentFixed = styled.img` 
  position: fixed;
  bottom: 35px;
  left: 0;
  right: 0;
  width: 934px;
  margin: 0 auto;
`
export const ServiceSection1 = styled.div` 
  padding: 100px 0;
  background: #2a4a9e;
`
export const ServiceSection1All = styled.div` 
  padding: 80px 0 0 0;
`
export const ServiceRow = styled(Row)` 
  width: 1536px;
  margin: 0 auto;
`
export const ServiceSection1Logo = styled.img` 
  width: 523px;
`
export const ServiceSection1Title = styled.div` 
  color: #fff;
  font-size: 3rem;
  font-weight: 600;
  text-align: left;
`
export const ServiceSection1SubTitle = styled.div` 
  color: #f49d2c;
  font-size: 3rem;
  font-weight: 600;
  text-align: left;
  margin: 0 0 25px 0;
`
export const ServiceSection1Txt = styled.div` 
  font-size: 1.6rem;
  color: #fff;
  font-weight: 300;
  text-align: left;
`
export const ServicePoint1 = styled.div`
  height: 807.22px;
  padding: 100px 0;
`
export const ServicePoint1Row = styled(Row)` 
  width: 1200px;
  height: 607.22px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`
export const ServicePoint1Title = styled.div` 
  font-size: 1.2rem;
  font-weight: 600;
  color: #2a4a9e;
  padding: 0 0 16px;
`
export const ServicePoint2Title = styled.div` 
  font-size: 1.2rem;
  font-weight: 600;
  color: #2a4a9e;
  padding: 0 0 16px;
  text-align: left;
`
export const ServicePoint3Title = styled.div` 
  font-size: 1.2rem;
  font-weight: 600;
  color: #2a4a9e;
  padding: 0 0 16px;
  text-align: right;
`
export const ServicePoint1SubTitle = styled.div` 
  font-size: 2.4rem;
  font-weight: 600;
  color: #2a4a9e;
  padding: 0 0 24px;
`
export const ServicePoint2SubTitle = styled.div` 
  font-size: 2.4rem;
  font-weight: 600;
  color: #2a4a9e;
  padding: 0 0 24px;
  text-align: left;
`
export const ServicePoint3SubTitle = styled.div` 
  font-size: 2.4rem;
  font-weight: 600;
  color: #2a4a9e;
  padding: 0 0 24px;
  text-align: right;
`
export const ServicePoint1Txt = styled.div` 
  font-size: 1.4rem;
  font-weight: 400;
  color: #1b1d40;
`
export const ServicePoint2Txt = styled.div` 
  font-size: 1.4rem;
  font-weight: 400;
  color: #1b1d40;
  text-align: left;
`
export const ServicePoint3Txt = styled.div` 
  font-size: 1.4rem;
  font-weight: 400;
  color: #1b1d40;
  text-align: right;
`
export const ServicePoint1SubTxt = styled.div` 
  text-decoration: underline;
  color: #000;
  font-size: 1.2rem;
  font-weight: 600;
  height: 57.59px;
  display: flex;
  align-items: end;
  justify-content: center;
`
export const ServicePoint1Logo = styled.img` 
  padding: 80px 0 0 0;
`
export const ServicePoint2 = styled.div` 
  height: 397px;
  padding: 100px 0;
  background: #eef1f7;
`
export const ServicePoint2Row = styled(Row)` 
  width: 1200px;
  margin: 0 auto;
`
export const ServicePoint2Col = styled(Col)` 
  height: 193.63px;
`
export const ServicePoint2Logo = styled.img` 
  float: right;
`
export const ServicePoint3 = styled.div` 
  height: 544.84px;
  padding: 100px 0;
`
export const ServicePoint3Row = styled(Row)` 
  width: 1200px;
  height: 344.84px;
  margin: 0 auto;
`
export const ServicePoint3Logo = styled.div` 
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100%;
`
export const ServicePoint3TxtAll = styled.div` 
  margin: 0 0 60px 0;
`
export const ServicePoint4 = styled.div` 
  height: 484.84px;
  background: #eef1f7;
  padding: 100px 0;
`
export const ServicePoint4Row = styled(Row)` 
  height: 284.84px;
  width: 1200px;
  margin: 0 auto;
`
export const ServicePoint4Logo = styled.div` 
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
`
export const GuideSection1 = styled.div` 
  height: 497px;
  background: #2a4a9e;
  padding: 100px 0 0 0;
`
export const GuideSectionAll = styled.div` 
  padding: 80px 0 0 0;
`
export const GuideSection1Title = styled.div` 
  color: #fff;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
`
export const GuideSection1SubTitle = styled.div` 
  color: #f49d2c;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  margin: 0 0 25px 0;
`
export const GuideStep1 = styled.div` 
  height: 670.02px;
  padding: 100px 0 0 0;
`
export const GuideStep1Logo = styled.img` 
  margin: 80px 0 0 0;
`
export const GuideStep2 = styled.div` 
  background: #eef1f7;
  height: 668.63px;
  padding: 100px 0 0 0;
`
export const GuideStep3 = styled.div` 
  height: 696.02px;
  padding: 100px 0 0 0;
`
export const GuideStep4 = styled.div` 
  height: 512.05px;
  padding: 100px 0 0 0;
  background: #eef1f7;
`
export const GuideStep4Logo = styled.img` 
  width: 246px;
  height: 229.64px;
  margin: 56px 0 0 0;
`
export const ReservationAll = styled.div` 
  height: 411.33px;
  width: 60%;
  margin: 0 auto;
  padding: 80px 0 0 0;
  
`
export const ReservationTitle = styled.div` 
  font-size: 36px;
  color: #2a4a9e;
  font-weight: 800;
  margin: 0 0 0 30px;
  width: 308.17px;
  height: 124.58px;
  
`
export const ReservationLogo = styled.img` 
  width: 112.69px;
  height: 124.58px;
  float: left;
`
export const ReservationLogoSize = styled.div`
  width: 161px;
  height: 124.58px;
` 
export const ReservationNmember = styled.div` 
  height: 206.75px;
  padding: 30px 0 50px 0;
  border-top: 2px solid #2a4a9e;
  font-size: 1.3rem;
  text-align: center;
`
export const ReservationBetween = styled.div` 
  height: 124.58px;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
`
export const ReservationCustomBtn = styled.div` 
  background: rgb(42, 74, 158);
  color: #fff;
  padding: 15px 45px;
  font-size: 16px;
  border-radius: 25px;
  width: 296.58px;
  height: 54px;
  margin: 0 auto;
`
export const FareCustomBtn = styled(Button)` 
  width: 28.58px;
  height: 30px;
  padding: 0 7px;
  border-radius: 100%;
  display: inline-block;
`
export const FareCntNum = styled.div` 
  margin: 0 8px 8px 8px;
  width: 8.89px;
  height: 24px;

`
export const FareLeftIcon = styled(FontAwesomeIcon)` 
  width: 11.44px;
  height: 16px;
`
export const FareAll = styled.div` 
  height: 781px;
`
export const FareContainerAll = styled(Container)` 
  height: 681px;
  width: 100%;
`
export const FareContainer1 = styled(Container)` 
  padding: 0 20px 10px 20px;
  margin: 0 auto;
`
export const FareCol1 = styled(Col)` 
  margin: 50px 0 0 0; 
`

export const FareRow1 = styled(Row)` 
  width: 752px;
  margin: 0 auto;
`
export const FontColorBlack = styled.div` 
  color: black;
  float: left;
`
export const FareContainer2 = styled(Container)` 
  height: 535px;
  margin: 30px 0 0 0;
  padding: 20px;
`
export const FareRow2 = styled(Row)` 
  width: 752px;
  margin: 0 auto;
  height: 169px;
`
export const FareCol2 = styled(Col)` 
  margin: 15px 0 30px 0;
  height: 54px;
  color: #2a4a9e;
  font-weight: 700;
  font-size: 36px;
  text-align: left;
`
export const FareCol3 = styled(Col)` 
  height: 70px;
`
export const FareColTxt = styled.div` 
  margin: 0 0 0.5rem 0;
  text-align: left;
  height: 24px;
  display: block
`
export const FareColTxt2 = styled.div` 
  margin: 0 0 0.5rem 0;
  text-align: left;
  height: 24px;
  width: 352px;
`
export const FareCol4F = styled(Col)` 
  height: 100%;
  display: flex;
`
export const FareCol4 = styled(Col)` 
  height: 100%;
  width: 50%;
  display: inline-flex;
  align-items: end;
`
export const FareRow4 = styled(Row)` 
  width: 752px;
  margin: 0 auto;
  height: 78px;
`
export const FareMarginTop = styled.div` 
  margin: 1rem 0 0 0;
`
export const FareCheckbox = styled(Form.Check)` 
  padding: 0 8px 0 0;
  display: inline-block;
`
export const FareCheckAll = styled.div` 
  width: 100%;
  
  
  text-align: left;
  
`
export const FareCheckFlex = styled.div``

export const FareRow5 = styled(Row)` 
  width: 752px;
  height: 70px;
  margin: 0 auto;
`
export const FarePlusMinusAll = styled.div` 
  width: 100%;
  height: 100%
`
export const FarePlusMinus = styled.div` 
  width: 100%;
  height: 100%;
  display: flex;
`
export const FareSpaceCol = styled(Col)` 
  height: 70px;
`
export const FareSaveBtn = styled.div` 
  width: 100%
  padding: 10px;
  border-radius: 45px;
  background: #f49d2c;
  color: #fff;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const FareSaveRow = styled(Row)` 
  width: 768px;
  height: 82px;
  background: #f1f1f1;
  padding: 20px;
`
export const FareSaveContainer = styled(Container)` 
  // display: flex;
  // justify-content: center;
  // align-items: start;
  width: 100%;
  margin: 0 0 50px 0;
  display: flex;
  align-items: start;
  justify-content: center;
`
export const FareSaveLeft = styled(Col)` 
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
`
export const FareSaveRight = styled(Col)` 
  text-align: right;
  font-weight: 700;
  font-size: 1.75rem;
`
export const FooterModalTitle = styled(Modal.Title)` 
  font-weight: 500;
  font-size: 20px;
`
export const FooterModalTxt = styled.div` 
  padding: 10px;
  font-size: 16px;
  height: 200px;
  width: 100%;
  border: 1px solid #d7d7d7;
  text-align: left;
  overflow:scroll; 
`
export const FooterModalAll = styled(Modal.Dialog)` 
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%,0);
  margin: 1.75rem auto;
  z-index: 2;
  overflow-x: hidden;
  overflow-y: auto;
  display: none;
  background: rgba(0, 0, 0, 0.6);
`
