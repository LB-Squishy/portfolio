import "./style.scss";
import portrait from "../../../assets/portrait.png";

/**
 *
 */

function SectionAbout() {
    return (
        <section id="about">
            <h2 className="h2-hidden">A Propos</h2>
            <div className="section-about-container">
                <div className="section-about-container__text">
                    <h3 className="h3-about">
                        Hello ! <br />
                        Je m'appelle Laurent Le Boulbar et je suis Développeur
                        Front-End!
                    </h3>
                    <p>
                        Après diverses expériences en Architecture, de la
                        conception à l'échelle du paysage jusqu'à l'agencement
                        d'intérieur, j'ai pris la décision de me tourner vers ma
                        passion, et de me reconvertir dans le développement web.
                    </p>
                    <p>
                        C'est naturellement que j'ai abordé OpenClassroom, tout
                        d'abord en autodidacte, puis au travers une formation
                        intensive de 9 mois qui m'a permis d'acquérir les
                        compétences nécessaires afin d'en faire mon métier.
                    </p>
                    <p>
                        N'hésitez pas à parcourir mon portfolio pour découvrir
                        mes compétences et mon univers. Si vous souhaitez
                        échanger, n'hésitez pas à me contacter, j'ai plaisir à
                        travailler avec des esprits créatifs et à échanger
                        autour de projets !
                    </p>
                </div>
                <div className="section-about-container__portrait">
                    <img src={portrait} alt="portrait" />
                </div>
            </div>
        </section>
    );
}

export default SectionAbout;
