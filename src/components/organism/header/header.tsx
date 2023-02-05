import { navPath } from '../layout/data';
import styles from './header.module.scss';
import Logo from "assets/images/logo/logo-yegam.svg";
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const Header = () => {
  return (
    <header className={clsx(styles['root'], "container-fluid")}>
      <div className={clsx(styles['nav-wrapper'], 'container', 'py-lg-4')}>
        <nav className="row align-items-center justify-between gy-0">
          <Link to={'/'}>
            <img className="mr-25" src={Logo} alt="yegam" />
          </Link>
          <ul className={styles['ul-wrapper']}>
            {navPath.map((item) => {
              return (
                <li className='black' key={item.path}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;