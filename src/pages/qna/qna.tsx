import clsx from "clsx";
import enterpriseStyles from "../enterprise/enterprise.module.scss";
import styles from "./qna.module.scss"

const QnA = () => {

  return (
    <>
    <section className="container py-0">
      <div className={clsx(enterpriseStyles['tab'], enterpriseStyles['border-blue'], 'py-5 py-md-7')}>
        <span className="normal2 blue-100 text-bolder">자주 하는 질문</span>
      </div>
    </section>
    <section className="container pb-15 pb-md-25">
      <h3 className="blue-100 pt-5 pt-md-12 pb-4 pb-md-9">Q. 랜선공사가 왜 필요한가요?</h3>
      <div className={clsx(styles['answer-wrapper'], 'p-7 p-md-10')}>
        <p className="normal3 gray-500">
          사무실의 신규오픈, 이사, 확장 자리배치의 경우 인터넷 및 전화선의 이동이 반드시 필요합니다.<br/>
          각 책상자리바다 UPT랜 케이블 포설하고, 공유기와 스위치허브등의<br/>
          네트워크 장비를 설치·세팅하여야 하며, 랜선들이 깔끔하게 정리될 수 있도록 매립하거나,<br/> 
          마감재를 사용해서 깨끗한 환경을 조성하여야 합니다.<br/><br/>

          이사 업체 등에서는 할수  없는 전문영역이므로, 랜공사 전문회사를 통해서<br/>
          완벽하고 안정성 있는 통신 환경을 구축할 수 있습니다.
        </p>
      </div>
      <h3 className="blue-100 pt-12 pb-4 pb-md-9">Q. 랜공사 통신사(KT·LG·SK 등) 에서는 진행해주지 않나요?</h3>
      <div className={clsx(styles['answer-wrapper'], 'p-7 p-md-10')}>
        <p className="normal3 gray-500">
          진행해주지 않습니다.<br/>
          통신사에서는 메인 광케이블만 설치하기 때문에, 네트워크 환경은 고객사에서 별도로 구성하셔야 합니다.
        </p>
      </div>
    </section>
    </>
  )
}

export default QnA;