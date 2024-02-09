
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import RockPaperScissors from "./RockPaperScissors";
import Todo from "./todo";
import Counter from "./Counter";
import cards from "./Cards";
import GitSearchEngine from "./GitSearchEngine";
import Skills from "./Skills";
import WeatherApi from "./weatherApi";
import React from "react";
import Cards from "./Cards";


function App() {
    return (
        <div>

            <li><Link to="/">Home</Link></li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/skills">Skills</Link>
            </li>
            <li>
                <Link to="/rockpaperscissors"> Rock Paper Scissors </Link>
            </li>
            <li>
                <Link to="/weather"> WeatherToday </Link>
            </li>


            <li>
                <Link to="/todo">To-Do</Link>
            </li>
            <li>
                <Link to="/counter">Counter</Link>
            </li>

            <li>
                <Link to="/cards">Memory game</Link>
            </li>


            <li>
                <Link to="/GitSearchEngine">GitSearchEngine</Link>
            </li>


            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="skills" element={<Skills/>}/>
                <Route path="rockpaperscissors" element={<RockPaperScissors/>}/>
                <Route path="cards" element={<Cards/>}/>

                <Route path="weather" element={<WeatherApi/>}/>
                <Route path="todo" element={<Todo/>}/>
                <Route path="counter" element={<Counter/>}/>

                <Route path="GitSearchEngine" element={<GitSearchEngine/>}/>
            </Routes>
        </div>
    );
}

export default App;
