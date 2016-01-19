import React, { Component } from 'react';
import styles from './styles';

export class ContactForm extends Component {
  state = {
    firstName: 'Anonymous'
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
            First name
          </label>
          <input ref="firstName"
                 defaultValue={ this.state.firstName }
                 onChange={ this.onChange } />
          <p>
            Your first name is { this.state.firstName }
          </p>
        </div>
      </form>
      );
  }
}
