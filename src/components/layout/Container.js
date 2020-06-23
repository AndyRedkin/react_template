import React from 'react';

const Container = (props) => {
  const {children} = props
  if (props.children) {
    return (<div className="container">
      {children}
    </div>);
  } else {
    return (<div>:(</div>)
  }
};

export default Container;