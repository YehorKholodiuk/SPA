import './App.css';
import {useState} from "react";

function App() {
    const [userChoice, setUserChoice] = useState('')
    const [compChoice, setCompChoice] = useState('')
    const [result, setResult] = useState('')

    const choices = ['rock', 'paper', 'scissors']

    const randomChoice = () => {
        const randomIndex = Math.floor(Math.random() * choices.length)
        return choices[randomIndex]
    }

    const whoIsWinner = (user, computer) => {

        if (user === computer) return 'Draw!';

        if (
            (user === 'rock' && computer === 'scissors') ||
            (user === 'scissors' && computer === 'paper') ||
            (user === 'paper' && computer === 'rock')
        ) {
            return "You win!";
        } else {

            return 'Computer win!'
        }
    }
    const game = (choice) => {
        const compChoice = randomChoice();
        setUserChoice(choice)
        setCompChoice(compChoice)
        setResult(whoIsWinner(choice, compChoice))
    }

    const container = {
        padding: 12,
        background: 'red'
    }
    return (
        <div className ="App">
            <h1 >Rock, scissors, paper</h1>
            <div>
                <button onClick ={() => game('rock')}>Rock</button>
                <button onClick ={() => game('scissors')}>Scissors</button>
                <button onClick ={() => game('paper')}>Paper</button>

            </div>
            <div>
                <p> your choice: {userChoice}</p>
                <p>Computer Choice: {compChoice}</p>
                <p>Result:{result}</p>


            </div>
        </div>
    );
}

export default App;
