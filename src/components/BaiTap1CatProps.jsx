import React from "react";
import PokemonPropsItem from "./PokemonPropsitem";

const BaiTap1CatProps = () => {
    const arrCats = [
        {
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
            name: "Pikachu",
            defense: 40,
            attack: 55,
        },
        {
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
            name: "Charizard",
            defense: 78,
            attack: 84,
        },
        {
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
            name: "Bulbasaur",
            defense: 49,
            attack: 49,
        },
        {
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
            name: "Squirtle",
            defense: 65,
            attack: 48,
        },
        {
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
            name: "Jigglypuff",
            defense: 20,
            attack: 45,
        },
        {
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",
            name: "Meowth",
            defense: 35,
            attack: 45,
        },
        {
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
            name: "Psyduck",
            defense: 48,
            attack: 52,
        },
        {
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
            name: "Snorlax",
            defense: 65,
            attack: 110,
        },
        {
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
            name: "Gengar",
            defense: 60,
            attack: 65,
        },
        {
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
            name: "Eevee",
            defense: 50,
            attack: 55,
        },
        {
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
            name: "Mewtwo",
            defense: 90,
            attack: 110,
        },
        {
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/249.png",
            name: "Lugia",
            defense: 130,
            attack: 90,
        },
    ];

    return (
        <div>
            <div className="container">
                <h2 className="text-center mt-5 py-5 text-violet-500 font-bold text-4xl">
                    Pokemon Go
                </h2>
                <div className="grid grid-cols-4 gap-8">
                    <PokemonPropsItem arrPokemon={arrCats} />
                </div>
            </div>
        </div>
    );
};

export default BaiTap1CatProps;
