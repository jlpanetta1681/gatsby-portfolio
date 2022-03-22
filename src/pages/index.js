import * as React from 'react';
import HomeHero from '../components/HomeHero';
import Layout from "../components/Layout";
import Typed from "react-typed"
import profPic from "../images/prof-pic.jpeg"

const IndexPage = () => {
  return (
    <Layout>

      <h1 className="intro-title mb-4" style={{
        display: "flex",
        justifyContent: "center",
      }}>
        Hello, I am Joseph Panetta
      </h1>

      <p className="intro-subtitle" style={{
        display: "flex",
        justifyContent: "center",
      }}>

        <span className="text-slider-items"></span>
        <strong className="text-slider" style={{
          
        }}>

          <Typed
            strings={[
              "Web Developer",
              "React Engineer",
              "On The Cutting Edge Of Technology",
              "Solving Todays Callenges",
              "For Tomorrow's Web"
            ]}
            typeSpeed={80}
            backDelay={1100}
            backSpeed={30}
            loop
          />
        </strong>
      </p>

      <div classname="imageBox" style={{
         display: "flex",
         justifyContent: "center",
      }}>
        
      <img src={profPic} alt="profPic"></img>
      </div>
        <HomeHero style={{
             fontSize: "2.5rem",

        }} title="" subtitle="If you need a web developer, we should talk!" />
    </Layout>
  )
}

export default IndexPage;























