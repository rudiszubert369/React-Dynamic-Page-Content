import Newsletter from './Newsletter.js'
import Hero from './Hero.js'
import Testimonial from './Testimonial.js'

function WebsiteSections(props) {
  const sections = props.sections;

  if (!Array.isArray(sections)) {
    return null;
  }

  if (sections) {
    return (
      <main>
        {sections.map(section => {
          switch (section.type) {
            case 'hero':
              return <Hero key={section.type} text={section.text} img={section.img} />;
            case 'newsletter':
              return <Newsletter key={section.type} />;
            case 'testimonial':
              return <Testimonial key={section.type} text={section.text} author={section.author} />;
            default:
              return null;
          }
        })}
      </main>
    );
  }
}

export default WebsiteSections