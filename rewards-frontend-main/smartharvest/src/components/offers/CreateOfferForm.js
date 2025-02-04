import React, { useState } from "react";
import { API_BASE_URL } from "../../constants";

const CreateOffer = () => {
  const [formData, setFormData] = useState({
    offer_name: "",
    offer_description: "",
    awardable_points: "",
    expiry_date: "",
    is_active: true,
  });

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API_BASE_URL}/create-offer/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setMessage("Offer created successfully!");
          setFormData({
            offer_name: "",
            offer_description: "",
            awardable_points: "",
            expiry_date: "",
            is_active: true,
          });
        } else {
          return response.json().then((data) => {
            setMessage(data.error || "Failed to create offer.");
          });
        }
      })
      .catch(() => setMessage("An error occurred while creating the offer."));
  };

  return (
    <div>
      <h2>Create Offer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Offer Name:
            <input
              type="text"
              value={formData.offer_name}
              onChange={(e) =>
                setFormData({ ...formData, offer_name: e.target.value })
              }
              required
            />
          </label>
        </div>
        <div>
          <label>
            Offer Description:
            <textarea
              value={formData.offer_description}
              onChange={(e) =>
                setFormData({ ...formData, offer_description: e.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label>
            Awardable Points:
            <input
              type="number"
              value={formData.awardable_points}
              onChange={(e) =>
                setFormData({ ...formData, awardable_points: e.target.value })
              }
              required
            />
          </label>
        </div>
        <div>
          <label>
            Expiry Date:
            <input
              type="datetime-local"
              value={formData.expiry_date}
              onChange={(e) =>
                setFormData({ ...formData, expiry_date: e.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label>
            Is Active:
            <input
              type="checkbox"
              checked={formData.is_active}
              onChange={(e) =>
                setFormData({ ...formData, is_active: e.target.checked })
              }
            />
          </label>
        </div>
        <button type="submit">Create Offer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateOffer;
