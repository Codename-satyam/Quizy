import './HomePage.css';
import back from '../../Assets/back.mp4';

function HomePage() {
  return (
    <div className="home-page">
      <video src={back} autoPlay loop muted playsInline className="background"></video>

      {/* <div className="top-row">
        <div className="left">
          <h1>Welcome to Quizy!</h1>
          <center><p>This is a quiz application where you can test your knowledge.</p></center>
        </div> */}

      <div className="right">
        <div className="left">
          <h1>Welcome to Quizy!</h1>
          <center><p>This is a quiz application where you can test your knowledge.</p></center>
        </div>
        <h2>What We Do</h2>
        <p>
          At <strong>Quizy</strong>, we make learning fun and engaging!
          Take part in quizzes across various topics — from science to pop culture —
          and challenge yourself or your friends.
        </p>

        <h3>How It Works</h3>
        <ul>
          <li>Choose your quiz category.</li>
          <li>Answer timed questions.</li>
          <li>Earn points and climb the leaderboard!</li>
        </ul>

        <button className="pixel-button">Get Started</button>
      </div>
    </div>
  );
}

export default HomePage;
