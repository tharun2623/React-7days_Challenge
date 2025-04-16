import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
    

const Main = ({ name, age, bio }) => {
  return (
    <section className="profile-card">
      <div className="card shadow-lg">
        <div className="card-body text-center">
          <h2 className="card-title text-primary mb-4">Profile</h2>
          
          <div className="profile-item">
            <h3 className="text-secondary">Name:</h3>
            <p className="profile-value">{name}</p>
          </div>

          <div className="profile-item">
            <h3 className="text-secondary">Age:</h3>
            <p className="profile-value">{age}</p>
          </div>

          <div className="profile-item">
            <h3 className="text-secondary">Bio:</h3>
            <p className="profile-bio">{bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;