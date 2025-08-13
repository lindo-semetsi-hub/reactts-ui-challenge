import type React from "react";
import "./../styles/footer.css";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-col">
                <h4>Premium Restaurant</h4>
                <ul>
                    <li>Fresh</li>
                    <li>Vitamin</li>
                    <li>Organic</li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Opening Hours</h4>
                <p>Mon: 17:00 - 21:00</p>
                <p>Thu: 13:00 - 21:00</p>
            </div>
            <div className="footer=col">
                <h4>Quick Links</h4>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Contact</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;