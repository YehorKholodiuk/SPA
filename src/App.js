import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Todo from "./todo";
import Counter from "./Counter";
import Kanban from "./kanban";

function App() {
    return (
        <div>

            <li><Link to="/">Home</Link></li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/todo">To-Do</Link>
            </li>
            <li>
                <Link to="/counter">Counter</Link>
            </li>

            <li>
                <Link to="/kanban">Kanban</Link>
            </li>


            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="todo" element={<Todo/>}/>
                <Route path="counter" element={<Counter/>}/>
                <Route path="kanban"  element={<Kanban/>}/>
            </Routes>
        </div>
    );
}

export default App;
