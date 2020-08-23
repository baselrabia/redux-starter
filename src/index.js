//  actions types
import store from './store';
import * as actions from './actionTypes';

// it called every time the state of the store got changed 
const unsubscribe = store.subscribe( () => {
    console.log("store changed!", store.getState());
})
// if you are using vanile js or jquery so when change it will refresh the view 
//but in redux and react it Rerender the view 
// ui elements just subscribed to the store 
//so they get notified when the state changed 

// action should have 2 props
store.dispatch({
    type: actions.BUG_ADDED ,
    payload: {
        description: "Bug1"
    }
});

unsubscribe();

//unsubscribe the ui elements  
// if we are in new page and ui elements not gonna be vaisable 
// we should unsubscribe them from the store 

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});


