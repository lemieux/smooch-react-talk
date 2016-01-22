class ContactForm extends Component {
  onNameChange(name) {
    this.setState({
      name
    });
  }

  render() {
    return (
      <form>
        <FormField type="text"
                   onChange={ this.onNameChange } />
      </form>
      );
  }
}
