import React from 'react'
import Layout from "../components/Layout"
import video from "../images/20210315_203237_1_001.mp4"

const AboutMePage = () => {
  return (
    <Layout>
      <h1 style={{
        display: "flex",
        justifyContent: "center"
      }}>
        All about me
      </h1>

      <div className="imageBox2" style={{
          display: "flex",
          justifyContent: "center",
          margin: "5px",


      }}>

        <img src="https://www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg" alt="circuit"></img>
      </div>


      <section style={{
        background: "linear-gradient(to bottom, lightBlue, green)",
        display: "flex",
        justifyContent: "center",

        height: "480px",
        paddingLeft: "20px",
        paddingRight: "20px",
        marginLeft: "20px",
        marginRight: "20px",
      }}>


        <p style={{
          maxWidth: "50%",
          paddingRight: "px",
          fontSize: "1.4rem",
        }}>
          I am a self driven, highly motivated, Constant and forever learner. My passion lies in designing and building highly scalable, accessible applications and websites for the todays business and strategic needs. I am a recent Graduate from Lambda School online for full stack web development and technical interviewing. I am currently searching for a role that will provide a growth environment that will foster the great developer in me. MongoDB and Express , as well as React and Node have become my favorite tools in my toolkit. and I continue to learn more about them each and every day as you will see in my ever changing projects page. Have a look around. Learn a little about me and if you like what you see then feel free to cliock the link to my resume, github, and linkedin profiles to learn more. I am open to work and actively pursuing my Web development career.
        </p>
      </section>

      <div className="aboutMeLowerPics" style={{
        display: "flex",
        justifyContent: "center"

      }}>
        <img src="https://www.sciencealert.com/images/2018-06/processed/HiggsBosonShutterstock_top_quark_1024.jpg" alt="quark" />
        <img src="https://images.newscientist.com/wp-content/uploads/2020/08/07120431/07-aug_higgs.jpg" alt="LHC" />
        <img src="https://i.natgeofe.com/n/16c6d78a-e5be-479d-b229-0caaa39d2ce4/55979_square.jpg" alt="higgs-boson" />

      </div>
    </Layout>
  )
}


export default AboutMePage;