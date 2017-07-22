import * as APIUtil from '../util/trainer_api_util';

export const RECEIVE_TRAINERS = 'RECEIVE_TRAINERS';
export const RECEIVE_TRAINER = 'RECEIVE_TRAINER';

// sync action
export const receiveTrainers = trainers => ({
  type: RECEIVE_TRAINERS,
  trainers
});

export const receiveTrainer = trainer => ({
  type: RECEIVE_TRAINER,
  trainer
});

// async action
export const fetchTrainers = () => dispatch => (
  APIUtil.fetchTrainers().then(
    trainers => (dispatch(receiveTrainers(trainers)))
  )
);
// argument filter removed

export const fetchTrainer = id => dispatch => (
  APIUtil.fetchTrainer(id).then(
    trainer => (dispatch(receiveTrainer(trainer)))
  )
);
