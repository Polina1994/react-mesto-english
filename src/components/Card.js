import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  // Determine if we are the owner of the current card
  const isOwn = props.card.owner._id === currentUser._id;

  // Create a variable, which we will then set in `className` for the delete button
  const cardDeleteButtonClassName = `card__button-delete ${
    isOwn ? "card__button-delete-visible" : "card__button-delete-hidden"
  }`;

  // Determine if the card has a like set by the current user
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  // We create a variable, which we then set in `className` for the like button
  const cardLikeButtonClassName = `card__button-like ${
    isLiked ? "button_is-active" : ""
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <div className="card">
      <img
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
        className="card__image"
      />
      <button
        type="button"
        aria-label="del"
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
      ></button>
      <div className="card__title-wrap">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-container">
          <button
            type="button"
            aria-label="like"
            className={cardLikeButtonClassName}
            onClick={function handleLikeClick() {
              props.onCardLike(props.card);
            }}
          ></button>
          <p className="card__like-number">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
