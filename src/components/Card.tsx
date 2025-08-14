import type React from "react";
import '../styles/card.css';

type CardProps = {
    imageUrl: string;
    title: string;
    description: string;
};

const Card: React.FC<CardProps> = ({ imageUrl, title, description }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;