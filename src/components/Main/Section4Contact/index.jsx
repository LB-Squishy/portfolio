import ContactForm from "./ContactForm";
import "./style.scss";

/**
 *
 */

function SectionContact() {
    return (
        <section id="contact">
            <div className="section-contact-container">
                <h2 className="section-contact-container__title">Contact</h2>
                <div className="section-contact-container__content">
                    <div className="contact-form-container">
                        <ContactForm />
                    </div>
                    <div className="contact-link">
                        <a
                            className="contact-link__telephone"
                            href="tel:+33630076092"
                        >
                            <div className="contact-link-logo">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="contact-link-title">
                                Appelez-moi
                            </div>
                            <div className="contact-link-text">
                                Portable:
                                <br />
                                06.30.07.60.92
                            </div>
                        </a>
                        <a
                            className="contact-link__email"
                            href="mailto:laurentleboulbar@gmail.com"
                        >
                            <div className="contact-link-logo">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="contact-link-title">Email</div>
                            <div className="contact-link-text">
                                adresse mail:
                                <br />
                                laurentleboulbar@gmail.com
                            </div>
                        </a>
                        <a
                            className="contact-link__adresse"
                            href="https://maps.app.goo.gl/MVG1D4BV7NU9fMtN7"
                        >
                            <div className="contact-link-logo">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="contact-link-title">Adresse</div>
                            <div className="contact-link-text">
                                8 Rue Pontual
                                <br />
                                56150 Guénin
                            </div>
                        </a>
                        <div className="contact-link__follow">
                            <div className="contact-link__follow--title">
                                Suivez-moi
                            </div>
                            <div className="contact-link__follow--text">
                                Gardons contact sur les différents réseaux.
                            </div>
                            <div className="contact-link__follow--logo">
                                <a
                                    href="https://github.com/LB-Squishy"
                                    aria-label="lien vers mon github"
                                >
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/laurent-lb-7364a6299"
                                    aria-label="lien vers mon linkedin"
                                >
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionContact;
