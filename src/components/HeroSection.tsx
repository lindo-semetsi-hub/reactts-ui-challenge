import type React from "react";
import "./../styles/hero.css";

type HeroProps = {
    title: string;
    subtitle: string;
    buttonLabel: string;
    imageUrl: string;
};

const HeroSection: React.FC<HeroProps> = ({ title, subtitle, buttonLabel, imageUrl }) => {
    return (
        <section className="hero">
            <div className="hero-text">
                <h1>{title}</h1>
                <p>{subtitle}</p><button className="btn-primary">{buttonLabel}</button>
            </div>
                <div className="hero-image">
                    <img src={imageUrl} alt={title} />
                    </div>
        </section>
    );
    
};

export default HeroSection;