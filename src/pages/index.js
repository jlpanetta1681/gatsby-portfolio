import * as React from 'react';
import HomeHero from '../components/HomeHero';
import Layout from "../components/Layout";
import Typed from "react-typed"

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
          display: "flex",
        }}>

          <Typed
            strings={[
              "Front End Developer",
              "Software Engineer",
              "On The Cutting Edge Of Software and Design",
            ]}
            typeSpeed={80}
            backDelay={1100}
            backSpeed={30}
            loop
          />
        </strong>
      </p>
        <HomeHero title="" subtitle="Welcome to your portfolio!!" />
    </Layout>
  )
}

export default IndexPage;























