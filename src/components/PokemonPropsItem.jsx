import React from "react";

const PokemonPropsItem = (props) => {
    return (
        <>
            {props.arrPokemon.map((item, index) => {
                return (
                    <div className="px-3 py-4 shadow rounded-lg " key={index}>
                        <img src={item.image} alt="" />
                        {/* Tên */}
                        <div className="flex items-center justify-between">
                            <h3>Name: </h3>
                            <h3>{item.name}</h3>
                        </div>
                        {/* tấn công index */}
                        <div className="flex items-center justify-between">
                            <h3>Attack: </h3>
                            <h3>{item.attack}</h3>
                        </div>
                        {/* phòng thủ index */}
                        <div className="flex items-center justify-between">
                            <h3>Defense: </h3>
                            <h3>{item.defense}</h3>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default PokemonPropsItem;
