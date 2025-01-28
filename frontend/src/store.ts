import { createStore } from 'redux';
import rootReducer from './reducers'; // Adjust the path as necessary

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store; 