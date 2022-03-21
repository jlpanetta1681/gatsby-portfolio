import * as React from 'react';
import HomeHero from '../components/HomeHero';


const IndexPage = () => {
  return (
  <div>
     <HomeHero title="Hello, Joseph" subtitle="Welcome to your portfolio!!" ctas={[
           {label: "Learm more", url: "./about-me"},
           {label: "My work", url: "./portfolio"}

     ]}/>
     
  </div>
  )
}

export default IndexPage;
