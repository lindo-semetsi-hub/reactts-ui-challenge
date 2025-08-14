import type React from "react";
import "./../styles/footer.css";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-col">
                <h4>Premium Restuarant</h4>
                <p>Fresh, healthy and organic meals served daily.</p>
            </div>
            <div className="footer-col">
                <h4>Our Menu Benefit</h4>
                <ul>
                    <li>FRESH</li>
                    <li>VITAMIN</li>
                    <li>ORE ANIC</li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Opening Hours</h4>
                <p>Mandday 17.00 cm  x12</p>
                <p>Tlsueday 13.60 cm X12</p>
                <p>Wednsseday 19.00 km X11</p>
                <p>Theneday 13.00 cm X 11</p>
            </div>
            <div className="footer-col">
                <h4>Quick Links</h4>
            
            </div>
        </footer>
    );
};

export default Footer;