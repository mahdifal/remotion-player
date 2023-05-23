import { CSSProperties } from 'react';

const defaultTitleStyle: CSSProperties = {
  fontFamily: 'SF Pro Text, Helvetica, Arial, sans-serif',
  fontWeight: 'bold',
  fontSize: 60,
  textAlign: 'center',
  position: 'absolute',
  top: 180,
  width: '100%',
};

type TitleProps = {
  titleText: string;
  style?: CSSProperties;
};

export const Title = ({ titleText, style }: TitleProps) => {
  const titleStyle: CSSProperties = {
    ...defaultTitleStyle,
    ...style,
  };

  return <h1 style={titleStyle}>{titleText}</h1>;
};
