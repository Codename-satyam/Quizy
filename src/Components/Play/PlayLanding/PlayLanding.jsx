import React from 'react';
import './PlayLanding.css';
import { Link } from 'react-router-dom';
import { FaFilm, FaStickyNote, FaGamepad, FaQuestionCircle } from 'react-icons/fa';

function PlayLanding() {
    return (
        <div className="play-landing">
            <header className="pl-header">
                <h1 className="pl-title">Play</h1>
                <p className="pl-sub">Choose an activity to have fun and learn</p>
            </header>

            <div className="pl-grid">
                <Link to="/videos" className="pl-card" aria-label="Videos">
                    <div className="pl-icon"><FaFilm /></div>
                    <div className="pl-label">Videos</div>
                </Link>

                <Link to="/notes" className="pl-card" aria-label="Notes">
                    <div className="pl-icon"><FaStickyNote /></div>
                    <div className="pl-label">Notes</div>
                </Link>

                <Link to="/games" className="pl-card" aria-label="Games">
                    <div className="pl-icon"><FaGamepad /></div>
                    <div className="pl-label">Games</div>
                </Link>

                <Link to="/quiz" className="pl-card" aria-label="Quiz">
                    <div className="pl-icon"><FaQuestionCircle /></div>
                    <div className="pl-label">Quiz</div>
                </Link>
            </div>
        </div>
    );
}

export default PlayLanding;
