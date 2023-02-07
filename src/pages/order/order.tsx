import clsx from "clsx";
import enterpriseStyles from "../enterprise/enterprise.module.scss";

const Order = () => {

  return (
    <>
    <section className="container py-0">
      <div className={clsx(enterpriseStyles['tab'], enterpriseStyles['border-blue'], 'py-5 py-md-7')}>
        <span className="normal2 blue-100 text-bolder">견적문의</span>
      </div>
    </section>
    </>
  )
}

export default Order;