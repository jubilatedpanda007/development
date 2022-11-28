import "./App.css";
import { useState } from "react";
import pokemonData from "./assets/pokemon-data.json";
import PokemonCard from "./components/PokemonCard";
import Aggregator from "./components/Aggregator";
import FilterBar from "./components/FilterBar";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
pokemonData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [team, setTeam] = useState([]);
  const [attack, setAttack] = useState(0);
  const [hp, setHp] = useState(0);
  const [type, setType] = useState("all");
  const [evolution, setEvolution] = useState("all");

  // state for sorting, there is sorting by HP and attack
  const [sort, setSort] = useState("number");

  /**
   * Creates a filter condition for the pokemon data
   */
  const matchesFilterType = (pokemon) => {
    if (((pokemon.types.includes(type)) || (type === "all")) && ((evolution === pokemon.evolution) || (evolution === "all"))) {
      return true;
    } else {
      return false;
    }
  };

  /**
   *  Filters the pokemonData by the type selected in the filter bar
   */
  const filteredPokemon = pokemonData.filter(matchesFilterType);

  /**
   * Sorts the pokemon by the selected sort type
   */
  const sortedPokemon = filteredPokemon.sort((a, b) => {
    if (sort === "number") {
      return parseInt(a.number) - parseInt(b.number);
    } else if (sort === "hp") {
      return parseInt(b.hp) - parseInt(a.hp);
    } else if (sort === "attack") {
      return parseInt(b.attack) - parseInt(a.attack);
    }
  });

  /**
   *  Adds or removes a pokemon from the team
   */
  const togglePokemon = (pokemon) => {  
    let newTeam = [...team];
    let newAttack = attack;
    let newHp = hp;
    if (newTeam.includes(pokemon)) {
      // remove pokemon from team
      newTeam = newTeam.filter((item) => item !== pokemon);
      newAttack -= parseInt(pokemon.attack);
      newHp -= parseInt(pokemon.hp);
    } else {
      // add pokemon to team
      newTeam.push(pokemon);
      newAttack += parseInt(pokemon.attack);
      newHp += parseInt(pokemon.hp);
    }
    setTeam(newTeam);
    setAttack(newAttack);
    setHp(newHp);
  };

  return (
    <div className="App">
      <div className="container">
      <div className="filter-bar-container">
        <FilterBar
          type={type}
          setType={setType}
          evolution={evolution}
          setEvolution={setEvolution}
          sort={sort}
          setSort={setSort}
        />
        <Aggregator
          team={team}
          attack={attack}
          hp={hp}
        />
      </div>

        <div className="pokemon-container">
          <h2 className="header">Pokémon Evolution</h2>
          <div className="pokemon-cards">
            {sortedPokemon.map((pokemon, index) => (
              <PokemonCard 
                key={index}
                pokemon={pokemon}
                team={team}
                togglePokemon={togglePokemon}
              ></PokemonCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
