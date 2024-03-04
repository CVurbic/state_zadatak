// App.js
import React from 'react';
import ColoredButton from './components/ColoredButton';

const App = () => {
  return (
    <div>
      <ColoredButton color="red">Red Button</ColoredButton>
      <ColoredButton color="blue">Blue Button</ColoredButton>
      <ColoredButton color="green">Green Button</ColoredButton>
    </div>
  );
};

export default App;
