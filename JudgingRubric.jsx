import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./JudgingRubric.css";

const JudgingRubric = () => {
  const [teamName, setTeamName] = useState("");
  const [judgeName, setJudgeName] = useState("");
  const [ratings, setRatings] = useState({
    q1: 0,
    q2: 0,
    q6: 0,
    q10: 0,
    q5: 0,
  });
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.username) {
      setJudgeName(location.state.username);
    }
  }, [location.state]);

  const handleRatingChange = (e) => {
    const { name, value } = e.target;
    const validValue = Math.min(Math.max(Number(value), 1), 10);
    setRatings((prevRatings) => ({
      ...prevRatings,
      [name]: validValue,
    }));
  };

  // Calculate total rating from the ratings state
  const getTotalRating = () => {
    return Object.values(ratings).reduce((sum, rating) => sum + rating, 0);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const totalRating = getTotalRating(); // Calculate total before submission

    const data = {
      teamName,
      judgeName,
      totalRating,
    };

    try {
      const response = await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Data saved successfully!");
        // Clear the form after submission
        setTeamName("");
        setJudgeName("");
        setRatings({
          q1: 0,
          q2: 0,
          q6: 0,
          q10: 0,
          q5: 0,
        });
      } else {
        alert("Failed to save data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error saving the data.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rubric-container">
      <h2>Judging Rubric</h2>

      {/* Team and Judge Inputs */}
      <div className="team-judge-info">
        <div>
          <label>Team Name:</label>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Judge's Name:</label>
          <span className="judge-name">{judgeName}</span>
        </div>
      </div>

      {/* Ratings Sections with Descriptions */}
      <div className="rating-section">
        <h3>Impact</h3>
        <p>
          How much impact (quality and quantity) can this project have? Does it
          solve a big problem or a little problem? Will it inspire or help many,
          or a few?
        </p>
        <input
          type="number"
          name="q1"
          value={ratings.q1}
          min="1"
          max="10"
          onChange={handleRatingChange}
          required
        />
      </div>

      <div className="rating-section">
        <h3>Creativity</h3>
        <p>
          How creative/innovative is the approach? Is the project novel and
          something that hasn’t been attempted before, or is it an incremental
          improvement on something that already exists?
        </p>
        <input
          type="number"
          name="q2"
          value={ratings.q2}
          min="1"
          max="10"
          onChange={handleRatingChange}
          required
        />
      </div>

      <div className="rating-section">
        <h3>Validity</h3>
        <p>
          Is the solution scientifically valid? Will it do what it sets out to
          do? Can it work in the real world?
        </p>
        <input
          type="number"
          name="q6"
          value={ratings.q6}
          min="1"
          max="10"
          onChange={handleRatingChange}
          required
        />
      </div>

      <div className="rating-section">
        <h3>Relevance</h3>
        <p>
          Is this project responsive to the challenge for which it was
          submitted? Is it a complete solution or does it have a long way to go?
          Is it technically feasible? How usable or user friendly is the
          solution?
        </p>
        <input
          type="number"
          name="q10"
          value={ratings.q10}
          min="1"
          max="10"
          onChange={handleRatingChange}
          required
        />
      </div>

      <div className="rating-section">
        <h3>Presentation</h3>
        <p>
          How well did the team communicate their project? Were they effective
          in telling the story of the project: the challenge, the solution, and
          why is it important?
        </p>
        <input
          type="number"
          name="q5"
          value={ratings.q5}
          min="1"
          max="10"
          onChange={handleRatingChange}
          required
        />
      </div>

      {/* Total Rating Display */}
      <div className="total-rating">
        <strong>Total Rating: {getTotalRating()}</strong>
      </div>

      {/* Submit Button */}
      <button type="submit" className="save-button">
        Submit
      </button>
    </form>
  );
};

export default JudgingRubric;
