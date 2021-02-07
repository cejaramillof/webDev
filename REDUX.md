# Redux

## The single immutable state tree
Dont care if your app is really simple one like a counter example, or a complex with a lot of UI, and change of state, youre going to represent the whole state of your application as a single JSObject

## That the state tree is read only
You cannot modify or write to it. Instead, The only way to change the state tree is by dispatching an action.

### Actions
All actions these are all plain objects, describing what happens in a wrap. And is the minimal representation of the change to that data.
The structure of the action object is up to you. The only requirement is that it has a tie propertie, which is not undefined. We suggested using strings, because they are serializable.


Just like the state is the minimal representation of the data in your app

## the third and the last principle of Redux
To describe state mutations, you have to write a function that takes the previous state of the app, the action being dispatched, and returns the next state of the app. This function has to be pure. This function is called the "Reducer."

### Pure Functions
The pure functions are the functions whose returned value depends solely on the values of their arguments
Dont have any observable side effects, such as a network, database calls or any out this function. The pure functions just calculate the new value. You can be confident that if you call the pure function with the same set of arguments, you're going to get the same returned value. They are predictable

Also pure functions do not modify the values passed to them. For example, if accepts an array does not overwrite the items inside this array. Instead, it returns a new array by using items map.

Side effects:
- Api calls
- LOGS
- Data mutation
- Dom manipulation
- Math.random
- Date.now()

```javascript
function square(x) {
  return x * x;
}
function squareAll(items) {
  return items.map(square);
}
```

```javascript
function square(x) {
  updateXInDatabase(x);
  return x*x;
}
function squareAll(items) {
  for (let i = 0; i < items.length; i++) {
    items[i] = square(items[i]);
  }
}
```


### Impure functions
May call the dtabase or the network, they may have side effects, they maay operate on the DOM, and they may override the values that you pass to them. This is going to be an important distinction because some of the functions that you're going to write in Redux have to be pure, and you need to be mindul of that.

### Reducer
```javascript
function couter(state, action) {

  if (typeof state == 'undefined') {
    return 0; // initial state of app
  }

  if (action.type === 'INCREMENT'){
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
}
```

```javascript
const couter = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// Michael Jackson's Expect library
expect(
  counter(0, { type: 'INCREMENT' })
).toEqual(1);

expect(
  counter(2, { type: 'DECREMENT' })
).toEqual(1);

expect(
  counter(1, { type: 'SOMETHING_ELSE' })
).toEqual(1);

expect(
  counter(undefined, { type: 'SOMETHING_ELSE' })
).toEqual(0);
```

### Store
Has three important methods
1. getState (retrieves current state of redux store)
2. dispatch (for dispatch actions to change the state)
3. subscribe (callback with redux store, will called any time an action has been dispatched)


```javascript
const { creatrStore } = Redux;
// var createStore = Redux.createStore;
// import { createStore } from 'redux';

const store = createStore(counter);
console.log(store.getState()); // 0 - initial state
store.dispatch({type: 'INCREMENT' }) // dispatch action
console.log(store.getState()); // 1

store.subscribe(() => {
  // not show initial state, because only will executed on changes
  document.body.innerText = store.getState();
})

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' }) // dispatch action
})
```

```javascript
const render = () => {
  document.body.innerText = store.getState();
}
store.subscribe(render) // call render sending return of subscribe
render(); // to show initial state
```

```javascript
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener())
  }

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  dispatch({}) // to dispatch initial state

  return { getStatte, dispatch, subscribe }
}
```

### Expect Library to make test assertions, and deep-Freeze to make sure that my code is free of mutations.
```javascript
const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
  <h1>{value}</h1>
  <button onClick={onIncrement}>+</button>
  <button onClick={onDecrement}>-</button>
  </div>
);

const render = () => {
  ReactDOM.render(
    <Counter
    value={store.getState()}
    onIncrement={() =>
      store.dispatch({
        type: 'INCREMENT'
      })
    }
    onDecrement={() =>
      store.dispatch({
        type: 'DECREMENT'
      })
    }
    />
    document.getElementById('root')
  )
}
```


### Using React
```javascript
const addCounter = (list) => {
  return [...list, 0];
  // return list.concat([0]);
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
};
testAddCounter();

const removeCounter = (list, index) => {
  // list.splice(index, 1); // dont work because mutate state
  // return list.slice(0, index).concat(list.slice(index + 1)) // old version of ecma
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];
};

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  deepFreeze(listBefore);

  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
};
testRemoveCounter();

const incrementCounter = (list, index) => {
  // list[index]++; // dont work because mutate state
  // return list.slice(0, index).concat([list[index] + 1]).concat(list.slice(index + 1)) // old version of ecma
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
};

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];

  deepFreeze(listBefore);

  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter);
};
testIncrementCounter();

console.log('All tests passed.') || displayInPreview('All tests passed.');


// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}

// Function exported from deep-freeze lib
function deepFreeze (o) {
  if (o===Object(o)) {
    Object.isFrozen(o) || Object.freeze(o)
    Object.getOwnPropertyNames(o).forEach(function (prop) {
      prop==='constructor'||deepFreeze(o[prop])
    })
  }
  return o
}
```