import React from 'react';
import Newsletter from './Newsletter.js'
import Hero from './Hero.js'
import Testimonial from './Testimonial.js'

function WebsiteSections(props) {
  const sections = props.sections;
  console.log(sections);
  if (sections) {
    return (
      <div>
        {sections.map(section => {
          if (section.type === 'hero') {
            return <Hero text={section.text} img={section.img} />;
          } else if (section.type === 'newsletter') {
            return <Newsletter />;
          } else if (section.type === 'testimonial') {
            return <Testimonial text={section.text} author={section.author} />;
          } else {
            return null;
          }
        })}
      </div>
    );
  }

}

export default WebsiteSections