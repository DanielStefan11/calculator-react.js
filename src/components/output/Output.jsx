import React from 'react';
// CSS
import './Output.css';

export default function Output(props) {
  return <div className='output'>{props.children}</div>;
}
