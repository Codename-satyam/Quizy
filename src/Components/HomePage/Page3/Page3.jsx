import './Page3.css'; 
import { FaBookOpen, FaPuzzlePiece, FaLightbulb, FaChartBar, FaGamepad } from 'react-icons/fa';

function Page3() {
  return (
    <div className="page-3">
      <div className="start">
        <div className="heading">
          <h2 className="heading">Developing <span>Future Leaders !!</span></h2>
        </div>
        <div className="content">
          <p>
            We are a team of passionate <span>educators and innovators</span> dedicated to transforming the way
            children learn and grow. Our mission is to empower young minds with the
            <span> skills they need to thrive in an ever-changing world.</span>
          </p>
        </div>
      </div>

      {/* === First Row of Boxes === */}
      <div className="boxes">
        <div className="box">
          <FaBookOpen className="icon" />
          <h3>Relevant Content</h3>
          <p>
            Creativity, Attention, Problem Solving — we target the skills that are most
            important for your child’s growth.
          </p>
        </div>

        <div className="box">
          <FaPuzzlePiece className="icon" />
          <h3>Gamified Content</h3>
          <p>
            Badges, Avatars, Rewards and Challenges make learning feel like a game while
            keeping your child engaged.
          </p>
        </div>

        <div className="box">
          <FaLightbulb className="icon" />
          <h3>Learning</h3>
          <p>
            Children practice at their own pace. The worksheet difficulty adjusts to their
            abilities as they learn.
          </p>
        </div>
      </div>

      {/* === Second Row of Boxes === */}
      <div className="boxes1">
        <div className="box1">
          <FaChartBar className="icon" />
          <h3>Progress Report</h3>
          <p>
            Easily track your child’s strengths and weaknesses with our rich reporting
            modules.
          </p>
        </div>

        <div className="box1">
          <FaGamepad className="icon" />
          <h3>Productive Usage</h3>
          <p>
            Engage your child in educational and productive activities instead of meaningless
            videos and games.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page3;
