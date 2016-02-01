import React, { Component } from 'react';

export class ValidationExample extends Component {
  static propTypes = {
      optionalArray: React.PropTypes.array,
      optionalBool: React.PropTypes.bool,
      optionalFunc: React.PropTypes.func,
      optionalNumber: React.PropTypes.number,
      optionalObject: React.PropTypes.object,
      optionalString: React.PropTypes.string,
      optionalNode: React.PropTypes.node,
      optionalElement: React.PropTypes.element,
      optionalMessage: React.PropTypes.instanceOf(Message),
      optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),
      optionalUnion: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
        React.PropTypes.instanceOf(Message)
      ]),
      optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),
      optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),
      optionalObjectWithShape: React.PropTypes.shape({
        color: React.PropTypes.string,
        fontSize: React.PropTypes.number
      }),
      requiredFunc: React.PropTypes.func.isRequired,
      requiredAny: React.PropTypes.any.isRequired,
      customProp: function(props, propName, componentName) {
        if (!/matchme/.test(props[propName])) {
          return new Error('Validation failed!');
        }
    }};
}
