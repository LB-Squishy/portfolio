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
            <header className="header-container">
                <a href="#homesection" className="header-container__logo">
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
                    <div
                        className={`hidden-menu ${
                            isMenuActive ? "active" : ""
                        }`}
                    ></div>
                </nav>
            </header>
        </>
    );
}

export default Header;
