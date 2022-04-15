import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/counter/Counter';
import Todo from './components/todo/Todo';

function App() {
  const [toggle, setToggle] = useState(true)
  return (
    <div className="App">
    <Link to={toggle?"/counter":"/"} onClick={()=>setToggle(!toggle)} className="toggle-button">{toggle?"Counter App >>":"<< Todo App"}</Link>
    <Routes>
    <Route path="/" element={<Todo/>}/>
    <Route path="/counter" element={<Counter/>}/>
     
     
     </Routes>
    </div>
  );
}

export default App;
