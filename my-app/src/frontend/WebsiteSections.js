import React from 'react';

function WebsiteSections(props) {
  const sections = props.sections;

  return (
    <div>
      {sections.map(section => {
        if (section.type === 'hero') {
          return <Hero section={section} />;
        } else if (section.type === 'products') {
          return <ProductList section={section} />;
        } else if (section.type === 'cta') {
          return <CTA section={section} />;
        } else {
          return null;
        }
      })}
    <div/>
  );
}




