import { combineReducers } from 'redux';
import { navigationReducer } from './modules/navigation';

const rootReducer = combineReducers({
  navigation: navigationReducer
});

export const createRootReducer = (history: any) =>
  combineReducers({
    history,
    navigation: navigationReducer
  });

export default rootReducer;
