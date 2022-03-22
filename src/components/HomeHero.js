import React from 'react';



const HomeHero = ({title, subtitle, ctas}) => {
  return (
    <section 
    style={{
      background: "linear-gradient(to bottom, lightBlue, green)",
      display: "flex",
      alignItems: "center",
      height: "450px",

    }}>
      <div className="container" style={{textAlign: "center" }}>
        {title && <h1>{title}</h1>}
        {subtitle && <p>{subtitle}</p>}
 </div>
    </section>
            


        );
  
};

export default HomeHero