// in a component
onSubmit() {
  const value = this.refs.input.value;
  store.dispatch(addTodo(value));
}
