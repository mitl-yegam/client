import { CSSProperties } from 'react';

export type Props = {
  text: string;
  color?: string;
  bgColor?: string;
  style?: CSSProperties;
  textStyle?: CSSProperties;
  onClick?: (e: any) => void;
};
