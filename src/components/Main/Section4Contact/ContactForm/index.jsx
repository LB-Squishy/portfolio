import { useRef, useState } from "react";
import "./style.scss";
import emailjs from "@emailjs/browser";

/**
 *
 */

function ContactForm() {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const sendForm = (e) => {
        e.preventDefault();
        setIsSending(true);
        emailjs
            .sendForm(
                "portfolio_contact",
                "portfolio_form",
                form.current,
                "bJwTcoSBrXX2JBZwx"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    form.current.reset();

                    setTimeout(() => {
                        setIsSending(false);
                    }, 3000);
                },
                (error) => {
                    console.log(error.text);
                    setIsSending(false);
                }
            );
    };
    return (
        <form ref={form} onSubmit={sendForm}>
            <div className="inputBox">
                <label htmlFor="nom">Nom</label>
                <input
                    type="text"
                    id="nom"
                    name="user_name"
                    placeholder="Votre nom"
                    required
                    autoComplete="on"
                />
            </div>
            <div className="inputBox">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder="Votre e-mail"
                    required
                    autoComplete="on"
                />
            </div>
            <div className="inputBox textareaBox">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Votre message"
                ></textarea>
            </div>
            <button className="contact-submit-btn" type="submit" value="submit">
                {isSending
                    ? "Message envoyé. Je reviens vers vous rapidement."
                    : "Envoyer"}
            </button>
        </form>
    );
}

export default ContactForm;
