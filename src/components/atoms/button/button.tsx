import clsx from 'clsx';
import styles from './button.module.scss';
import { Props } from './button.type';

const Button = ({ text, bgColor = 'bg-blue-100', color = 'white' }: Props) => {
  return (
    <div className={clsx(styles['root'], bgColor)}>
      {!!text && <span className={clsx('heading3', color)}>{text}</span>}
    </div>
  );
};

export default Button;
