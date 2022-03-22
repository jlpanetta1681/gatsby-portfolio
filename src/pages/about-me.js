import React from 'react'
import Layout from "../components/Layout"

const AboutMePage = () => {
  return (
    <Layout>
      <h1 style={{
        display: "flex",
        alignItems: "center"}}>
        All about me
      </h1>
      <section style={{
        background: "linear-gradient(to bottom, lightBlue, green)",
        display: "flex",
        alignItems: "center",
        height: "480px"
        }}>

        Cupidatat velit esse nostrud deserunt enim velit dolore do elit veniam sunt cillum. Nulla nulla enim Lorem consectetur labore nulla minim. Officia non elit ad ad anim amet incididunt tempor enim sit ea. Exercitation commodo eiusmod incididunt sint id est dolore exercitation non pariatur. Nostrud sit sint adipisicing dolor eiusmod ex. Ad veniam est tempor in in ut qui aliquip ex quis
        </section>

        <div className="aboutMeLowerPics" style={{
            display: "flex",
            justifyContent: "center"
         
        }}>
          <img src="https://www.sciencealert.com/images/2018-06/processed/HiggsBosonShutterstock_top_quark_1024.jpg" alt="quark"/>
          <img src="https://images.newscientist.com/wp-content/uploads/2020/08/07120431/07-aug_higgs.jpg" alt="LHC"/> 
          <img src="https://i.natgeofe.com/n/16c6d78a-e5be-479d-b229-0caaa39d2ce4/55979_square.jpg" alt="higgs-boson"/>

        </div>
    </Layout>
  )
}


export default AboutMePage;