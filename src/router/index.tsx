import Layout from 'pages/layout';
import Portfolio from 'pages/portfolio';
import { Route, Routes as ReactRouter } from 'react-router-dom';
import Cctv from '../pages/cctv';
import Company from '../pages/company';
import Enterprise from '../pages/enterprise';
import Lan from '../pages/lan';
import Main from '../pages/main';
import Maintenance from '../pages/maintenance';
import NotFound from '../pages/notFound';
import Order from '../pages/order';
import QnA from '../pages/qna';
import Security from '../pages/security';
import SiteMap from '../pages/sitemap';

const Routes = () => {
  return (
    <ReactRouter>
      <Route path='/sitemap' element={<SiteMap />} />
      <Route path='/' element={<Main />} /> {/* 메인 페이지 */}
      <Route path='/lan' element={<Lan />} /> {/* 랜공사 */}
      <Route path='/cctv' element={<Cctv />} /> {/* CCTV */}
      <Route path='/maintenance' element={<Maintenance />} /> {/* 통신유지보수 */}
      <Route path='/subscription-enterprise' element={<Enterprise />} /> {/* 기업용 인터넷 가입 */}
      <Route path='/subscription-security' element={<Security />} /> {/* 전용회선 */}
      <Route path='/company-yegam' element={<Company />} /> {/* 회사소개 */}
      <Route path='/qna' element={<QnA />} /> {/* 자주하는질문 */}
      <Route path='/order' element={<Order />} /> {/* 견적문의 */}
      <Route path='/portfolio' element={<Portfolio />} /> {/* 설치사례 */}
      <Route path='/layout' element={<Layout />} /> {/* 설치사례 */}
      <Route path='*' element={<NotFound />} /> {/* 404페이지 */}
    </ReactRouter>
  )
}

export default Routes;