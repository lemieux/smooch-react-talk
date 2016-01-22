import React, { Component } from 'react';
import styles from '../../styles';

export class RefExample extends Component {
  state = {
    text: ''
  };
  onClick = () => {
    this.setState({
      text: this.refs.inputName.value
    });
  };

  render() {
    return (
      <div style={{marginTop: 200, textAlign: 'center' }}>
        <input style={styles.input} ref="inputName" />
        <button style={styles.button} onClick={ this.onClick }>
          Update
        </button>
        <p>
          Text: { this.state.text }
        </p>
      </div>
      );
  }
}
