import '../assets/css/Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="https://github.com/Tsunwei514" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/TristinTsun/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon" /> LinkedIn
                </a>
            </div>
        </footer>
    );
}