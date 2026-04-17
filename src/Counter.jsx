import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter-container">
      <h2>Counter – useReducer</h2>
      <p className="counter-value">{state.count}</p>
      <div className="counter-buttons">
        <button onClick={() => dispatch({ type: 'decrement' })}>− Decrement</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        <button onClick={() => dispatch({ type: 'increment' })}>+ Increment</button>
      </div>
    </div>
  );
}
