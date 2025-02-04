import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../constants";

const OffersList = () => {
  const [offers, setOffers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API_BASE_URL}/offers/`)
      .then((response) => response.json())
      .then(setOffers)
      .catch((err) => setError("No offers available." + err));
  }, []);

  return (
    <div>
      <h2>Available Offers</h2>
      {<p>{error}</p>}
      <ul>
        {offers.map((offer) => (
          <li key={offer.offer_id}>
            <strong>{offer.offer_name}</strong>: {offer.offer_description} -
            {offer.awardable_points} points expiring on {offer.expiry_date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OffersList;
