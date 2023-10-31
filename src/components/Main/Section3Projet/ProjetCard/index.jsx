import "./style.scss";
/**
 *
 */

function ProjetCard({
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
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>
                        )}
                        {linkPage && (
                            <a
                                href={linkPage}
                                aria-label="lien vers la page en ligne"
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

export default ProjetCard;
