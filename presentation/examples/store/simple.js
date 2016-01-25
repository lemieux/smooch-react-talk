import { createStore } from 'redux'
import { todoReducer } from '../todo-reducer';

// this is the simplest form of store
export const store = createStore(todoReducer);


store.getState()

// outputs ->
// {
//   todos: [...]
// }
