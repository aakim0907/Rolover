import { values } from 'lodash';

export const selectAllTrainers = trainers => values(trainers);

export const selectAllReviews = reviews => values(reviews);

export const selectAllBookings = bookings => values(bookings);
