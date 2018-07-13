import _ from 'lodash';
import * as types from '../actions/sidebar.action';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  isCollapsed: false
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.EXPAND_SIDEBAR:
      return state.merge({
        isCollapsed: false
      });
    case types.COLLAPSE_SIDEBAR:
      return state.merge({
        isCollapsed: true
      });
    default:
      return state;
  }
}

export function getSidebarStatus(state) {
  return state.sidebar.isCollapsed
}