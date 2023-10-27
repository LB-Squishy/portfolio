import "./style.scss";
import logofigma from "../../../assets/logo web/figma.png";
import logogithub from "../../../assets/logo web/github.png";
import logoindesign from "../../../assets/logo web/indesign.png";
import logojavascript from "../../../assets/logo web/javascript.png";
import logonodejs from "../../../assets/logo web/nodejs.png";
import logonotion from "../../../assets/logo web/notion.png";
import logophotoshop from "../../../assets/logo web/photoshop.png";
import logoreact from "../../../assets/logo web/react.png";
import logoredux from "../../../assets/logo web/redux.png";
import logosass from "../../../assets/logo web/sass.png";
import logoswagger from "../../../assets/logo web/swagger.png";
import logovscode from "../../../assets/logo web/vscode.png";

/**
 *
 */

function SectionCompetences() {
    return (
        <section id="competences">
            <div className="section-competences-container">
                <h2>Mes Compétences</h2>
                <div className="hardskills">
                    <div className="hardskills__logo">
                        <div className="hardskills__logo--style">
                            <img
                                src={logojavascript}
                                alt="logojavascript"
                            ></img>
                        </div>
                        <div className="hardskills__logo--style">
                            <img src={logoreact} alt="logoreact"></img>
                        </div>
                        <div className="hardskills__logo--style">
                            <img src={logonodejs} alt="logonodejs"></img>
                        </div>
                        <div className="hardskills__logo--style">
                            <img src={logoredux} alt="logoredux"></img>
                        </div>
                        <div className="hardskills__logo--style">
                            <img src={logosass} alt="logosass"></img>
                        </div>
                        <div className="hardskills__logo--style">
                            <img src={logophotoshop} alt="logophotoshop"></img>
                        </div>
                        <div className="hardskills__logo--style">
                            <img src={logogithub} alt="logogithub"></img>
                        </div>
                        <div className="hardskills__logo--style">
                            <img src={logonotion} alt="logonotion"></img>
                        </div>
                        <div className="hardskills__logo--style">
                            <img src={logofigma} alt="logofigma"></img>
                        </div>
                        <div className="hardskills__logo--style">
                            <img src={logoswagger} alt="logoswagger"></img>
                        </div>
                        <div className="hardskills__logo--style">
                            <img src={logovscode} alt="logovscode"></img>
                        </div>
                        <div className="hardskills__logo--style">
                            <img src={logoindesign} alt="logoindesign"></img>
                        </div>
                    </div>
                    <div className="hardskills__line"></div>
                    <div className="hardskills__list">
                        <p>Maquettage</p>
                        <p>Methodologie Agile</p>
                        <p>Référencement SEO</p>
                        <p>Accessibilité</p>
                        <p>API Rest</p>
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

export default SectionCompetences;
