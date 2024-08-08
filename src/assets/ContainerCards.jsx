import { useState, useEffect } from "react";
import Cards from "./Cards";

function shuffleArray(array) {
    const shuffledArray = array.slice();
    for (let i = shuffleArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i+1));

        [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i],];
    }
    return shuffledArray
}

function ContainerCards() {
    const [pokemonIds, setPokemonIds] = useState([134, 135, 136, 196, 197, 470, 471, 700, 133]);
    const [score, setScore] = useState(0);
    const [prevCard, setPrevCard] = useState(null);
    const [highestScore, setHighestScore] = useState(0);

    useEffect(() => {setPokemonIds((prevIds) => shuffleArray(prevIds))}, []);

    const handleCardClick = (id) => {
        // ADD LOGIC
    };

    return (
        <div className="">
            <div className="">
                <h2 className="">Score: {score}</h2>
            </div>

            {/* LOST LOGIC */}

            <div className="">
                {pokemonIds.map((id) => (
                    <Cards key={id} pokemonId={id} onClick={() => handleCardClick} />
                ))}
            </div>

            <div className="">
                <h3 className="">Highest Score: {highestScore}</h3>
            </div>
        </div>
    )
}

export default ContainerCards;