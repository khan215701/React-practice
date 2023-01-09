import React, { Component } from 'react';
import Choice from './helper';
import Coin from './Coin';

class CoinFlipper extends Component {
    static defaultProps = {
        coins : [
             { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
             { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            curSide : null,
            nFlips : 0,
            nHeads : 0,
            nTails : 0
        }
        this.eventHandler = this.eventHandler.bind(this);
    }
    flipCoin(){
        let newCoin = Choice(this.props.coins)
        this.setState(st =>{
            return {
            curSide : newCoin,
            nFlips : st.nFlips + 1,
            nHeads : st.nHeads + (newCoin.side === "heads" ? 1 : 0),
            nTails : st.nTails + (newCoin.side === "tails" ? 1 : 0)
            }
    })
}
    eventHandler(e){
        this.flipCoin()
    }
 render() {
    return(
        <div className='CoinContainer'>
            <h2>Let's Flip A Coin!</h2>
            {this.state.curSide && <Coin info={this.state.curSide} />}
            <p>
             Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "}
             heads and {this.state.nTails} tails.
            </p>
            <button onClick={this.eventHandler}>Flip It</button>
        </div>
    )
 }
}

export default CoinFlipper;