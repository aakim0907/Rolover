import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import trainerReducer from './trainer_reducer';
import reviewReducer from './review_reducer';
import bookingReducer from './booking_reducer';
import dogReducer from './dog_reducer';

 const rootReducer = combineReducers({
   session: sessionReducer,
   trainers: trainerReducer,
   reviews: reviewReducer,
   bookings: bookingReducer,
   dogs: dogReducer
 });

 export default rootReducer;
