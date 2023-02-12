import clsx from "clsx";
import enterpriseStyles from "../enterprise/enterprise.module.scss";
import BannerImage from "../../assets/images/banner/banner-lan.png";
import LanExample1 from "../../assets/images/etc/lan-example-1.png";
import LanExample2 from "../../assets/images/etc/lan-example-2.png";
import LanExample3 from "../../assets/images/etc/lan-example-3.png";
import LanExample4 from "../../assets/images/etc/lan-example-4.png";

const Lan = () => {

  return (
    <>
      <section className="container-fluid bg-blue-100 p-6 p-md-16">
          <div className="container white text-center">
            <h1 className="mb-5 mb-md-11">랜공사</h1>
            <p className="mb-5 normal1">
              인터넷 환경이 필요한 곳에 통신 장비를 이용하여 네트워크를 구성하여<br/>
              PC · 전화기 ·와이파이 ·복합기기 등에 연결하는 통신 배선공사를 말합니다.
            </p>
          </div>
      </section>
      <section className={clsx('container-fluid', enterpriseStyles['banner-warpper'])}>
        <img src={BannerImage} width="100%"/>
      </section>
      <section className="container py-12">
        <h2 className="blue-100 text-center mb-13">랜공사, 이럴때 필요해요!</h2>
        <div className="row gx-1">
          <div className="col-6 col-lg-3">
            <img src={LanExample1} width="100%" alt="" />
            <p className="heading4 text-center mt-2">신규사무실 오픈</p>
          </div>
          <div className="col-6 col-lg-3">
            <img src={LanExample2} width="100%" alt="" />
            <p className="heading4 text-center mt-2">사무실 이전</p>
          </div>
          <div className="col-6 col-lg-3">
            <img src={LanExample3} width="100%" alt="" />
            <p className="heading4 text-center mt-2">사무실 확장</p>
          </div>
          <div className="col-6 col-lg-3">
            <img src={LanExample4} width="100%" alt="" />
            <p className="heading4 text-center mt-2">자리 재배치</p>
          </div>
        </div>
        <p className="normal2 text-center my-20">
        신규  사무실 오픈, 사무실 이전 및 확장, 자리배치 재정비에 있어서<br/>
        내부 네트워크 환경구축을 위해 랜공사가 꼭 필요합니다.
        <br/><br/>
        이 서비스는 통신사가 아닌, 랜공사 전문기업에서 진행하게 됩니다.
        </p>
      </section>
      <section className="container-fluid bg-gray-100">
        <div className="container text-center py-18">
        <h2 className="blue-100">초고속 네트워크 시스템 구축 · 컨설팅, <br/>그리고 완벽한 A/S 유지보수 까지</h2>
          <p className="normal2 mt-10">
            예감은 숙련된 기술로<br/>
            고객님의 환경을 다각적으로 분석하고,<br/>
            최적의 비용으로 최고의 안정성을 갖춘 네트워크 환경을 만들어드립니다.
          </p>
        </div>
      </section>
      <section className="container">

      </section>
      </>
  )
}

export default Lan;