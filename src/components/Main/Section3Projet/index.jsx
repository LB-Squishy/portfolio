import "./style.scss";
import ProjetCard from "./ProjetCard";
import projets from "../../../data/projets.json";
import { useState } from "react";
/**
 *
 */

function SectionProjet() {
    const projetsReverses = [...projets].reverse();
    const [filter, setFilter] = useState("Tous");
    function filterProjects(projetsReverses, filter) {
        if (filter === "Tous") {
            return projetsReverses;
        } else if (filter === "Formation") {
            return projetsReverses.filter(
                (projet) => projet.type === "Formation"
            );
        } else if (filter === "Personnel") {
            return projetsReverses.filter(
                (projet) => projet.type === "Personnel"
            );
        } else if (filter === "En Cours") {
            return projetsReverses.filter((projet) => projet.stade === "");
        } else if (filter === "Terminé") {
            return projetsReverses.filter(
                (projet) => projet.stade === "Terminé"
            );
        }
        return projetsReverses;
    }
    return (
        <section id="projet">
            <div className="section-projet-container">
                <h2 className="section-projet-container__title">Mes Projets</h2>
                <div className="filtres-container">
                    <button
                        className={`filtres-container__btn ${
                            filter === "Tous" ? "active" : ""
                        }`}
                        onClick={() => setFilter("Tous")}
                    >
                        Tous
                    </button>
                    <button
                        className={`filtres-container__btn ${
                            filter === "Formation" ? "active" : ""
                        }`}
                        onClick={() => setFilter("Formation")}
                    >
                        Formation
                    </button>
                    <button
                        className={`filtres-container__btn ${
                            filter === "Personnel" ? "active" : ""
                        }`}
                        onClick={() => setFilter("Personnel")}
                    >
                        Personnel
                    </button>
                    <button
                        className={`filtres-container__btn ${
                            filter === "En Cours" ? "active" : ""
                        }`}
                        onClick={() => setFilter("En Cours")}
                    >
                        En Cours
                    </button>
                    <button
                        className={`filtres-container__btn ${
                            filter === "Terminé" ? "active" : ""
                        }`}
                        onClick={() => setFilter("Terminé")}
                    >
                        Terminé
                    </button>
                </div>
                <div className="projet-container">
                    {filterProjects(projetsReverses, filter).map((projet) => (
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
