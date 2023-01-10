import React, {Component} from "react";
import {randomWord} from "./Word"
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
class Hangman extends Component {
    static defaultProps = {
        maxWrong: 6,
        images: [img0, img1, img2, img3, img4, img5, img6]
      };
    constructor(props) {
        super(props);
        this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
        this.reset = this.reset.bind(this);
    }

    reset() {
        this.setState({
          nWrong: 0,
          guessed: new Set(),
          answer: randomWord()
        });
      }
    
    guessHandler = (evt) => {
        let word = evt.target.value;
        this.setState( st => ({
            guessed : st.guessed.add(word),
            nWrong : st.nWrong + (st.answer.includes(word) ? 0 : 1)
        }))

    }
    
    hangButton = () => {
        return "abcdefghijklmnopqrstuvwxyz".split("").map((btn) =>
            <button key={btn} value= {btn} onClick={this.guessHandler} disabled={this.state.guessed.has(btn)}>
                {btn}
            </button>

        )
    }

    guessedWord=() => {
        return this.state.answer
          .split("")
          .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
      }

    render() {
        let gamestate = this.hangButton()
        let gameword = this.guessedWord()
        const altText = `${this.state.nWrong}/${this.props.maxWrong} guesses`;
        const gameOver = this.state.nWrong >= this.props.maxWrong;
        const isWinner = this.guessedWord().join("") === this.state.answer;
        if (isWinner) gamestate = "You Win!";
        if (gameOver) gamestate = "You Lose!";
        return (
            <div className="Hangman">
                <h1>Hangman Game</h1>
                <img src={this.props.images[this.state.nWrong]} alt={altText} />
                <p>Guessed Wrong: {this.state.nWrong}</p>
                <p className="Hangman-word">{gameword}</p>
                <p className='Hangman-btns'>{gamestate}</p>
                <button id='reset' onClick={this.reset}>
                Restart?
                </button>
            </div>
                )
     }
}

export default Hangman;