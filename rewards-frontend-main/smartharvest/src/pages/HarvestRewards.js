// src/HarvestRewards.js
import React from "react";
import "./HarvestRewards.css";

const HarvestRewards = () => {
  return (
    <div className="harvest-rewards">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="container">
          <h1 className="title">Harvest Rewards</h1>
          <p className="subtitle">
            Get the inside scoop. Join for{" "}
            <span className="highlight">free</span> and{" "}
            <span className="highlight">earn points</span> while enjoying
            special perks, tailored to you.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-5">
        <div className="container text-center">
          <h2 className="section-title">How it works</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="benefit-item">
                <h5>Step 1: Sign Up</h5>
                <p>
                  Sign up for free and earn points that can be exchanged for
                  exclusive benefits.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="benefit-item">
                <h5>Step 2: Earn Points</h5>
                <p>
                  Earn points when placing an order, or when completing
                  achievements.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="benefit-item">
                <h5>Step 3: Redeem Rewards</h5>
                <p>
                  Redeem your points for discounts and benefits, and reach
                  higher tiers for extra rewards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Earn Points Section */}
      <section className="earn-points-section py-5">
        <div className="container text-center">
          <h2 className="other-ways-section-title">EARN POINTS</h2>{" "}
          {/* Updated class for styling */}
          <div className="rectangle">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="benefit-item">
                  <div className="box">$1 spend = 1 point</div>
                  <p className="subtitle">Yes, it's that easy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Earn Points Section */}
      <section className="other-ways-section py-5">
        <div className="container text-center">
          <h2 className="section-title">Other Ways to Earn Points</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="benefit-item">
                <h5>Refer a Friend</h5>
                <p>
                  Earn points by inviting friends to join the rewards program.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="benefit-item">
                <h5>Social Media Engagement</h5>
                <p>Get points by engaging with our social media content.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="benefit-item">
                <h5>Attend Events</h5>
                <p>Earn points for attending community or partner events.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redeem Points Section */}
      <section className="redeem-points-section py-5">
        <div className="container text-center">
          <h2 className="section-title">Redeem Your Points</h2>
          <p className="subtitle">
            Use your points to unlock exciting rewards! Select from the options
            below and start redeeming today.
          </p>
          <div className="row">
            <div className="col-md-4">
              <div className="reward-item">
                <h5>$5 Discount</h5>
                <p>Redeem for 500 points</p>
                <button className="btn btn-primary">Redeem Now</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="reward-item">
                <h5>$10 Discount</h5>
                <p>Redeem for 1000 points</p>
                <button className="btn btn-primary">Redeem Now</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="reward-item">
                <h5>Donate to Sustainability</h5>
                <p>Redeem for 800 points</p>
                <button className="btn btn-primary">Redeem Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HarvestRewards;
