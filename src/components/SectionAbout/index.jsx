import "./style.scss";
import portrait from "../../assets/portrait.png";

/**
 *
 */

function SectionAbout() {
    return (
        <section id="about">
            <div className="section-about-container">
                <div className="section-about-container__text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Harum asperiores sed, dolores nemo, voluptates repudiandae a
                    deserunt commodi nobis adipisci quis quaerat alias corporis
                    sit? Facilis molestiae vero est et? Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Et minus sit delectus
                    dolore amet architecto aut, neque ipsum quas distinctio quos
                    ad nostrum ducimus pariatur, quo, dolores blanditiis dolor
                    aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Dolore ducimus illo libero nihil corrupti eos
                    provident, consequuntur inventore nesciunt ut. Velit
                    expedita nam ullam nostrum, eligendi mollitia optio tempore
                    laudantium!Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Harum asperiores sed, dolores nemo,
                    voluptates repudiandae a deserunt commodi nobis adipisci
                    quis quaerat alias corporis sit? Facilis molestiae vero est
                    et? Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Et minus sit delectus dolore amet architecto aut,
                    neque ipsum quas distinctio quos ad nostrum ducimus
                    pariatur, quo, dolores blanditiis dolor aliquam. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Dolore ducimus
                    illo libero nihil corrupti eos provident, consequuntur
                    inventore nesciunt ut. Velit expedita nam ullam nostrum,
                </div>
                <div className="section-about-container__portrait">
                    <img src={portrait} alt="portrait" />
                </div>
            </div>
        </section>
    );
}

export default SectionAbout;
