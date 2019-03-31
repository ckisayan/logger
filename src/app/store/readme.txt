1.  start w/reducer to export function (this function will be triggered when ever action is dispatched)

2.  function will have two arguments (state and action)

3. first time app runs there is no initial state but you can initialize to some object

4.  this function must returns new state (since old state is immutable)

5.  typically in this function you'll have switch case and based on action type you do something to the state before returning new state

Next...

1. create your action type script file (some people combine reducer and action file to one)
2. this class needs to implement action, NgRx forces type property
3.  usually you may need payload property but not all actions will need payload


Next
1.  You need to register in your app module in imports
2. 

