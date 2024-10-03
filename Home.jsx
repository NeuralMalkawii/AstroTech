import React from "react";
import "./Home.css";


const Home = () => {
  return (
    <div className="Home">
      {/* Header */}
      <header>
        <nav>
          <ul>
            <li>
              <a href="/login">Judging Rubric</a>
            </li>
            <li>
              <a href="/Alogin">Admin Portal</a>
            </li>
            <li className="search-icon">
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="nasa-title">
          <h1>NASA Space Apps Challenge</h1>
          <p className="tagline">
            sky is <span>not</span> the limit
          </p>
        </div>
        <img src="/images/6.png" alt="NASA Logo" className="header-logo" />
      </section>

      {/* Mission Section */}
      <section className="mission">
        <h2>About Us...</h2>
        <div className="patches"></div>
        <div className="mission-text">
          <p>
            That's one small step for [a] man, one giant leap for mankind.
            Astronomy compels the soul to look upward, and leads us from this
            world to another. If you could see the earth illuminated when you
            were in a place as dark as night, it would look to you more splendid
            than the moon. Houston, Tranquility Base here. The Eagle has landed.
          </p>
          <p>
            Space, the final frontier. These are the voyages of the Starship
            Enterprise. Its five-year mission: to explore strange new worlds, to
            seek out new life and new civilizations, to boldly go where no man
            has gone before.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <img src="/images/6.png" alt="NASA Logo" className="header-logo" />
      </footer>
    </div>
  );
};

export default Home;
