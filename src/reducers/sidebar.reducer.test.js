import sidebarReducer from './sidebar.reducer';
import * as types from '../actions/sidebar.action';
import Immutable from 'seamless-immutable';

let initialState = null;

beforeEach(()=>{
  initialState = Immutable({
    isCollapsed: false
  });
})

describe('contact reducer', () => {
  it('should return the initial state', () => {
    expect(sidebarReducer(undefined, {})).toEqual({
      isCollapsed: false,
    });
  })

  it('should return isCollapsed true', () => {
    expect(sidebarReducer(initialState, {
      type: types.COLLAPSE_SIDEBAR
    })).toEqual({
      isCollapsed: true,
    });
  })

  it('should return isCollapsed false', () => {
    expect(sidebarReducer(initialState, {
      type: types.EXPAND_SIDEBAR
    })).toEqual({
      isCollapsed: false,
    });
  })
});