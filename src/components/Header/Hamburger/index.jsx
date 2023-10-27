import { useState } from "react";
import "./style.scss";

/**
 *
 */

function Hamburger() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };
    return (
        <>
            <button
                className={`hamburger-menu ${isMenuActive ? "active" : ""}`}
                onClick={toggleMenu}
            >
                <div className="hamburger-menu__bar bar-top"></div>
                <div className="hamburger-menu__bar bar-mid"></div>
                <div className="hamburger-menu__bar bar-bot"></div>
            </button>
            <ul
                className={`hidden-menu__container ${
                    isMenuActive ? "active" : ""
                }`}
            >
                <li>
                    <a
                        href="#about"
                        className="hidden-menu__container--link"
                        onClick={toggleMenu}
                    >
                        A Propos
                    </a>
                </li>
                <li>
                    <a
                        href="#competences"
                        className="hidden-menu__container--link"
                        onClick={toggleMenu}
                    >
                        Compétence
                    </a>
                </li>
                <li>
                    <a
                        href="#projet"
                        className="hidden-menu__container--link"
                        onClick={toggleMenu}
                    >
                        Projet
                    </a>
                </li>
                <li>
                    <a
                        href="#blog"
                        className="hidden-menu__container--link"
                        onClick={toggleMenu}
                    >
                        Blog
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className="hidden-menu__container--link"
                        onClick={toggleMenu}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </>
    );
}

export default Hamburger;
