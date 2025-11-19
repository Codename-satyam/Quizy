import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about-page">
            <div className="about-gameboy">
                <div className="about-gb-top">
                    <div className="about-gb-power" />
                    <div className="about-gb-speaker" />
                </div>

                <div className="about-gb-screen">
                    <div className="about-screen-inner">
                        <h2>About Quizy</h2>
                        <p>
                            Quizy is a playful learning app that makes quizzes feel like a
                            game. It uses bright challenges, friendly feedback, and simple
                            progression to keep kids engaged.
                        </p>
                        <ul>
                            <li>Kid-friendly questions and categories</li>
                            <li>Simple scoring and fun visuals</li>
                            <li>Safe fallback when offline</li>
                        </ul>
                        <p className="about-small">Made with care for curious minds 🎮</p>
                    </div>
                </div>
                <div className="about-gb-controls">
                    <div className="about-dpad">
                        <div className="about-dpad-row">
                            <div className="about-btn up" />
                        </div>
                        <div className="about-dpad-row">
                            <div className="about-btn left" />
                            <div className="about-btn center" />
                            <div className="about-btn right" />
                        </div>
                        <div className="about-dpad-row">
                            <div className="about-btn down" />
                        </div>
                    </div>

                    <div className="about-action-buttons">
                        <div className="about-action a">A</div>
                        <div className="about-action b">B</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;