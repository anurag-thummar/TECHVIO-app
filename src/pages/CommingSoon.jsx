import React, { useState, useEffect } from 'react';
import './CommingSoon.css';

const CommingSoon = ({ countdownDate = "April 1, 2025 15:37:25" }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const countDownDate = new Date(countdownDate).getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                setTimeLeft(null);
                return;
            }

            const formatNumber = (num) => String(num).padStart(2, '0');

            setTimeLeft({
                days: formatNumber(Math.floor(distance / (1000 * 60 * 60 * 24))),
                hours: formatNumber(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
                minutes: formatNumber(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
                seconds: formatNumber(Math.floor((distance % (1000 * 60)) / 1000)),
            });
        };

        const interval = setInterval(updateTimer, 1000);

        return () => clearInterval(interval);
    }, [countdownDate]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for subscribing!');
    };

    return (
        <section className="coming-soon-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="coming-soon-content">
                            <h1>Our Website is Coming Soon</h1>
                            <p>
                                Before we jump into our list of coming soon page examples, let’s take a quick
                                look at why you should create one of these for your own website launch.
                            </p>
                            <form onSubmit={handleFormSubmit}>
                                <input
                                    type="email"
                                    name="email"
                                    className="email-input"
                                    placeholder="Enter Your Email"
                                    aria-label="Enter your email"
                                    required
                                />
                                <button type="submit" className="submit-btn">Submit</button>
                            </form>
                            <div id="timer" aria-live="polite">
                                {timeLeft ? (
                                    <>
                                        <div id="days">{timeLeft.days}<span>Days</span></div>
                                        <div id="hours">{timeLeft.hours}<span>Hours</span></div>
                                        <div id="minutes">{timeLeft.minutes}<span>Minutes</span></div>
                                        <div id="seconds">{timeLeft.seconds}<span>Seconds</span></div>
                                    </>
                                ) : (
                                    <p>The countdown has ended. Stay tuned for the launch!</p>
                                )}
                            </div>
                            <ul className="social-list">
                                <div className="social-list-upper">
                                    <li className="list-heading">Follow us for updates:</li>
                                </div>

                                <div className="social-list-down">
                                    <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" title="Twitter"><i className="fab fa-x-twitter"></i></a></li>
                                    <li><a href="#" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommingSoon;
