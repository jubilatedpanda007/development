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
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [team, setTeam] = useState([]);
  const [attack, setAttack] = useState(0);
  const [hp, setHp] = useState(0);
  // state used for filtering, types will be a set, and we 
  const [type, setType] = useState("all");
  // state for evolution filter
  const [evolution, setEvolution] = useState("all");

  // state for sorting, there is sorting by HP and attack
  const [sort, setSort] = useState("number");




  // selectFilterType - sets the state to the selected type, function passed to the onSelect event handler of HTML buttons
  // matchesFilterType - creates a filtering condition

  const matchesFilterType = (pokemon) => {
    if (((pokemon.types.includes(type)) || (type === "all")) && ((evolution === pokemon.evolution) || (evolution === "all"))) {
      return true;
    } else {
      return false;
    }
  };

  const filteredPokemon = pokemonData.filter(matchesFilterType);

  // not based on filteredPokemon, we need to sort based on the value of sort
  const sortedPokemon = filteredPokemon.sort((a, b) => {
    if (sort === "number") {
      // number is string, change to number
      return parseInt(a.number) - parseInt(b.number);
    } else if (sort === "hp") {
      // change to integer
      return parseInt(b.hp) - parseInt(a.hp);
    } else if (sort === "attack") {
      // change to integer
      return parseInt(b.attack) - parseInt(a.attack);
    }
  });

  const togglePokemon = (pokemon) => {  
    // function adds pokemon object to team, and then updates the team's attack and hp
    // if pokemon is already in team, remove it from team
    // remove its attack and hp from the team's attack and hp
    // if pokemon is not in team, add it to team
    // add its attack and hp to the team's attack and hp
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

        <div className="bakery-container">
          <h2 className="header">Pokémon Evolution</h2>
          <div className="bakery-items">
            {sortedPokemon.map((pokemon, index) => (
              <PokemonCard 
                key={index}
                pokemon={pokemon}
                number={pokemon.number}
                name={pokemon.name}
                image={pokemon.image}
                attack={pokemon.attack}
                hp={pokemon.hp}
                types={pokemon.types}
                team={team}
                togglePokemon={togglePokemon}
              ></PokemonCard>
            ))}
          </div>
        </div>


        {/* <div className="cart-container">
          <h2>Cart</h2>



          {cart.size === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              {[...cart].map(([name, count]) => (
                <p><b>{count}</b>x {name}</p>
              ))}

              <hr className="rule"></hr>

              <h3>Total: ${total.toFixed(2)}</h3>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
}

export default App;
