import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changeUser } from "../store/slices/user.slice";
import { useDispatch } from "react-redux";
import pokedex from "../assets1/pokedex.svg";
import '../App.css';

const UserInput = () => {
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getName = () => {
    dispatch(changeUser(userName));
    navigate("/pokedex");
  };

  return (
<div className="Big-cont">
<div className="banner-cont">
<img src={pokedex} alt="" />
</div>
<h1>Hi Trainer</h1>
<h2> Type Your Name</h2>
<input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}/>
      <button onClick={getName}>Begin</button>
      

</div>


    
  );
};

export default UserInput;
