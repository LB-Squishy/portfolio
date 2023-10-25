import { useState } from "react";
import "./style.scss";

/**
 *
 */

function Header() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };
    return (
        <>
            <header>
                <div className="header-container">
                    <a href="#accueil" className="header-container__logo">
                        Portfolio
                    </a>
                    <nav className="header-container__nav">
                        <button
                            className={`hamburger-menu ${
                                isMenuActive ? "active" : ""
                            }`}
                            onClick={toggleMenu}
                        >
                            <div className="hamburger-menu__bar bar-top"></div>
                            <div className="hamburger-menu__bar bar-mid"></div>
                            <div className="hamburger-menu__bar bar-bot"></div>
                        </button>
                        <ul
                            className={`hidden-menu ${
                                isMenuActive ? "active" : ""
                            }`}
                        >
                            <li className="hidden-menu__link">A Propos</li>
                            <li className="hidden-menu__link">Compétences</li>
                            <li className="hidden-menu__link">Projet</li>
                            <li className="hidden-menu__link">Blog</li>
                            <li className="hidden-menu__link">Contact</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
