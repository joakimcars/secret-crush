import React from 'react'

const Footer = (props) => {
  const containerStyle = {
    marginTop: '0.8%',
    width: '75%',
    marginLeft: '12.5%',
    marginRigth: '12.5%',
    display: 'block'

  }
  const linkStyle = {
    marginLeft: '4%',
    fontWeight: 'bold'
  }
  const crStyle = {
    fontWeight: 'bold'
  }
  return (
    <div className='container body-content' style={containerStyle}>
      <footer>
        <p style={crStyle}>&copy; 2018 Secret Crush - Who is your secret crush?<a style={linkStyle} href='#'>Terms</a> <a style={linkStyle} href='#'>About</a><a style={linkStyle} href='#'>Contact</a></p>
      </footer>
    </div>
  )
}

export default Footer
