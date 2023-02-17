import clsx from 'clsx';
import styles from './button.module.scss';
import { Props } from './button.type';

const Button = ({
  text,
  bgColor = 'bg-blue-100',
  color = 'white',
  onClick,
  style,
  textStyle,
}: Props) => {
  return (
    <button
      className={clsx(styles['root'], bgColor)}
      style={style}
      onClick={onClick}>
      {!!text && (
        <span className={clsx('heading3', color)} style={textStyle}>
          {text}
        </span>
      )}
    </button>
  );
};

export default Button;
