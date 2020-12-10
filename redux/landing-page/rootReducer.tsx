import {combineReducers} from 'redux';
import landingPageReducer from './landing-page.reducer';

const rootReducer = combineReducers({
  landingPageReducer,
});

export default rootReducer;