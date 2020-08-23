import * as actions from "./actionTypes";

// make action creator
export function bugAdded(description) {
    return {
    type: actions.BUG_ADDED ,
    payload: {
        description
    }
}
}

// another way to make action creator
export const bugRemoved = (id) => ({
    type: actions.BUG_REMOVED,
    payload: {
      id,
    },
});

export const bugResolved = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id,
  },
});