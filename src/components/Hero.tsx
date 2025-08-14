import React from "react";
import "./Hero.css";
import berries from ",,/assets/berries.jpg";

const Hero: React.FC = () => {
    return (
        <section className="hero">
            {/* Left Text */}
            <div className="hero-left">
                Just imagine seeds and summer in gell sunshine.
                </div>

            {/* Right Section */}
            <div className="hero-right">
                {/*Top Image */}
                <img src={berries} alt="Berries" className="hero-image" />

                {/* White Crad */}
                <div className="hero-card">
                    <h3>EBEE WOUS BENEFIT.</h3>
                    <p>Won Owed, Nagatewi 405es<br /> PUOCEDLE LO MOTION</p>
                    <button>HEAD MORE</button>
                </div>
            </div>

        </section>
    );
};

export default Hero;