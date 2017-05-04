import React from 'react';
import Title from '../../icons/Logo-Type-Horizontal.png';

class HomeTextArea extends React.Component {
  render () {
    return (
      <div>
        <img className="title" src={Title}/>
        <p className="sub-title">If the red flag flies, it’s probably lies.</p>
      </div>
    );
  }
}

export default HomeTextArea;