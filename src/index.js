//  redux architecture
// use functional programming 
// dont use mutuable state 
// cant write code like !=  =>  store.currentUser = {name:"mosh"}

//to update store we use reducer 
// reducer {event handler}

// store => is your state mangement by redux 

//actions {event} => the functions that u wanna do on your store to update it 
// it describe  {what u wanna do}  OR  {what just happened} ex. user.LogedIn, logedOut


//store has dispatch method to take action and forward to reducer 
// reducer handel the state and return changes to store 
//then store change the state internally ,
// ui componets takes the data and refresh themselves
//we dispatch actions in one entrance to control 
//what should happen when user perfome an action
// so we can log every actions and how the state change

function reducer(store , action) {
    // return updated store 
    const updated = {...store};
}
