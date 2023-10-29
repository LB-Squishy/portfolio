import "./style.scss";
import ProjetCard from "./ProjetCard";
import projets from "../../../data/projets.json";
/**
 *
 */

function SectionProjet(title) {
    return (
        <section id="projet">
            <div className="section-projet-container">
                <h2 className="section-projet-container__title">Mes Projets</h2>
                <div className="filtres-container">
                    <div className="filtres-container__btn">Tous</div>
                    <div className="filtres-container__btn">Formation</div>
                    <div className="filtres-container__btn">Professionnels</div>
                    <div className="filtres-container__btn">En Cours</div>
                    <div className="filtres-container__btn">Terminés</div>
                </div>
                <div className="projet-container">
                    {projets.map((projet) => (
                        <ProjetCard
                            key={`projet-${projet.id}`}
                            title={projet.title}
                            description={projet.description}
                            image={projet.image}
                            alt={projet.alt}
                            linkPage={projet.linkPage}
                            linkCode={projet.linkCode}
                            logos={projet.logos}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SectionProjet;
