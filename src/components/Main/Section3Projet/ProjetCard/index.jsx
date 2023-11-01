import "./style.scss";
/**
 * Composant créant la card projet
 * @param {string} title - titre du projet
 * @param {string} description - description du projet
 * @param {string} image - nom de l'image (fournir un format webp)
 * @param {string} alt - alt de l image
 * @param {string} linkPage - lien vers la page active
 * @param {string} linkCode - lien vers le code github
 * @param {string} logos - tableau de logo incluant des strings des logos au format png
 */

export default function ProjetCard({
    title,
    description,
    image,
    alt,
    linkPage,
    linkCode,
    logos,
}) {
    return (
        <div className="projet-card">
            <div className="projet-card__image">
                <img
                    src={require("../../../../assets/projets/" +
                        image +
                        ".webp")}
                    alt={alt}
                />
            </div>
            <div className="projet-card__content">
                <div>
                    <h3 className="projet-card__content--title">{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="projet-card__content--icons">
                    <div className="card-icons__skills">
                        {logos.map((logo) => (
                            <div
                                className="card-icons__skills--style"
                                key={`logoskills-${logo}`}
                            >
                                <img
                                    src={require("../../../../assets/logo/" +
                                        logo +
                                        ".png")}
                                    alt="logo skills"
                                ></img>
                            </div>
                        ))}
                    </div>
                    <div className="card-icons__link">
                        {linkCode && (
                            <a
                                href={linkCode}
                                aria-label="lien vers le code github"
                                target="blank"
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>
                        )}
                        {linkPage && (
                            <a
                                href={linkPage}
                                aria-label="lien vers la page en ligne"
                                target="blank"
                            >
                                <i className="fa-solid fa-link"></i>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
