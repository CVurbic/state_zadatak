// ColoredButton.js
import React from 'react';
import withColor from './withColor';

const Button = ({ style, children }) => {
  return <button style={style}>{children}</button>;
};

const ColoredButton = withColor(Button);

export default ColoredButton;
