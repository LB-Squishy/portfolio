import "./style.scss";

/**
 *
 */

function CompetencesLogo({ image, alt }) {
    return (
        <div className="logo-style">
            <img
                src={require("../../../../assets/logo/" + image + ".png")}
                alt={alt}
            ></img>
        </div>
    );
}

export default CompetencesLogo;
