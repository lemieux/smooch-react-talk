class FormField extends Component {
  render() {
    return (
      <div className="field-wrapper">
        <input type={ this.props.type }
               onChange={ this.props.onChange } />
      </div>
      );
  }
}
