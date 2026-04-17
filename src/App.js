import { Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import Counter from './Counter';
import Todo from './Todo';
import Products from './Products';

function Home() {
  return (
    <div className="home">
      <h1>⚛️ React Practice</h1>
      <p>Explore the examples below to see React concepts in action.</p>
      <ul className="home-links">
        <li><Link to="/counter">Counter – useReducer</Link></li>
        <li><Link to="/todo">Todo List – useReducer</Link></li>
        <li><Link to="/products">Products – filter &amp; sort</Link></li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
        <NavLink to="/counter" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Counter</NavLink>
        <NavLink to="/todo" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Todo</NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Products</NavLink>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
