import React, { Component } from 'react';
import styles from './styles';

export class ContactForm extends Component {
  state = {
    firstName: 'Rick'
  };

  onChange = (e) => {
    this.setState({
      firstName: e.target.value
    })
  };

  render() {
    return (
      <form>
        <div>
          <label style={ styles.label }>
            Name
          </label>
          <input ref="firstName"
                 defaultValue={ this.state.firstName }
                 onChange={ this.onChange } />
          <p>
            Your name is { this.state.firstName }
          </p>
        </div>
      </form>
      );
  }
}
