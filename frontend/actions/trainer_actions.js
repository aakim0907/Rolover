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
export const fetchTrainers = filters => dispatch => (
  APIUtil.fetchTrainers(filters).then(
    trainers => (dispatch(receiveTrainers(trainers)))
  )
);

export const fetchTrainer = trainer => dispatch => (
  APIUtil.fetchTrainer(trainer).then(
    trainer => (dispatch(receiveTrainers(trainer)))
  )
);
