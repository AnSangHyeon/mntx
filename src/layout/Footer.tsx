import React, { Fragment, useState } from 'react'
import { useOnMount, useOnUnmount } from '@utils/hook'
import { BodyModal, FooterAll, FooterBtn, FooterBtn2, FooterBtn3, FooterBtnAll, FooterInfo, FooterLogo, FooterMainTxt, FooterModal, FooterModalAll, FooterModalTitle, FooterModalTxt, FooterSubTitle, FooterTitle, ModalFooter, Top30pxPadding } from './index.style'
import FooterImg from '../../src/img/footerlogo.png'
import { Button, Col, Modal, Row } from 'react-bootstrap'

interface IFooterProps {

}

const Footer: React.FC<IFooterProps> = (props: IFooterProps) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [left, setLeft] = useState(false)
  const handleCloset = () => setLeft(false)
  const handleShowt = () => setLeft(true)


  useOnMount(() => {})
  useOnUnmount(() => {})
  return (
    <Fragment>
      <FooterModalAll>
        <Modal show={left} onHide={handleCloset}>
          <Modal.Header closeButton>
            <FooterModalTitle>이용약관</FooterModalTitle>
          </Modal.Header>
          <BodyModal>
            <FooterModalTxt>{`제 1 장 총칙

제 1 조 (목적)
본 약관은 주식회사 뉴플러스기획이 운영하는 웹 사이트 (https://mntx.co.kr)의 제반 서비스의 이용조건 및 절차에 관한 사항 및 기타 필요한 사항을 규정함을 목적으로 한다.

제 2 조 (용어의 정의)
본 약관에서 사용하는 용어는 다음과 같이 정의한다.
①회원 : 기본 회원 정보를 입력하였고, 회사와 서비스 이용계약을 체결하여 아이디를 부여받은 개인
②아이디(ID) : 회원식별과 회원의 서비스 이용을 위해 회원이 선정하고 회사가 승인하는 문자와 숫자의 조합
③비밀번호(Password) : 회원이 통신상의 자신의 비밀을 보호하기 위해 선정한 문자와 숫자의 조합
④해지 : 회사 또는 회원에 의한 이용계약의 종료

제 3 조 (약관의 공시 및 효력과 변경)
①본 약관은 회원가입 화면에 게시하여 공시하며 회사는 사정변경 및 영업상 중요한 사유가 있을 경우 약관을 변경할 수 있으며 변경된 약관은 공지사항을 통해 공시한다
②본 약관 및 차후 회사사정에 따라 변경된 약관은 이용자에게 공시함으로써 효력을 발생한다.

제 4 조 (약관 외 준칙)
본 약관에 명시되지 않은 사항이 전기통신기본법, 전기통신사업법, 정보통신촉진법, ‘전자상거래등에서의 소비자 보호에 관한 법률’, ‘약관의 규제에관한법률’, ‘전자거래기본법’, ‘전자서명법’, ‘정보통신망 이용촉진등에 관한 법률’, ‘소비자보호법’ 등 기타 관계 법령에 규정되어 있을 경우에는 그 규정을 따르도록 한다.


제 2 장 이용계약

제 5 조 (이용신청)
①이용신청자가 회원가입 안내에서 본 약관과 개인정보보호정책에 동의하고 등록절차(회사의 소정 양식의 가입 신청서 작성)를 거쳐 '확인' 버튼을 누르면 이용신청을 할 수 있다.
②이용신청자는 반드시 실명과 실제 정보를 사용해야 하며 1개의 생년월일에 대하여 1건의 이용신청을 할 수 있다.
③실명이나 실제 정보를 입력하지 않은 이용자는 법적인 보호를 받을 수 없으며, 서비스 이용에 제한을 받을 수 있다.

제 6 조 (이용신청의 승낙)
①회사는 제5조에 따른 이용신청자에 대하여 제2항 및 제3항의 경우를 예외로 하여 서비스 이용을 승낙한다.
②회사는 아래 사항에 해당하는 경우에 그 제한사유가 해소될 때까지 승낙을 유보할 수 있다.
  가. 서비스 관련 설비에 여유가 없는 경우
  나. 기술상 지장이 있는 경우
  다. 기타 회사 사정상 필요하다고 인정되는 경우
③회사는 아래 사항에 해당하는 경우에 승낙을 하지 않을 수 있다.
  가. 다른 사람의 명의를 사용하여 신청한 경우
  나. 이용자 정보를 허위로 기재하여 신청한 경우
  다. 사회의 안녕질서 또는 미풍양속을 저해할 목적으로 신청한 경우
  라. 기타 회사가 정한 이용신청 요건이 미비한 경우


제 3 장 계약 당사자의 의무

제 7 조 (회사의 의무)
①회사는 사이트를 안정적이고 지속적으로 운영할 의무가 있다.
②회사는 이용자로부터 제기되는 의견이나 불만이 정당하다고 인정될 경우에는 즉시 처리해야 한다. 단, 즉시 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 공지사항 또는 전자우편을 통해 통보해야 한다.
③제1항의 경우 수사상의 목적으로 관계기관 및 정보통신윤리위원회의 요청이 있거나 영장 제시가 있는 경우, 기타 관계 법령에 의한 경우는 예외로 한다.

제 8 조 (이용자의 의무)
①이용자는 본 약관 및 회사의 공지사항, 사이트 이용안내 등을 숙지하고 준수해야 하며 기타 회사의 업무에 방해되는 행위를 해서는 안된다.
②이용자는 회사의 사전 승인 없이 본 사이트를 이용해 어떠한 영리행위도 할 수 없다.
③이용자는 본 사이트를 통해 얻는 정보를 회사의 사전 승낙 없이 복사, 복제, 변경, 번역, 출판, 방송 및 기타의 방법으로 사용하거나 이를 타인에게 제공할 수 없다.

제 4 장 서비스의 제공 및 이용

제 9 조 (서비스 이용)
①이용자는 본 약관의 규정된 사항을 준수해 사이트를 이용한다.
②본 약관에 명시되지 않은 서비스 이용에 관한 사항은 회사가 정해 '공지사항'에 게시하거나 또는 별도로 공지하는 내용에 따른다.

제 10 조 (정보의 제공)
회사는 회원이 서비스 이용 중 필요하다고 인정되는 다양한 정보에 대하여 전자메일이나 서신우편 등의 방법으로 회원에게 정보를 제공할 수 있다.

제 11 조 (광고게재)
①회사는 서비스의 운용과 관련하여 서비스 화면, 홈페이지, 전자우편 등에 광고 등을 게재할 수 있다.
②회사는 사이트에 게재되어 있는 광고주의 판촉활동에 회원이 참여하거나 교신 또는 거래의 결과로서 발생하는 모든 손실 또는 손해에 대해 책임을 지지 않는다.

제 12 조 (서비스 이용의 제한)
본 사이트 이용 및 행위가 다음 각 항에 해당하는 경우 회사는 해당 이용자의 이용을 제한할 수 있다.
①공공질서 및 미풍양속, 기타 사회질서를 해하는 경우
②범죄행위를 목적으로 하거나 기타 범죄행위와 관련된다고 객관적으로 인정되는 경우
③타인의 명예를 손상시키거나 타인의 서비스 이용을 현저히 저해하는 경우
④타인의 의사에 반하는 내용이나 광고성 정보 등을 지속적으로 전송하는 경우
⑤해킹 및 컴퓨터 바이러스 유포 등으로 서비스의 건전한 운영을 저해하는 경우
⑥다른 이용자 또는 제3자의 지적재산권을 침해하거나 지적재산권자가 지적 재산권의 침해를 주장할 수 있다고 판단되는 경우
⑦타인의 아이디 및 비밀번호를 도용한 경우
⑧기타 관계 법령에 위배되는 경우 및 회사가 이용자로서 부적당하다고 판단한 경우

제 13 조 (서비스 제공의 중지)
회사는 다음 각 호에 해당하는 경우 서비스의 전부 또는 일부의 제공을 중지할 수 있다.
①전기통신사업법 상에 규정된 기간통신 사업자 또는 인터넷 망 사업자가 서비스를 중지했을 경우
②정전으로 서비스 제공이 불가능할 경우
③설비의 이전, 보수 또는 공사로 인해 부득이한 경우
④서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 정상적인 서비스 제공이 어려운 경우
⑤전시, 사변, 천재지변 또는 이에 준하는 국가비상사태가 발생하거나 발생할 우려가 있는 경우

제 14 조 (게시물 관리)
회사는 건전한 통신문화 정착과 효율적인 사이트 운영을 위하여 이용자가 게시하거나 제공하는 자료가 제12조에 해당한다고 판단되는 경우에 임의로 삭제, 자료이동, 등록거부를 할 수 있다.

제 15 조 (서비스 이용 책임)
이용자는 회사에서 권한 있는 사원이 서명한 명시적인 서면에 구체적으로 허용한 경우를 제외하고는 서비스를 이용하여 불법상품을 판매하는 영업활동을 할 수 없으며 특히 해킹, 돈벌기 광고, 음란 사이트를 통한 상업행위, 상용 S/W 불법제공 등을 할 수 없다. 이를 어기고 발생한 영업활동의 결과 및 손실, 관계기관에 의한 구속 등 법적 조치 등에 관해서는 회사가 책임을 지지 않는다.


제 5 장 (서비스/재화의 주문 및 결제 관련) 

제16조 (결제방법)
‘회원’은 ‘회사’에서 판매하는 서비스/재화에 대하여 ‘선불카드, 직불카드, 신용카드 등의 각종 카드 결제 수단’을 이용하여 결제할 수 있다. 이때 ‘회사’는 이용자의 지급방법에 대하여 재화외 어떠한 명목의 수수료를 추가 징수하지 않는다.

① ‘회사’는 이용자의 구매신청이 있는 경우 이용자에게 수신확인통지를 한다. 서비스/주문확인에 대한 내용은 해당게시판에서 확인 할 수 있다.
② 수신확인통지를 받은 이용자는 의사표시의 불일치 등이 있는 경우에는 수신확인통지를 받은 후 즉시 구매신청 변경 및 취소를 요청할 수 있고 ‘회사’는 배송전에 이용자의 요청이 있는 경우에는 지체 없이 그 요청에 따라 처리한다. 다만 이미 대금을 지불한 경우에는 제18조의 ‘반품 및 취소규정’을 따른다.

제17조 (서비스 제공 및 배송정책)
① ‘회사’는 이용자와 재화의 공급시기에 관하여 별도의 약정이 없는 이상, 이용자가 결재를 실시한 날부터 7일 이내에 서비스/재화 등을 제공/배송할 수 있도록 주문제작, 포장 등 기타의 필요한 조치를 취한다. 
②‘회사’는 이용자가 구매한 재화에 대해 배송수단, 수단별 배송비용 부담자, 수단별 배송기간 등을 제품을 구매하는 웹 페이지 하단에 명시한다. 만약 ‘회사’가 약정 배송기간을 초과한 경우에는 그로 인한 이용자의 손해를 배상한다. 하지만 ‘회사’의 고의과실이 없음을 입증한 경우에는 그러하지 아니한다.

18조 (서비스 취소 및 반품 환불 규정)
‘회사’는 이용자가 구매 신청한 서비스/재화 등이 품절 등의 사유로 인도 또는 제공을 할 수 없을 때에는 지체 없이 그 사유를 이용자에게 통지하고 사전에 재화 등의 대금을 받은 경우에는 대금을 받은 날부터 3영업일 이내에 환급하거나 환급에 필요한 조치를 한다.
① 서비스/재화가 제공/발송 되기전 이용자가 결제를 취소할 경우 ‘회사’는 해당 주문건을 취소 처리하고 카드결제 승인을 취소한다.
② 서비스/재화가 제공/발송 된 이후 결제 취소는 불가하다. 단, ‘회사’의 부주의 ‘배송’상의 문제로 인한 재화의 파손, 변질 및 서비스 불이행의 경우 ‘회사’는 이용자에게 구매 금액의 취소/반품 및 환불 조치 및 교환 조치를 취한다.


제 6 장 기타

제 19 조 (면책 및 손해배상)
①천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 회사의 서비스 제공 책임이 면제된다.
②회사는 이용자간 또는 이용자와 제3자간의 상호거래 관계에서 발생되는 결과에 대하여 어떠한 책임도 부담하지 않는다.
③회사는 이용자가 게시판에 게재한 정보, 자료, 내용 등에 관하여 사실의 정확성, 신뢰도 등에 어떠한 책임도 부담하지 않으며 이용자는 본인의 책임 아래 본 사이트를 이용해야 한다.
④이용자가 게시 또는 전송한 자료 등에 관하여 손해가 발생하거나 자료의 취사선택, 기타 무료로 제공되는 서비스 이용과 관련해 어떠한 불이익이 발생하더라도 이에 대한 모든 책임은 이용자에게 있다.
⑤아이디와 비밀번호의 관리 및 이용자의 부주의로 인하여 발생되는 손해 또는 제3자에 의한 부정사용 등에 대한 책임은 이용자에게 있다.
⑥이용자가 본 약관의 규정을 위반함으로써 회사에 손해가 발생하는 경우 이 약관을 위반한 이용자는 회사에 발생한 모든 손해를 배상해야 하며 동 손해로부터 회사를 면책시켜야 한다.

제 20 조 (개인신용정보 제공 및 활용에 대한 동의서)
회사가 회원 가입과 관련해 취득한 개인 신용 정보는 신용정보의 이용 및 보호에 관한 법률 제23조의 규정에 따라 타인에게 제공 및 활용 시 이용자의 동의를 얻어야 한다. 이용자의 동의는 회사가 회원으로 가입한 이용자의  신용정보를 신용정보기관, 신용정보업자 및 기타 이용자 등에게 제공해 이용자의 신용을 판단하기 위한 자료로서 활용하거나 공공기관에서 정책자료로 활용하는데 동의하는 것으로 간주한다.

제 21 조 (분쟁의 해결)
①회사와 이용자는 본 사이트 이용과 관련해 발생한 분쟁을 원만하게 해결하기 위하여 필요한 모든 노력을 해야 한다.
②제1항의 규정에도 불구하고 동 분쟁으로 인하여 소송이 제기될 경우 동 소송은 회사의 본사 소재지를 관할하는 법원의 관할로 본다.

<부칙>
본 약관은 2021년 08월 01일부터 적용한다.
          `}</FooterModalTxt>
          </BodyModal>
          <ModalFooter>
            <Button variant="secondary" onClick={handleCloset}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </FooterModalAll>

      <FooterModalAll>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <FooterModalTitle>이용약관</FooterModalTitle>
          </Modal.Header>
          <BodyModal>
            <FooterModalTxt>{`1. 총칙
“멍타냥택시 서비스”의 원활한 운영을 위해서 다음의 개인정보를 수집, 활용하고자 합니다. 주식회사 뉴플러스기획(이하 “회사”라 함)는 개인정보보호를 매우 중요시하며 “개인정보보호법” 및 "정보통신망 이용촉진 및 정보보호에 관한 법률”을 준수하고 있습니다. 
회사는 개인정보처리방침을 통하여 이용자가 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. 
회사의 개인정보처리방침은 정부의 법률 및 회사의 정책 변경에 따라 개정될 수 있으며 개정하는 경우 개별통지를 통해 공지할 것입니다.

2. 수집하는 개인정보의 항목 및 수집방법
회사는 이용자의 “멍타냥 택시” 서비스 제공을 위한 개인정보(이름, 휴대전화번호)를 제공받을 수 있습니다. 
(1) 개인정보 필수 수집 항목
- 이름,휴대전화번호
(2) 수집방법
- 서비스 신청을 위해 입력한 이용자 개인정보 데이터를 동의를 받고 수집

3. 개인정보의 수집 및 이용목적
회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
(1) 서비스 이용자 관리
“멍타냥 택시” 서비스의 원활한 운영을 위해 본인확인, 개인 식별, 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 불만처리 등 민원처리, 고지사항 전달
(2) 시장조사 목적
통계작성, 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공

4. 개인정보의 보유 및 이용기간
회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 상법 및 “전자상거래 등에서의 소비자보호에 관한 법률” 등 관련 법령의 규정에 의하여 다음과 같이 거래 관련 관리 의무 관계의 확인 등을 이유로 일정기간 보유하여야 할 필요가 있을 경우에는 일정기간 보유합니다.
(1) 계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래등에서의 소비자보호에 관한 법률)
(2) 대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래등에서의 소비자보호에 관한 법률)
(3) 소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래등에서의 소비자보호에 관한 법률)
(4) 설문조사, 이벤트 등 일시적 목적을 위하여 수집한 경우: 당해 설문조사, 이벤트 등의 종료 후 6개월 이내
(5) 본인확인에 관한 기록: 6개월(정보통신망 이용촉진 및 정보보호 등에 관한 법률)
(6) 전자금융거래에 관한 기록: 5년(전자금융거래법)

5. 개인정보의 파기 절차 및 방법
회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.
(1) 파기절차
이용자가 서비스 이용 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기됩니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다.
(2) 파기방법
- 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제

6. 개인정보의 제3자 제공
회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 다음의 경우에는 주의를 기울여 개인정보를 이용 및 제공할 수 있습니다.
(1) 제휴관계
보다 나은 “서비스” 제공을 위하여 이용자의 개인정보를 제휴사에게 제공하거나 또는 제휴사와 공유할 수 있습니다. 개인정보를 제공하거나 공유할 경우에는 사전에 이용자께 제휴사가 누구인지, 제공 또는 공유되는 개인정보항목이 무엇인지, 왜 그러한 개인정보가 제공되거나 공유되어야 하는지, 그리고 언제까지 어떻게 보호 · 관리되는지에 대해 개별적으로 서면 또는 전자우편 등을 통해 고지하여 동의를 구하는 절차를 거치게 되며, 이용자께서 동의하지 않는 경우에는 제휴사에게 제공하거나 제휴사와 공유하지 않습니다. 제휴관계에 변화가 있거나 제휴관계가 종결될 때도 같은 절차에 의하여 고지하거나 동의를 구합니다.
– ”서비스” 제공을 위해 개인정보를 제공 및 처리하는 제휴사 리스트
ㄱ) 제공받는 자: ㈜뉴플러스기획 / 이용목적: “멍타냥 택시” 서비스 운영 / 보유 및 이용기간: 서비스 제공기간
ㄴ) 제공받는 개인정보: 이름, 휴대전화번호
ㄷ) 자체 처리하는 민감정보: 수축기 혈압, 이완기 혈압, 맥박

7. 개인정보의 처리위탁
원활한 업무 처리를 위해 이용자의 개인정보를 위탁 처리할 경우 반드시 사전에 개인정보 처리위탁을 받는 자(이하 “수탁자”라 합니다)와 개인정보 처리위탁을 하는 업무의 내용을 고지합니다.
 
8. 이용자 및 법정대리인의 권리와 그 행사방법
(1) 이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 이용계약의 해지를 요청할 수도 있습니다. 단, 이용자께서 서비스 제공을 위해 필수적인 자신의 개인정보 수집•이용에 대한 동의를 거부하실 경우, 서비스 제공이 제한됩니다.
(2) 이용자는 서비스 신청 해지(동의철회)를 요청할 수 있습니다.
(3) 위의 방법이 불가할 경우 개인정보관리책임자에게 전자우편 또는 서면으로 연락하시면 지체 없이 조치하겠습니다.
(4) 귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.
(5) 회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 "회사가 수집하는 개인정보의 보유 및 이용기간"에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.

9. 전자우편 무단 수집거부
(1) 회사는 게시된 전자우편 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단 수집되는 것을 거부합니다. 이를 위반 시 정보 통신망 이용 촉진 및 정보 보호 등에 관한 법률 등에 의해 처벌받을 수 있습니다.

10. 개인정보관리책임자의 역할
(1) 개인정보의 수집, 이용, 제공 및 관리에 관한 업무의 총괄
(2) 개인정보처리방침 및 관련 규정의 수립
(3) 소속직원 또는 제3자에 의한 위법. 부당한 개인정보 침해행위에 대한 점검
(4) 개인정보처리자 지정 및 관리감독, 교육
(5) 개인정보 제공 또는 공유업체 및 위탁업체의 개인정보보호 상황에 대한 관리감독
(6) 이용자의 개인정보 관련 불만 및 의견에 대한 처리
(7) 기타 이용자의 개인정보보호를 위해 필요한 사항

11. 개인정보관리 담당자의 연락처
회사는 이용자의 개인정보를 안전하게 이용할 수 있도록 최선을 다하고 있습니다. 그러나 기술적인 보완조치를 했음에도 불구하고, 해킹 등 기본적인 네트워크상의 위험성에 의해 발생하는 예기치 못한 사고로 인한 정보의 훼손 및 방문자가 작성한 게시물에 의한 각종 분쟁에 관해서는 책임이 없습니다.
개인정보를 처리하는 담당자는 다음과 같습니다.
 
개인정보관리담당자 성명 : 황동규
전화번호 : (02) 6080-0920
전자우편 : mntxdriver@gmail.com
 
(1) 이용자는 회사의 이벤트를 참가하여 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자에 신고할 수 있습니다.
(2) 회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.
(3) 기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.
- 개인분쟁조정위원회 (www.1336.or.kr / 1336)
- 정보보호마크인증위원회 (www.eprivacy.or.kr / 02-580-0533~4)
- 대검찰청 인터넷범죄수사센터 (http://icic.sppo.go.kr / 02-3480-3600)
- 경찰청 사이버테러대응센터 (www.ctrc.go.kr / 02-392-0330)

12. 개인정보의 안전성 확보조치
회사는 이용자의 개인정보 보호를 위한 기술적 대책으로서 여러 보안장치를 마련하고 있습니다. 이용자께서 제공하신 모든 정보는 방화벽 등 보안장비에 의해 안전하게 보호∙관리되고 있습니다. 또한 회사는 이용자의 개인정보 보호를 처리하는 인원을 최소한으로 제한하며 지속적인 보안교육을 실시하고 있습니다.
또한 개인정보를 처리하는 시스템의 사용자를 지정하여 사용자 비밀번호를 부여하고 이를 정기적으로 갱신하겠습니다.

13. 고지의 의무
본 개인정보처리방침은 2021년 06월 17일부터 적용됩니다. 내용의 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일전부터 공지사항을 통하여 고지할 것입니다. 또한 개인정보처리방침에 버전번호 및 개정일자 등을 부여하여 개정여부를 쉽게 알 수 있도록 하고 있습니다.

            `}</FooterModalTxt>  
          </BodyModal>
          <ModalFooter>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </FooterModalAll>
      
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
                <FooterBtn onClick={handleShowt} variant="primary">이용약관</FooterBtn>{' '}
                &nbsp;
                <FooterBtn2 onClick={handleShow} variant="primary">개인정보처리방침안내</FooterBtn2>{' '}
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