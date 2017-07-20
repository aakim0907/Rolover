// import in container when mapSTateToPRop

import { values } from 'lodash';

export const selectAllTrainers = ({ trainers }) => values(trainers.byID);
