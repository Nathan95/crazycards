import React from "react";
import PropTypes from "prop-types";
import "../css/Card.scss";

function Card({
  title,
  apr,
  balanceOfferDuration,
  purchaseOfferDuration,
  creditAvailable,
  creditValue,
  onClick,
  selected,
  id
}) {
  return (
    <button id={id} className="card__item" onClick={onClick}>
      <h2>{title}</h2>
      <p>
        <span>
          Apr: <strong>{apr}</strong>
        </span>
        <span>
          Balance Transfer Offer Duration:{" "}
          <strong>{balanceOfferDuration}</strong>
        </span>
        <span>
          Purchase Offer Duration: <strong>{purchaseOfferDuration}</strong>
        </span>
        <span>
          Credit Available: <strong>£{creditAvailable}</strong>
        </span>
      </p>
    </button>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  apr: PropTypes.string.isRequired,
  balanceOfferDuration: PropTypes.string.isRequired,
  purchaseOfferDuration: PropTypes.string.isRequired,
  creditAvailable: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Card;
