import styles from './topBanner.module.scss';
import clsx from 'clsx';
import HeadSetSVG from 'assets/images/icon/icon-headset.svg';
import BannerTop from 'assets/images/banner/banner-top.png';
import ShadowBox from 'components/atoms/shadowBox';

const TopBanner = () => {
  return (
    <div
      className={clsx(styles['root'], 'container-fluid', 'd-center')}
      style={{ backgroundImage: `url(${BannerTop})` }}>
      <div className='container d-center flex-column'>
        <div className='row bold1 white mb-11'>
          <p className='bold1 text-center'>
            전문적인 기술과 노하우로 책임 시공하는{' '}
            <span className='heading1'>(주)예감</span>
          </p>
        </div>
        <ShadowBox>
          <div className={clsx(styles['call-box'])}>
            <div className='mr-4'>
              <img src={HeadSetSVG} alt='전화번호' />
            </div>
            <span className='bold2'>
              <a className='white' href='tel:031-535-1324'>
                031) 535-1324
              </a>
            </span>
          </div>
        </ShadowBox>
      </div>
    </div>
  );
};

export default TopBanner;
