import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../constants";

const ListRewards = () => {
  const [rewards, setRewards] = useState([]);
  const [userId, setUserId] = useState("");
  const [selectedRewardId, setSelectedRewardId] = useState(null);
  const [message, setMessage] = useState("");

  // Fetch rewards from the backend
  useEffect(() => {
    fetch(`${API_BASE_URL}/rewards/`)
      .then((response) => response.json())
      .then((data) => setRewards(data))
      .catch((error) => setMessage("Failed to fetch rewards."));
  }, []);

  // Redeem Reward Handler
  const handleRedemption = (rewardId) => {
    if (!userId) {
      setMessage("Incorrect Redemption, please ensure you are logged in!");
      return;
    }

    fetch(`${API_BASE_URL}/loyalty/redeem/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: parseInt(userId), reward_id: rewardId }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setMessage(data.error);
        } else {
          setMessage("Reward redeemed successfully!");
        }
      })
      .catch(() => setMessage("An error occurred while redeeming the reward."));
  };

  return (
    <div>
      <h2>Available Rewards</h2>
      <div>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Enter User ID</span>
          </div>
          <input
            class="form-control"
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
      </div>
      <ul>
        {rewards.map((reward) => (
          <li key={reward.reward_id}>
            <p>
              <strong>{reward.reward_name}</strong>
            </p>
            <p>{reward.reward_description}</p>
            <p>Points: {reward.points}</p>
            <button onClick={() => handleRedemption(reward.reward_id)}>
              Redeem Reward
            </button>
          </li>
        ))}
      </ul>
      <p>{message}</p>
    </div>
  );
};

export default ListRewards;