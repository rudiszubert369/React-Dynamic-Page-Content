import React from 'react';
import Newsletter from './Newsletter.js'
import Hero from './Hero.js'
import Testimonial from './Testimonial.js'

function WebsiteSections(props) {
  const sections = props.sections;

  if (sections) {
    return (
      <main>
        {sections.map(section => {
          if (section.type === 'hero') {
            return <Hero key={section.type} text={section.text} img={section.img} />;
          } else if (section.type === 'newsletter') {
            return <Newsletter key={section.type} />;
          } else if (section.type === 'testimonial') {
            return <Testimonial key={section.type} text={section.text} author={section.author} />;
          } else {
            return null;
          }
        })}
      </main>
    );
  }

}

export default WebsiteSections