import React, { Component } from 'react';
import styles from '../../styles';

export class Parent extends Component {
  render() {
    return (
      <div className='parent-class'
           style={ {  marginTop: 200, border: '1px red solid'} }>
        <p>
          I'm the parent wrapper!
        </p>
        { this.props.children }
      </div>
      );
  }
}

export class ChildrenExample extends Component {
  render() {
    return (
      <Parent>
        <p style={ {  border: '1px white solid'} }>
          I'm a child
        </p>
      </Parent>
      );
  }
}
