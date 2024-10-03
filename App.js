import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Adminlogin from "./Alogin";
import JudgingRubric from "./JudgingRubric";
import Home from './Home.jsx';
import AdminPage from './AdminPage.jsx';

const App = () => {
  return (
    <div className="App">
      <div className="App">
        {/* Header */}
        <header className="app-header">
          <div className="header-container">
            <img src="/images/2.png" alt="NASA Logo" className="header-logo" />
            <div className="header-text">
              <h1>Astrotech Club</h1>
            </div>
            <img src="/images/3.png" alt="HTU Logo" className="header-logo" />
          </div>
        </header>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Alogin" element={<Adminlogin />} />
            <Route path="/admin-page" element={<AdminPage />} />
            <Route path="/judging-rubric" element={<JudgingRubric />} />
          </Routes>
        </Router>

        {/* Footer */}
        <footer className="footer">
          <p className="footer-text">
            Copyright © 2024{" "}
            <span className="company-name">Astrotech Club</span> | Powered By{" "}
            <span className="powered-by">AstraCore Technologies</span>
          </p>
          <p className="designer-text">
            <span className="designer-name">Sanad Abujaber & Omar Malkawi</span>{" "}
            تصميم وتطوير
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
