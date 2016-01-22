render() {
  return (
    <div>
      <SaveButton label="Click me!"
                  onClick={ this.onClick } />
      <p>
        You clicked { this.state.count } times on it
      </p>
    </div>
    );
}
