import React, {Component} from "react";
import './Pokecard.css';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        return (
            <div className="pokecard">
                 <div className="pokecard-title">{this.props.name}</div>
                 <div className="pokecard-img">
                    <img src={imgSrc} alt={this.props.name} />
                 </div>
                    <div className="pokecard-data">TYPE: {this.props.type}</div>
                    <div className="pokecard-data">EXP: {this.props.base_exp}</div>
            </div>
           

        );
    }
}

export default Pokecard;