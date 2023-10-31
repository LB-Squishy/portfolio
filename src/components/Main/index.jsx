import SectionAbout from "../Main/Section1About";
import SectionCompetences from "../Main/Section2Competences";
import SectionProjet from "../Main/Section3Projet";
import SectionContact from "../Main/Section4Contact";
import "./style.scss";

/**
 *
 */

function Main() {
    return (
        <main>
            <div className="main-container">
                <SectionAbout />
                <SectionCompetences />
                <SectionProjet />
                <SectionContact />
            </div>
        </main>
    );
}

export default Main;
