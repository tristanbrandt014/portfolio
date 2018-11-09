import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import * as navigation from './actions';

export interface INavigationState {
  readonly open: boolean;
}

export type NavigationAction = ActionType<typeof navigation>;

const initialState: INavigationState = {
  open: false
};

export default combineReducers<INavigationState, NavigationAction>({
  open: (state: boolean = initialState.open, action) => {
    switch (action.type) {
      case getType(navigation.toggle): {
        return action.payload;
      }
      default: {
        return state;
      }
    }
  }
});
