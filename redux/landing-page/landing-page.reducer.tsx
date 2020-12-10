import {landingPage} from './../../lib/mirage/landingPageMock';
import {GET_CONTENT} from './landing-page.action';

const landingPageReducer = (state = landingPage, action) =>{
  //console.log(state.landingPage);
  switch(action.type){
    case GET_CONTENT:
      return {...state.landingPage};
    default:
      return {...state.landingPage};
  }
};

export default landingPageReducer;