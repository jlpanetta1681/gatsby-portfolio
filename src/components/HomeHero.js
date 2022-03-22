import React from 'react';
import AboutMePage from "../pages/about-me"


const HomeHero = ({ title, subtitle, ctas }) => {
  return (
    <section>
        {title && <h1>{title}</h1>}
        {subtitle && <p>{subtitle}</p>}
        {ctas && ctas.map(({label, url}) => <a href={url}>{label}</a>)}
    </section>
            


        );
  
};

export default HomeHero