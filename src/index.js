//  designing the store 

//store design for bugs so u will nedd bugs reducer 
//we focous here on single slice and the simple structure 
//that allow us to study redux 
//and see all it's build-in bugs in action 

[
  {
    id: 1,
    description: "",
    resolved: false,
  },
  {
    id: 2,
    description: "",
    resolved: false,
  },
  {
    id: 3,
    description: "",
    resolved: false,
  },

];

// in real app
// u can refactor this structre to something like that 
{
    bugs: [
        {
            id: 1,
            description: "",
            resolved: false
        }
    ],
    currentUser: {}
}