1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

map, filter, and reduce
reduce

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

App state is global and what we would put in a react 'store' so it can be passed down to other components,
component state is local to the component and should not be needed by any other component so it is self contained.


1.  What is middleware?

middleware sits between the dispatch and reducers, they can alter the dispatch or run some code before getting to the reducers


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

it a middleware that lets us  call action creators that return a function instead of an action object with action creators. good for async functions.

1.  Which `react-redux` method links up our `components` with our `redux store`?

{ connect }


