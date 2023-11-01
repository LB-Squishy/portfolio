import "./style.scss";

/**
 * Composant stylisant les logos de la section compétence
 * @param {string} image - nom de l'image (fournir un format png)
 * @param {string} alt - alt du logo
 */

export default function CompetencesLogo({ image, alt }) {
    return (
        <div className="logo-style">
            <img
                src={require("../../../../assets/logo/" + image + ".png")}
                alt={alt}
            ></img>
        </div>
    );
}
