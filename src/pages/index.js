import * as React from "react"

import ve3feoMorse from '../images/ve3feo-morse-500.png'
import barcLogo from '../images/BARC-100.png'
import racLogo from '../images/rac-100.png'
import skccLogo from '../images/SKCCLogo-100.png'

import '../main.css'
const pageStyles = {
  color: "#232129",
  padding: 50,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  maxWidth: 800
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 20,
  justifyContent: "center"
}

const paragraphStyles = {
  marginBottom: 20,
}




const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        <div>Welcome!</div><img src={ve3feoMorse} alt="VE3FEO"/>
      </h1>
      <p style={paragraphStyles}>Thank you very much for visiting my QRZ page. This is work in progress...</p>
      <h2>Radio clubs</h2>
      <div className="clubsContainer">
        <a href="https://www.barc.ca/" alt="Burlington Amateur Radio Club"><img src={barcLogo} alt="BARC Logo"/></a>
        <a href="https://www.rac.ca/" alt="Radio Amateurs of Canada"><img src={racLogo} alt="RAC Logo"/></a>
        <a href="https://www.skccgroup.com/" alt="Straight Key Century Club"><img src={skccLogo} alt="SKCC Logo"/></a>
      </div>
      <h2>Last 15 contacts</h2>
      
      <iframe title="QRZ Log" align="top" frameborder="0" height="500" scrolling="yes" src="https://logbook.qrz.com/lbstat/VE3FEO/" width="800"></iframe>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
