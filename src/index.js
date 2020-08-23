//  defining the actions

// add a bug 
// mark as resolved 
// delete a bug 

{
    type: "bugAdded",
    payload: {
         description:"..."
    }
   
}

{
    type: "bugRemoved",
    payload: {
         id: 1
    }
   
}

// type is the name of action 
// payload is the data that u want to change in reducer