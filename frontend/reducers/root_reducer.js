import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import trainerReducer from './trainer_reducer';
import reviewReducer from './review_reducer';

 const rootReducer = combineReducers({
   session: sessionReducer,
   trainers: trainerReducer,
   reviews: reviewReducer
 });

 export default rootReducer;
