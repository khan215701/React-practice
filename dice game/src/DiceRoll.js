import React, { Component} from 'react';
import Dice from './Dice';
import './DiceRoll.css';


class DiceRoll extends Component {
    static defaultProps = {
    side : ['one', 'two', 'three', 'four', 'five', 'six']
    };
    constructor(props) {
        super(props);
        this.state = {
           die1 : 'one', die2 : 'two',  rolling : false,
        }
        this.roll = this.roll.bind(this);
    }
    roll(){
        let firstface = this.props.side[Math.floor(Math.random() * this.props.side.length)];
        let secondface = this.props.side[Math.floor(Math.random() * this.props.side.length)];

        this.setState({die1: firstface, die2: secondface, rolling: true});

    setInterval(() => {
        this.setState({rolling: false})
    },1000)
    }
    render() {
        return(
            <div className='DiceRoll'>
                <div className='DiceRoll_container'>
                    <Dice face={this.state.die1}  rolling = {this.state.rolling}/>
                    <Dice face={this.state.die2}  rolling = {this.state.rolling}/>
                </div>
                <button onClick={this.roll} disabled = {this.state.rolling}>
                   {this.state.rolling ? 'Rolling': 'Roll Dice'}
                </button>

            </div>
        )
    }
}

export default DiceRoll;