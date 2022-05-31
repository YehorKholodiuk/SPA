import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [count,setCount] = useState(5)
    const plus = () => {
        setCount(count + 1)
    }
    const minus = () => {
        setCount(count - 1)
    }
    return (
        <div className="App">
            <button onClick={minus}>minus</button>
            {count}
            <button onClick={plus}>plus</button>
        </div>
    );
}

export default App;
