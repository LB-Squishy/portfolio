import Hamburger from "./Hamburger";
import "./style.scss";

/**
 * Composant créant l'en-tête
 */

export default function Header() {
    return (
        <>
            <header>
                <div className="header-container">
                    <div className="header-container__logo">
                        <a
                            href="#about"
                            className="header-container__logo--content"
                        >
                            Portfolio
                        </a>
                    </div>
                    <nav className="header-container__nav">
                        <Hamburger />
                    </nav>
                </div>
            </header>
        </>
    );
}
