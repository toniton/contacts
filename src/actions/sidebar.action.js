import _ from 'lodash';

export const COLLAPSE_SIDEBAR = 'sidebar.COLLAPSE_SIDEBAR';
export const EXPAND_SIDEBAR = 'sidebar.EXPAND_SIDEBAR';

export function toggleSidebar(status) {
  return (dispatch, getState) => {
      if (getState().sidebar.isCollapsed) {
        dispatch({ type: EXPAND_SIDEBAR, isCollapsed: false });
      } else {
        dispatch({ type: COLLAPSE_SIDEBAR, isCollapsed: true });
      }
  };
}