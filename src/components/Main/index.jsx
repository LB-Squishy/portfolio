import SectionAbout from "../SectionAbout";
import SectionCompetences from "../SectionCompetences";
import SectionProjet from "../SectionProjet";
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
            </div>
        </main>
    );
}

export default Main;
