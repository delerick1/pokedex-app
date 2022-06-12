
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {
    const [ character, setCharacter ] = useState({})

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setCharacter(res.data))
    }, [id])

    return (
        <div>
            <h1>Character Detail</h1>
            <p>Accediendo al personaje con id: <b>{id}</b></p>
            <h1>{character.name}</h1>
            <img src={character.image} alt="" />
        </div>
    );
};

export default CharacterDetail;