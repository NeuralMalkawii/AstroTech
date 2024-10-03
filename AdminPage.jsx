import React, { useEffect, useState } from "react";
import "./AdminPage.css";

const AdminPage = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/submissions");
        const data = await response.json();
        setSubmissions(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="T">
      <h1>Admin Dashboard</h1>
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Judge Name</th>
            <th>Ratings</th>
            <th>Total Rating</th>
          </tr>
        </thead>
        <tbody>
          {submissions.length > 0 ? (
            submissions.map((submission, index) => (
              <tr key={index}>
                <td>{submission.teamName}</td>
                <td>{submission.judgeName}</td>
                <td>
                  {submission.ratings && typeof submission.ratings === "object" ? (
                    Object.entries(submission.ratings).map(([question, rating]) => (
                      <div key={question}>
                        {question}: {rating}
                      </div>
                    ))
                  ) : (
                    <div>No ratings available</div>
                  )}
                </td>
                <td>{submission.totalRating}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No submissions yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
