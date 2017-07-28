import * as APIUtil from '../util/dog_api_util';

export const RECEIVE_DOGS = 'RECEIVE_DOGS';
export const RECEIVE_DOG = 'RECEIVE_DOG';
export const RECEIVE_DOG_ERRORS = 'RECEIVE_DOG_ERRORS';
export const CLEAR_DOG_ERRORS = 'CLEAR_DOG_ERRORS';

// sync action
export const receiveDogs = dogs => ({
  type: RECEIVE_DOGS,
  dogs
});

export const receiveDog = dog => ({
  type: RECEIVE_DOG,
  dog
});

export const receiveDogErrors = errors => ({
  type: RECEIVE_DOG_ERRORS,
  errors
});

export const clearDogErrors = () => ({
  type: CLEAR_DOG_ERRORS
});

// async action
export const fetchDogs = userId => dispatch => (
  APIUtil.fetchDogs(userId).then(
    dogs => (dispatch(receiveDogs(dogs)))
  )
);

export const createDog = dog => dispatch => (
  APIUtil.createDog(dog).then(
    newDog => (dispatch(receiveDog(newDog))),
    err => (dispatch(receiveDogErrors(err.responseJSON)))
  )
);
