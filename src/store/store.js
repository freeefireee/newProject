import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/campaignReducer'; 

const customMiddleware = store => next => action => {
  next(action);
};

const store = createStore(
  rootReducer,
  applyMiddleware(customMiddleware)
);

export default store;
