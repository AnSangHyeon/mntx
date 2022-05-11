import { Accordion } from "react-bootstrap"
import { Link } from "react-router-dom"
import styled from "styled-components"


export const CustomWrapper = styled.header`
  width: 100%;
  height: 80px;
  background: #fff;
  position: fixed;
  z-index:100;
`
export const HeaderLeft = styled.div`
  float:left;
  height: 100%;
`
export const HeaderRight = styled.div`
  float:right;
`
export const HeaderIogo = styled.div`
  padding:14px 10px;
  width:128px;
  height: 79px;
  display:inline-block

`
export const MainMenu = styled.div`
  position: relative;
  top: 0;
  font-size:1.3rem;
  font-weight: 600;
  display:inline-flex;
  color: #000;
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
  color: #000;
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
  color: #000;
  width: 116.55px;
  height: 80px;
  padding:0px 20px;
  align-items:center;
  justify-content: center;
`
export const HomeSection1 = styled.div`
  background: #feefd4;  
  padding: 175px 0px 150px 0px;
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
  height: 1098.58px;
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
export const LinkLineNone = styled(Link)`
  text-decoration: none;
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