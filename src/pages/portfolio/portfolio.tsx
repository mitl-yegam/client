import clsx from 'clsx';
import TopBanner from 'components/molecules/topBanner';
import { Link } from 'react-router-dom';
import styles from './portfolio.module.scss';
import mainCase1 from 'assets/images/etc/main-case-1.png';
import mainCase2 from 'assets/images/etc/main-case-2.png';
import mainCase3 from 'assets/images/etc/main-case-3.png';
import mainCase4 from 'assets/images/etc/main-case-4.png';
import Pagination from 'components/atoms/pagination';

const Portfolio = () => {
  return (
    <div className={clsx(styles['root'])}>
      <TopBanner />
      <div className='container'>
        <div className='row mt-15'>
          <h3 className='blue-100'>설치사례</h3>
          <div className='col'>
            <ul className={clsx(styles['case-wrapper'], 'row', 'gx-1', 'gy-2')}>
              <li className='col col-xs-6 col-md-4'>
                <img src={mainCase1} alt='설치사례' />
                <div className='bold3 gray-600'>OO아파트 시공</div>
                <div className='normal4 gray-600'>랜설치 완료</div>
              </li>
              <li className='col col-xs-6 col-md-4'>
                <img src={mainCase2} alt='설치사례' />
                <div className='bold3 gray-600'>OO사무실 구축</div>
                <div className='normal4 gray-600'>랜설치 완료</div>
              </li>
              <li className='col col-xs-6 col-md-4'>
                <img src={mainCase3} alt='설치사례' />
                <div className='bold3 gray-600'>OO사무실 전선배치</div>
                <div className='normal4 gray-600'>랜설치 완료</div>
              </li>
              <li className='col col-xs-6 col-md-4'>
                <img src={mainCase4} alt='설치사례' />
                <div className='bold3 gray-600'>OO아파트 시공</div>
                <div className='normal4 gray-600'>랜설치 완료</div>
              </li>
            </ul>
            <Pagination
              totalCount={10}
              row={6}
              onFetchList={function (): Promise<void> {
                throw new Error('Function not implemented.');
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
