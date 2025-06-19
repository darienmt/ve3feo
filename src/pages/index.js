import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 50,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}


const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Welcome!
      </h1>
      <p style={paragraphStyles}>Thank you very much for visiting my QRZ page. This is work in progress...</p>
      <h2>Last 15 contacts</h2>
      
      <iframe title="QRZ Log" align="top" frameborder="0" height="500" scrolling="yes" src="https://logbook.qrz.com/lbstat/VE3FEO/" width="800"></iframe>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
