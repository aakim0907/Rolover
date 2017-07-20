import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import trainersReducer from './trainer_reducer';

 const rootReducer = combineReducers({
   session: sessionReducer,
   trainers: trainersReducer
 });

 export default rootReducer;
