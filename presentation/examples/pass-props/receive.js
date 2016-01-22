class SaveButton extends Component {
  render() {
    return (
      <div className="button-wrapper">
        <button onClick={ this.props.onClick }>
          { this.props.label }
        </button>
      </div>
      );
  }
}
