import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Actions
const SAVE_STORE_DATA = 'global/SAVE_STORE_DATA';
const FETCH_USER_DATA_STARTED = 'auth/FETCH_USER_DATA_STARTED';
const FETCH_USER_DATA_FINISHED = 'auth/FETCH_USER_DATA_FINISHED';
const FETCH_USER_DATA_ERROR = 'auth/FETCH_USER_DATA_ERROR';
const FETCH_SUBSCRIPTION_DATA_STARTED =
  'subscriptions/FETCH_SUBSCRIPTION_DATA_STARTED';
const FETCH_SUBSCRIPTION_DATA_FINISHED =
  'subscriptions/FETCH_SUBSCRIPTION_DATA_FINISHED';
const FETCH_SUBSCRIPTION_DATA_ERROR =
  'subscriptions/FETCH_SUBSCRIPTION_DATA_ERROR';

// https://api.plot.ly/v2/subscriptions

const initial = {
  loaded: false,
  subscriptions: {
    error: null,
    fetching: false,
    loaded: false,
    lastFetched: null,
    data: null,
  },
};

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case SAVE_STORE_DATA:
      return {
        ...state,
        data: action.data,
        loaded: true,
      };
    case FETCH_SUBSCRIPTION_DATA_STARTED:
      return {
        ...state,
        subscriptions: {
          ...state.subscriptions,
          fetching: true,
        },
      };
    case FETCH_SUBSCRIPTION_DATA_FINISHED:
      return {
        ...state,
        subscriptions: {
          ...state.subscriptions,
          fetching: false,
          lastFetched: Date.now(),
          loaded: true,
          data: action.data,
        },
      };
    case FETCH_SUBSCRIPTION_DATA_ERROR:
      return {
        ...state,
        subscriptions: {
          ...state.subscriptions,
          fetching: false,
          error: action.error,
        },
      };
    default:
      return state;
  }
}

// Action Creators
export const saveStoreData = data => ({ type: SAVE_STORE_DATA, data });
export const fetchSubscriptionData = () => ({
  type: FETCH_SUBSCRIPTION_DATA_STARTED,
});
export const fetchSubscriptionDataFinished = data => ({
  type: FETCH_SUBSCRIPTION_DATA_FINISHED,
  data,
});
export const fetchSubscriptionDataError = error => ({
  type: FETCH_SUBSCRIPTION_DATA_ERROR,
  error,
});

export const initStore = (initialState = initial) =>
  createStore(reducer, initialState, composeWithDevTools());
