import SectionAbout from "../Main/Section1About";
import SectionBlog from "../Main/Section4Blog";
import SectionCompetences from "../Main/Section2Competences";
import SectionContact from "../Main/Section5Contact";
import SectionProjet from "../Main/Section3Projet";
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
                <SectionBlog />
                <SectionContact />
            </div>
        </main>
    );
}

export default Main;
