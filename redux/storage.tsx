import {createStore} from 'redux';
import rootReducer from './landing-page/rootReducer';

const store = createStore(rootReducer);

export default store;