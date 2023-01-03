import React, {Component} from "react";
import Pokecard from "./Pokecard";
import './Pokedox.css';

class pokedex extends Component {
    render() {
        let title;
        if (this.props.isWinner) {
            title = <h1 className="pokedox-winner"> Winner Hand</h1>
        }else {
            title = <h1 className="pokedox-loser"> Looser Hand</h1>

        }
        return (
            < div className="pokedox">
                {title}
                <h4>Total Experience:{this.props.total_experience}</h4>
                <div className="pokedox-cards">
                    {this.props.pokemon.map(p => (
                    <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} base_exp = {p.base_experience} />
                    ))}
                </div>
            </div>
        )
    }
}

export default pokedex;