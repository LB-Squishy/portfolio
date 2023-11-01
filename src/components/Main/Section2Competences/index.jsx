import "./style.scss";
import CompetencesLogo from "./CompetencesLogo";
import competenceLogoData from "../../../data/competencesLogo.json";

/**
 * Composant créant la section compétences
 */

export default function SectionCompetences() {
    return (
        <section id="competences">
            <div className="section-competences-container">
                <h2>Mes Compétences</h2>
                <div className="hardskills">
                    <div className="hardskills__logo">
                        {competenceLogoData.map((logo) => (
                            <CompetencesLogo
                                key={`logo-${logo.id}`}
                                image={logo.image}
                                alt={logo.alt}
                            />
                        ))}
                    </div>
                    <div className="hardskills__line"></div>
                    <div className="hardskills__list">
                        <p>Maquettage</p>
                        <p>Methodologie Agile</p>
                        <p>Référencement SEO</p>
                        <p>Accessibilité</p>
                    </div>
                </div>
                <div className="softskills-line"></div>
                <div className="softskills">
                    <p>Rigoureux</p>
                    <p>Autonome</p>
                    <p>Perséverant</p>
                    <p>Créatif</p>
                    <p>Curieux</p>
                    <p>Autodidacte</p>
                </div>
            </div>
        </section>
    );
}
