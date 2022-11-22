// TODO: create a component that displays a single bakery item
import "../App.css"

const PokemonCard = ({key, item, addToCart}) => {

    return (
        <div className="card-container" key={key}>
            <img className="preview" src={item.image}></img>
            <div className="info">
                <h3>{item.name}</h3>
                <p>{item.number}</p>
            </div>
            <div className="card-display">
                <p><b>hp:</b>{item.hp}</p>
                <p><b>attack:</b>{item.attack}</p>
                {/* types is an array of strings of the types */}
                <p><b>types:</b>{item.types.join(", ")}</p>
                <button className="purchase" onClick={() => addToCart(item.name, item.price)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default PokemonCard;