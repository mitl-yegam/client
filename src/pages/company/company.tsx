import clsx from "clsx";
import enterpriseStyles from "../enterprise/enterprise.module.scss";
import IconRoundedCheck from "../../assets/images/icon/icon-rounded-check.svg"
import LogoKica from "../../assets/images/logo/logo-kica.png";
import Certification1 from "../../assets/images/etc/certification-1.png";
import Certification2 from "../../assets/images/etc/certification-2.png";
import Certification3 from "../../assets/images/etc/certification-3.png";
import Certification4 from "../../assets/images/etc/certification-4.png";
import Certification5 from "../../assets/images/etc/certification-5.png";
import LogoExample from "../../assets/images/logo/logo-example.png";

const Company = () => {

    return (
        <>
            <section className="container py-0">
                <div className={clsx(enterpriseStyles['tab'], 'py-5 py-md-7')}>
                    <span className="normal2 blue-100 text-bolder">(주) 예감</span>
                </div>
            </section>
            <section className="container-fluid bg-blue-100 p-6 p-md-16">
                <div className="container white text-center">
                    <h1 className="bold1">전문적인 기술과 노하우로 책임 시공하는 <br/>종합 정보통신 공사업체</h1>
                </div>
            </section>
            <section className="container">
                <div className="d-center flex-column py-12">
                    <img src={IconRoundedCheck}/>
                    <h2 className="blue-100 mt-3 mb-12">정보통신공사 면허를 가진 기업인지 꼭 확인하세요!</h2>
                    <img src={LogoKica}/>
                    <p className="bold3 text-center mt-12">
                        예감은 정보통신공사협회에 등록된 정보통신공사 면허를 가진 전문 기업입니다.<br/>
                        오랜 경험을 바탕으로 항상 고객의 입장에서 생각하고,<br/>
                        고객의 환경에 맞추어 저렴한 가격으로 최상의 네트워크 환경을 구축합니다.
                    </p>
                </div>
                <div className="d-center gap-4">
                    <img src={Certification1}/>
                    <img src={Certification2}/>
                    <img src={Certification3}/>
                    <img src={Certification4}/>
                    <img src={Certification5}/>
                </div>
                <div className="d-center flex-column pt-20 pb-25">
                    <h2 className="blue-100 mb-12">주요고객사</h2>
                    <div className="d-center gap-6 mb-9">
                        <img src={LogoExample}/>
                        <img src={LogoExample}/>
                        <img src={LogoExample}/>
                        <img src={LogoExample}/>
                        <img src={LogoExample}/>
                        <img src={LogoExample}/>
                    </div>
                </div>
            </section>
            <section className="container-fluid bg-gray-100 py-25">
                <div className="container d-center flex-column">
                    <h2 className="blue-100 mt-3 mb-12">따뜻한 나눔</h2>
                    <p className="bold3 text-center">예감과 함께 하신다면, <br/>사랑이 필요한 이웃에게 따뜻한 손을 내밀어 주시고 계신 것입니다.</p>
                </div>


            </section>
        </>
    )
}

export default Company;