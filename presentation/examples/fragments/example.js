import React, { Component } from 'react';

export class FragmentsExample extends Component {
  render() {
    const items = ['item 1', 'item 2', 'item 3'];

    const fragment = items.map((item, index) => {
      return <li key={ index }>
               { item }
             </li>;
    });

    return (
      <ul style={ {  textAlign: 'left'} }>
        { fragment }
      </ul>
      );
  }
}
