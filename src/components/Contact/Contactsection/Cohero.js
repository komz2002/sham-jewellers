import React from 'react'
import "./Cohero.css"

function Cohero() {
  return (
    <div className="container-fluid">
      <div className="container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5394.027733727928!2d76.68058436953935!3d30.702113853686864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef047441a8d3%3A0x659238cc51cb8ffc!2sR%2F135%2C%20Sector%2074%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20160055!5e0!3m2!1sen!2sin!4v1723238225363!5m2!1sen!2sin"
        width="100%"
        height="500px"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
      </div>
  
      <div className='chandigarh'>
        <h1>Chandigarh</h1><br/>
        SCO 168-171,<br/>
        Sector 34 A,<br/>
        Chandigarh.<br/>
      info@shamjewellers.com
      </div>
    </div>
  )
}

export default Cohero;