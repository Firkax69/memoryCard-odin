import { useState,useEffect } from "react";

function Cards({pokemonId, onClick}) {
    const [poke, setPoke] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            const data = await response.json();
            setPoke(data);
        };

        fetchData()
    }, [pokemonId])

    return (
        <>
            {/* css needs adding to className below */}
            <div className="" onClick={onClick}>
                <h1 className="">{poke.name}</h1>

                {poke.sprites && poke.sprites.front_shiny ? (
                    <img src={poke.sprites.front_shiny} alt={poke.name} className="" />
                ) : (
                    <div>No image available</div>
                )}
            </div>
        </>
    )
}

export default Cards;