import React, { Component } from 'react';

function SaveButton(props) {
  return (
    <div className="button-wrapper">
      <button onClick={ props.onClick }>
        { props.label }
      </button>
    </div>
    );
}

export class ClickCounter extends Component {
  state = {
    count: 0
  };

  onClick = () => {
    this.setState({count: this.state.count + 1});
  };

  render() {
    return (
      <div style={{marginTop: 200 }}>
        <SaveButton label="Click me!"
                    onClick={ this.onClick } />
        <p>
          You clicked { this.state.count } times on it
        </p>
      </div>
      );
  }
}
