
import "./../styles/section.css";

type SectionProps = {
    title: string;
    description: string;
    buttonLabel: string;
    leftImage: string;
    rightImage?: string;
};

const Section: React.FC<SectionProps> = ({ title, description, buttonLabel, leftImage, rightImage }) => {
    return (
        <section className="info-section">
            <div className="left">
                <img src={leftImage} alt={title} />
                <h2>{title}</h2>
                <p>{description}</p>
                <button className="btn-primary">{buttonLabel}</button>
            </div>
        {rightImage && (
            <div className="right">
                <img src={rightImage} alt="Related" />
            </div>
        )}
        </section>
    );
};

export default Section;