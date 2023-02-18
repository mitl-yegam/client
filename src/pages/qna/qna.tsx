import clsx from "clsx";
import enterpriseStyles from "../enterprise/enterprise.module.scss";
import styles from "./qna.module.scss"
import qnaList from "./qna.json";
import shortid from 'shortid';

const QnA = () => {

  return (
    <>
    <section className="container py-0">
      <div className={clsx(enterpriseStyles['tab'], enterpriseStyles['border-blue'], 'py-5 py-md-7')}>
        <span className="normal2 blue-100 text-bolder">자주 하는 질문</span>
      </div>
    </section>
    <section className="container pb-15 pb-md-25">
      {
        qnaList.map(item => {
          return (
            <>
              <h3 key={shortid.generate()} className="blue-100 pt-12 pb-4 pb-md-9">{item.question}</h3>
              <div className={clsx(styles['answer-wrapper'], 'p-7 p-md-10')}>
                <p className="normal3 gray-500">
                  {item.answer}
                </p>
              </div>
            </>
          )
        })
      }

    </section>
    </>
  )
}

export default QnA;