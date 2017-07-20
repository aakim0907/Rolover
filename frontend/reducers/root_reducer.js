import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import trainerReducer from './trainer_reducer';

 const rootReducer = combineReducers({
   session: sessionReducer,
   trainers: trainerReducer
 });

 export default rootReducer;
