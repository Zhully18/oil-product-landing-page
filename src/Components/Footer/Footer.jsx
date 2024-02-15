import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="footer_body">
            <div className="right">
                <div className="footer_talk">
                    <h2>Subscribe for more Updates</h2>
                    <p>There are updates made on new and existing prosucts.
                    Subscribe now <br/>to be the first to get this exiting updates 
                    about our products.
                    </p>
                </div>
            </div>
            <div className="footer_left">
                <input type="text" placeholder="Email address"/>
                <button>Subscribe</button>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Footer