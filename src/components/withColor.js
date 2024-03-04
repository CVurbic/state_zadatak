// withColor.js
import React from 'react';

const withColor = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      const style = {
        backgroundColor: this.props.color
      };

      return <WrappedComponent {...this.props} style={style} />;
    }
  };
};

export default withColor;
