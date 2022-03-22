import React from 'react'

const Navigation = () => {
  const navItems = [
    {label: "Who Is This Guy Anyway?!", url: "/about-me"},
    {label: "My work", url: "/portfolio"}

  ]

return (
  <nav>
     <ul 
     style={{
       display: "flex",
       listStyle: "none"
     }}>
       {navItems.map(({ label, url }) => {
         return (

           <li> 
            <a href={url} 
            style={{
              display: "block",
              padding: "0.75em 1.5em",
              textDecoration: "none",
              fontWeight: "bold",
              color: "white",
            }}>
              {label}
            </a>
        </li>
      )
      })}
      </ul>
      </nav>
      );
};
export default Navigation;