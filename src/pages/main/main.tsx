import TopBanner from 'components/molecules/topBanner';
import mainExample1 from 'assets/images/etc/main-example-1.png';
import mainExample2 from 'assets/images/etc/main-example-2.png';
import mainExample3 from 'assets/images/etc/main-example-3.png';
import mainExample4 from 'assets/images/etc/main-example-4.png';
import mainExample5 from 'assets/images/etc/main-example-5.png';
import mainExample6 from 'assets/images/etc/main-example-6.png';
import bestReason1 from 'assets/images/etc/main-best-reason-1.png';
import bestReason3 from 'assets/images/etc/main-best-reason-3.png';
import mainCase1 from 'assets/images/etc/main-case-1.png';
import mainCase2 from 'assets/images/etc/main-case-2.png';
import mainCase3 from 'assets/images/etc/main-case-3.png';
import mainCase4 from 'assets/images/etc/main-case-4.png';
import magnetic from 'assets/images/icon/icon-magnetic-card.svg';
import thumbsUp from 'assets/images/icon/icon-thumbs-up.svg';
import tools from 'assets/images/icon/icon-tools.svg';
import verified from 'assets/images/icon/icon-verified-account.svg';
import arrowLeft from 'assets/images/icon/icon-arrow-left.svg';
import clsx from 'clsx';
import styles from './main.module.scss';
import Ellipse from 'components/atoms/ellipse';
import { Link } from 'react-router-dom';
import Button from 'components/atoms/button';

const Main = () => {
  return (
    <div className={styles['root']}>
      <TopBanner />
      <div className='container'>
        <h2 className='bold2 text-center my-12'>
          내부 유·무선 인터넷 환경이 필요한 모든 곳에 <br />
          <span className='heading2 blue-100'>
            정확하고 신속하게 시공하는 랜공사 전문 기업
          </span>{' '}
          입니다.
        </h2>
        <ul className={clsx(styles['ul-wrapper'], 'row', 'gx-1')}>
          <li className='col-xs-6 col-md-4 col-lg-2'>
            <img src={mainExample1} alt='' />
          </li>
          <li className='col-xs-6 col-md-4 col-lg-2'>
            <img src={mainExample2} alt='' />
          </li>
          <li className='col-xs-6 col-md-4 col-lg-2'>
            <img src={mainExample3} alt='' />
          </li>
          <li className='col-xs-6 col-md-4 col-lg-2'>
            <img src={mainExample4} alt='' />
          </li>
          <li className='col-xs-6 col-md-4 col-lg-2'>
            <img src={mainExample5} alt='' />
          </li>
          <li className='col-xs-6 col-md-4 col-lg-2'>
            <img src={mainExample6} alt='' />
          </li>
        </ul>
        <ul className={'row my-13 justify-center'}>
          <li className='col-xs-6 col-md-3 d-center'>
            <Ellipse icon={magnetic} text={'합리적 가격'} />
          </li>
          <li className='col-xs-6 col-md-3 d-center'>
            <Ellipse icon={thumbsUp} text={'최고급 자재'} />
          </li>
          <li className='col-xs-6 col-md-3 d-center'>
            <Ellipse icon={tools} text={'무상 A/S'} />
          </li>
          <li className='col-xs-6 col-md-3 d-center'>
            <Ellipse icon={verified} text={'양심기업'} />
          </li>
        </ul>
        <div className={clsx(styles['order-wrapper'], 'row', 'gx-1', 'gy-0')}>
          <div className='col col-md-6'>
            <div className={clsx(styles['fast-consulting'], 'bg-gray-100')}>
              <h3>빠른상담</h3>
              <p>09:00 - 18:00 (월 - 토)</p>
              <h2 className='mt-10'>
                <a className='blue-100' href='tel:031-535-1324'>
                  031) 535 - 1324
                </a>
              </h2>
            </div>
            <div className={clsx(styles['quote-contact'], 'bg-blue-100')}>
              <h3>견적문의</h3>
              <div className='d-flex justify-end'>
                <Link to={'/order'}>
                  <img src={arrowLeft} alt='견적문의' />
                </Link>
              </div>
            </div>
          </div>
          <div className='col col-md-6'>
            <div className={clsx(styles['fast-quote-contact'])}>
              <div className='d-flex align-items-center gap-9'>
                <h3>빠른견적 문의</h3>
                <p>확인 후 순차적으로 연락드립니다.</p>
              </div>
              <div className={clsx(styles['terms-wrapper'])}>
                <p className='mr-6'>개인정보수집 이용에 관한 동의</p>
                <label className='mr-2'>
                  <input type='radio' name='terms' id='' />
                  <span className='ml-md-3'>동의함</span>
                </label>
                <label>
                  <input type='radio' name='terms' id='' />
                  <span className='ml-md-3'>동의안함</span>
                </label>
                <Link className={styles['detail-view']} to={''}>
                  <span>[자세히 보기]</span>
                </Link>
              </div>
              <div className={styles['divider']} />
              <form className={styles['form']} action=''>
                <label className='heading6'>
                  <span>고객명</span>
                  <input
                    type='text'
                    className='heading6'
                    name=''
                    id=''
                    placeholder='홍길동'
                  />
                </label>
                <label className='heading6'>
                  <span>연락처</span>
                  <input
                    type='text'
                    name=''
                    className='heading6'
                    id=''
                    placeholder='010-1234-5678'
                  />
                </label>
                <label className='heading6'>
                  <span>주&nbsp;&nbsp;&nbsp;소</span>
                  <input
                    type='text'
                    name=''
                    className='heading6'
                    id=''
                    placeholder='서울시 잠실동 179동 1358로'
                  />
                </label>
                <label className='heading6'>
                  <span>증&nbsp;&nbsp;&nbsp;상</span>
                  <input
                    type='text'
                    name=''
                    className='heading6'
                    id=''
                    placeholder='랜을 설치하고싶습니다'
                  />
                </label>
                <div className='d-center'>
                  <Button text={'상담신청'} />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='row d-center mb-15'>
          <h2 className='blue-100'>왜 예감의 고객만족도는 최상위인가요?</h2>
        </div>
        <ul className={clsx(styles['best-reason-wrapper'], 'row', 'gy-5')}>
          <li
            className={clsx(styles[''], 'col col-md-4')}
            style={{ backgroundImage: `url(${bestReason1})` }}>
            <div className={styles['reason-content']}>
              <div className={styles['number']}>1</div>
              <h3 className='mt-3 mb-10'>
                전문통신공사 <br />
                면허 취득사
              </h3>
              <p className=''>
                (주) 예감은 정보통신공사협회에 공식 등록된
                <br /> 정보통신공사 면허를 가진 ‘전문 기업’으로 <br />
                <span className='text-bolder'>
                  전문성과 노하우를 기반하여 책임
                </span>
                시공합니다.
              </p>
            </div>
          </li>
          <li
            className={clsx(styles[''], 'col col-md-4')}
            style={{ backgroundImage: `url(${bestReason1})` }}>
            <div className={styles['reason-content']}>
              <div className={styles['number']}>2</div>
              <h3 className='mt-3 mb-10'>
                정품 자재
                <br />
                필수 사용
              </h3>
              <p className=''>
                안전한 인터넷 환경 구성의 시작은 ‘자재’입니다.
                <br />
                양심기업 (주)예감은 <br />
                오직{' '}
                <span className='text-bolder'>
                  국산용 고강도 정품 자재
                </span>만을 <br />
                사용할 것을 약속합니다.
              </p>
            </div>
          </li>
          <li
            className={clsx(styles[''], 'col col-md-4')}
            style={{ backgroundImage: `url(${bestReason3})` }}>
            <div className={styles['reason-content']}>
              <div className={styles['number']}>3</div>
              <h3 className='mt-3 mb-10'>
                빠르고 친절한 <br /> 서비스
              </h3>
              <p className=''>
                (주)예감은 고객님들의 소중한 시간을 위해
                <br /> 최선을 다하여 <br />
                <span className='text-bolder'>빠르고 친절한 서비스</span>로
                보답합니다.
              </p>
            </div>
          </li>
        </ul>
        <div className='row  mb-25'>
          <div className='col d-flex align-items-center justify-between'>
            <h2 className='blue-100'>설치사례</h2>
            <Link to={'/portfolio'}>
              <h5 className='blue-100'>더보기</h5>
            </Link>
          </div>
          <div className='col'>
            <ul className={clsx(styles['case-wrapper'], 'row', 'gx-1')}>
              <li className='col-6 col-md-3'>
                <img src={mainCase1} alt='설치사례' />
              </li>
              <li className='col-6 col-md-3'>
                <img src={mainCase2} alt='설치사례' />
              </li>
              <li className='col-6 col-md-3'>
                <img src={mainCase3} alt='설치사례' />
              </li>
              <li className='col-6 col-md-3'>
                <img src={mainCase4} alt='설치사례' />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
