import React, {Component} from 'react';
import Pokedex from './Pokedex';
class Pokegame extends Component {
    static defaultProps = {
        pokemon : [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
			{ id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
			{ id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
			{ id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
			{ id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
			{ id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
			{ id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
			{ id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    }
    render() {
        let handleList = []
        let handleList2 = [...this.props.pokemon]
        while(handleList2.length > handleList.length){
            let ramdomnum = Math.floor(Math.random() * handleList2.length);
            let randomPokman = handleList2.splice(ramdomnum, 1)[0];
            handleList.push(randomPokman);
            console.log(handleList);
        }
        let experience1 = handleList.reduce((exp, pokemon) => exp + pokemon.base_experience,0);
        let experience2 = handleList2.reduce((exp, pokemon) => exp + pokemon.base_experience,0);
       
        return(
            <div>
                <h1>Pokegame</h1>
                <Pokedex pokemon={handleList} total_experience = {experience1} isWinner = {experience1 > experience2}/>
                <Pokedex pokemon={handleList2} total_experience = {experience2} isWinner = {experience1 < experience2}/>
            </div>
        )
    }
}

export default Pokegame;