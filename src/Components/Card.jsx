import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";
import '../Styles/Card.Component.css'

const Card = ({ dentist}) => {
  const {state,dispatch} = useContextGlobal();

  const isFav = state.favs.some((fav) => fav.id === dentist.id);

  //Valida si el dentista esta en favoritos
  const addFav = ()=> isFav 
    ? dispatch({type:'REMOVE_FAV',payload: dentist}) 
    : dispatch({type:'ADD_FAV',payload: dentist})

  return (
    <div className="card">
        <Link to={`/detail/${dentist.id}`}>
        <h3>{dentist.name}</h3>
      </Link>
      <img className="card-img" src="/public/images/doctor.jpg" alt="img dentista" />
      <p>Username: {dentist.username}</p>
      <button onClick={addFav}>{isFav ? "🌟" : "⭐"}</button>
    </div>
  );
};

export default Card;
