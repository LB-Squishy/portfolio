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
                        ".jpg")}
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
                        <a href={linkCode}>
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href={linkPage}>
                            <i className="fa-solid fa-link"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjetCard;
