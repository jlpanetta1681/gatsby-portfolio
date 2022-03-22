import React from 'react';

import Navigation from "./Navigation.js";

const Header = () => {
  return (
    
  <header 
    style={{
     background: "#00aeff",
  }}
  >
    <div className="container" style=
    {{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      }}
      >
      
      
      <a href="/" 
      style={{
        fontSize: "2rem",
        textDecoration: "none",
        color: "white",
        textTransform: "uppercase",
      }}>Joseph Panetta</a>
    <Navigation />
    </div>
  </header>
    );
  };
export default Header
    
     

  
