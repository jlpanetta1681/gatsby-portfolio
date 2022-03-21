import React from 'react'

const Navigation = () => {
  const navItems = [
    {label: "Learm more", url: "./about-me"},
    {label: "My work", url: "./portfolio"}
];

return (
<nav>
    <ul>
     {navItems.map(({ label, url }) => {
        <li> 
            <a href={url}> {label} </a>
        </li>
})}
    </ul>
</nav>
            

              
)}



export default Navigation;
