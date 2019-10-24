import { INFO, INFO_IN_FAILED } from './../constants/actions';

const initialState = {
    balance: 0,
    name: '',
    stocks: []
  };
  
  export default function info(state = initialState, action) {
    switch (action.type) {
      case INFO:
        return {
          ...state,
          name: action.payload.name,
          balance: action.payload.balance,
          stocks: action.payload.stocks
        };
      case INFO_IN_FAILED:
        return {
          ...state
        };
      default:
        return state;
    }
  }
  