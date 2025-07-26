import sexypic from '../../assets/Alex Spartan Race.jpg';
import './About.scss';

function About() {
  return (
    <>
      <div className="about__container">
        <img src={sexypic} alt="Alexandre Ruggeri" className="about__photo" />
        <div className="about__content">
          <h1>A propos de moi</h1>
          <div className="about__text">
            <p>
              Geek par nature, je suis passionné par le développement web,
              J'aime créer des applications modernes et performantes. Je suis
              motivé, curieux et toujours prêt à apprendre de nouvelles
              technologies. Mon passé en dans le social fait de moi un
              interlocuteur facile et toujours capable de travailler en équipe!
            </p>
            <a
              href="/CV Développeur Web application Javascript React Example.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="about__cv-link"
            >
              Consultez mon CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
