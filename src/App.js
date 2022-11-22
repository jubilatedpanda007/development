import "./App.css";
import { useState } from "react";
import pokemonData from "./assets/pokemon-data.json";
import PokemonCard from "./components/PokemonCard";
import FilterBar from "./components/FilterBar";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
pokemonData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState(new Map());
  const [total, setTotal] = useState(0);
  // state used for filtering
  const [type, setType] = useState("All");
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  // selectFilterType - sets the state to the selected type, function passed to the onSelect event handler of HTML buttons
  // matchesFilterType - creates a filtering condition

  const addToCart = (name, price) => {  
    // create a new map to hold the new cart state
    let newCart = new Map(cart);
    // if the item is already in the cart, increment the count
    if (newCart.has(name)) {
      newCart.set(name, newCart.get(name) + 1);
    } else {
      // otherwise, add the item to the cart with a count of 1
      newCart.set(name, 1);
    }
    console.log(newCart);
    // set the cart state to the new cart
    setCart(newCart);
    // set the total cost of the cart
    setTotal(total + price);
  }

  return (
    <div className="App">
      <div className="container">

      <div className="filter-bar-container">
        <FilterBar
          type={type}
          setType={setType}
        />
      </div>

        <div className="bakery-container">
          <h2 className="header">Pokémon Evolution</h2>
          <div className="bakery-items">
            {pokemonData.map((item, index) => (
              <PokemonCard 
                key={index}
                item={item}
                addToCart={addToCart}
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
