//  creating a reducer
import * as actions from "./actionTypes";

// [] state
let lastId = 0;

function reducer(state = [], action) {
    switch (action.type) {
      case actions.BUG_ADDED:
        return [
          ...state,
          {
            id: ++lastId,
            description: action.payload.description,
            resolved: false,
          },
        ];

      case actions.BUG_REMOVED:
        return state.filter((bug) => bug.id !== action.payload.id);
      default:
        return state;
    }
    
}

export default reducer;