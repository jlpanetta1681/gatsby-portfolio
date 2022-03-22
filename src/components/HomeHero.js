import React from 'react';



const HomeHero = ({title, subtitle, ctas}) => {
  return (
    <section>
        {title && <h1>{title}</h1>}
        {subtitle && <p>{subtitle}</p>}
 
    </section>
            


        );
  
};

export default HomeHero