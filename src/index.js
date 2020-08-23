//  despatcing actions
import store from './store';

// action should have 2 props
store.dispatch({
    type: "bugAdded" ,
    payload: {
        description: "Bug1"
    }
});

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1,
  },
});

console.log(store.getState());