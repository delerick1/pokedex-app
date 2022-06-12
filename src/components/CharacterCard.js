import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const CharacterCard = ({ characterUrl }) => {
  const [character, setCharacter] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    axios.get(characterUrl).then((res) => setCharacter(res.data));
  }, [characterUrl]);

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 p-3">
      <div
        className="card h-100"
        onClick={() => navigate(`/pokedex/${character.id}`)}
      >
        <div className="card-body">
          <h3>{character.name}</h3>
          {character.id?.moves}
          <img src={character.image} alt="" className=" w-100" />
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;