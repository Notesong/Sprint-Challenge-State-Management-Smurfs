1. What problem does the context API help solve?

Context API helps solve the combersome use of prop drilling by allowing for application wide state that can be accessed by any component in the application.  Components can still have their own local state for use in forms, etc, but will also have access to this application state so that application-wide changes can be easily made.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: Actions contain properties related to a desired action and can be utilized before a dispatch is made to the reducer. Using middleware, async Axios calls, etc, can be made in the actions file.

Reducers: The reducer is part of a state management pattern that allows for pure functions to be written.  This allows for state changes that are predictable and self-contained in the reducer since payloads are sent in and an object is returned by the reducer.  Reducers are written so that no outside functions alter what happens in the reducer.

Store: A store is known as 'a single source of truth' in a Redux application because the store contains the application level state which is state that can be accessed by any component.  The store keeps track of the data inside this application state and handles any changes made to the state for the application.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is when the whole application uses the state that's contained in a store. This can be done with context API and Redux.  Component state is when the state is located in a component.  This component state can be sent to other components through props but then prop drilling must be used.  Component state is good for when a particular state is only needed by one component, such as for a form.  Otherwise application state can be used to make state easily available to the entire application.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-Thunk is middleware that lets you do asynchronous operations inside action creators, such as API calls.  It changes the action-creators by allowing for those asynchronous API calls when normally Redux is synchronous.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

At this point, I prefer Redux because I became more familiar with it while doing the exercises.  I'll be working to gain greater proficiency with context API in the next few lessons.