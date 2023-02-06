import clsx from "clsx";
import enterpriseStyles from "../enterprise/enterprise.module.scss";

const QnA = () => {

  return (
    <>
    <section className="container">
      <div className={clsx(enterpriseStyles['tab'], enterpriseStyles['border-blue'])}>
        <span className="normal2 blue-100 text-bolder">자주 묻는 질문</span>
      </div>
    </section>
    </>
  )
}

export default QnA;