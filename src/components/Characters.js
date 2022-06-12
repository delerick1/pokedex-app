import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CharacterCard from "./CharacterCard";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Characters = () => {
    const user = useSelector((state) => state.user);
  
    const [pokeSrch, setPokeSrch] = useState("");
    const [characters, setCharacters] = useState([]);
    const [types, setTypes] = useState([]);
  
    const navigate = useNavigate();
  
    useEffect(() => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/")
        .then((res) => setCharacters(res.data.results));
  
      axios
        .get("https://pokeapi.co/api/v2/type")
        .then((res) => setTypes(res.data.results));
    }, []);
  console.log(characters)
    const search = () => {
      // Esto no funciona aquí, pero si en la pokedex
      navigate(`/pokedex/${pokeSrch}`);
    };
  
    const filterCharacters = (e) => {
      axios.get(e.target.value).then((res) => setCharacters(res.data.residents));
    };
  
    console.log(setCharacters);

    return (
      <div>
        <h1>Welcome {user}</h1>
       <h2>

        , find you're favorite pokemon
       </h2>
        
        <select onChange={filterCharacters}>
          <option></option>
          {types.map((types) => (
            <option value={types.url}>{types.name}</option>
          ))}
        </select>
        <div >
          <input
            type="text"
            value={pokeSrch}
            onChange={(e) => setPokeSrch(e.target.value)}
            placeholder="Type your pokemon name"
          />
          <button  onClick={search}>
            Search
          </button>
        </div>
        <div >
          {characters.map((
            character // EN ESTE CASO: character puede ser o un objeto o una string
          ) => (
            // Hagan console.log, con la pokeapi es distinto
            <CharacterCard //pokemon.url ? pokemon.url : pokemon.pokemon.url
              characterUrl={
                character.url !== undefined ? character.url : character}
              key={character.url !== undefined ? character.url : character}
            />
          ))}
        </div>
      </div>
    );
};

export default Characters;