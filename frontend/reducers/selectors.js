import { values } from 'lodash';

export const selectAllTrainers = trainers => values(trainers.byID);
