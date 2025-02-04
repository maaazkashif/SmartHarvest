import React from "react";
import ListOffers from "../components/offers/OffersList";
import ListRewards from "../components/rewards/RewardsList";
import "../pages/HarvestRewards.css";

const RewardsDashboard = () => {
  return (
    <div className="rewards-dashboard container my-5">
      {/* Page Title */}
      <header className="text-center mb-4">
        <h1 className="display-4">Rewards Dashboard</h1>
        <p className="lead text-muted">
          Explore your offers and rewards to make the most of your experience.
        </p>
      </header>

      {/* Offers Section */}
      <section className="offers-section mb-5">
        <h2 className="section-title text-primary mb-3">Exclusive Offers</h2>
        <div className="offers-list shadow p-4 rounded bg-light">
          <ListOffers />
        </div>
      </section>

      {/* Rewards Section */}
      <section className="rewards-section">
        <h2 className="section-title text-success mb-3">Your Rewards</h2>
        <div className="rewards-list shadow p-4 rounded bg-light">
          <ListRewards />
        </div>
      </section>
    </div>
  );
};

export default RewardsDashboard;
