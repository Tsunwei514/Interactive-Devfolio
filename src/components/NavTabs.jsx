import '../assets/css/NavTabs.css';
import { NavLink } from "react-router-dom";

function NavTabs() {
    return (
        <header>
            <h1>
                Tristin Tsun
            </h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/resume" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                            Resume
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>

    );
}

export default NavTabs;