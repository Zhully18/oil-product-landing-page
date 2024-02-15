import React from 'react'
import './Testimonial.css'
import pic from '../Assets/p-img.jpg'

const Testimonial = () => {
  return (
    <div>
      <section className="testimonials">
        <div className="test">
            <h1 className="test_head">Testimonial</h1>
            <p className="test_desc">See what our customers have said about us
                in the below section on your screen
            </p>
        </div>
        <div className="test_customer">
            <div className="test_disc">
                <img src={pic} alt=""/>
                <p className="talk">I recommend the argan seed oil produced by <br/>
                    healing bird to use. I have made use of it and <br/> it has helped my hair 
                    growth journey significantly.<br/>I recommend the argan seed oil produced by 
                    healing bird to use. I have made use of it and <br/>it has helped my hair 
                    growth journey significantly.
                </p>
            </div>
            <div className="test_disc">
                <img src={pic} alt=""/>
                <p className="talk">I recommend the argan seed oil produced by <br/>
                    healing bird to use. I have made use of it and <br/> it has helped my hair 
                    growth journey significantly. <br/>I recommend the argan seed oil produced by 
                    healing bird to use. I have made use of it and <br/>it has helped my hair 
                    growth journey significantly.
                </p>
            </div>
            <div className="test_disc">
                <img src={pic} alt=""/>
                <p cclassName="talk">I recommend the argan seed oil produced by <br/>
                    healing bird to use. I have made use of it and <br/>it has helped my hair 
                    growth journey significantly.<br/>I recommend the argan seed oil produced by 
                    healing bird to use. I have made use of it and <br/>it has helped my hair 
                    growth journey significantly.
                </p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Testimonial