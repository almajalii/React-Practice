import { useReducer, useState } from 'react';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        { id: crypto.randomUUID(), text: action.text, completed: false },
      ];
    case 'toggle':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'delete':
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

export default function Todo() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    dispatch({ type: 'add', text: trimmed });
    setInput('');
  };

  return (
    <div className="todo-container">
      <h2>Todo List – useReducer</h2>

      <div className="todo-input-row">
        <input
          type="text"
          value={input}
          placeholder="Add a new task…"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {todos.length === 0 && <p className="todo-empty">No tasks yet. Add one above!</p>}

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span onClick={() => dispatch({ type: 'toggle', id: todo.id })}>
              {todo.completed ? '✅' : '⬜'} {todo.text}
            </span>
            <button
              className="todo-delete"
              onClick={() => dispatch({ type: 'delete', id: todo.id })}
            >
              🗑
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
