import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Components/LandingPage/Landing.jsx";
import HomePage from "./Components/HomePage/Page1/HomePage.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Page2 from "./Components/HomePage/Page2/Page2.jsx";
import Page3 from "./Components/HomePage/Page3/Page3.jsx";
import Page4 from "./Components/HomePage/Page4/Page4.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import QuizPage from "./Components/Play/QuizPage/QuizPage.jsx";
import PlayLanding from "./Components/Play/PlayLanding/PlayLanding.jsx";
import Contact from "./Components/ContactUs/Contact.jsx";
import About from "./Components/About/About.jsx";
import Videos from "./Components/Play/Videos/Videos.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Login/Register.jsx";
import ProtectedRoute from "./Components/Auth/ProtectedRoute.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <HomePage />
                <Page2 />
                <Page3 />
                <Page4 />
                <Footer />
              </>
            }
          />
          <Route
            path="/quiz"
            element={
              <ProtectedRoute>
                <Navbar />
                <QuizPage />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/play"
            element={
              <>
                <Navbar />
                <PlayLanding />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/videos" element={<Videos />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Navbar />
                <Dashboard />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
