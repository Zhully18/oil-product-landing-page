import React from 'react'
import oil from '../Assets/oil.png'
import './Desc.css'
import { FaFireFlameCurved, FaFireFlameSimple } from "react-icons/fa6";
import { FaCheckDouble } from "react-icons/fa6";

const Desc = () => {
  return (
    <div>
      <section className="description">
        <div className="desc_header">
            <h1>Why Choose Healing Bird?</h1>
            <p>Our product is the best product that can be used on your natural hair. <br/>
                Make use of our product and see for yourself after use
            </p>
        </div>
        <div className="main_desc">
            <div className="first">
                <div className="initial">
                <FaFireFlameCurved className='icons'/>
                    <h3>Best Hair Cream</h3>
                    <p>Our hair cream is one of the best <br/> hair cream and it works well on everyone</p>
                </div>
                <div className="final">
                <FaFireFlameCurved className='icons' />
                    <h3>Sustainable Practices</h3>
                    <p>Our hair cream is one of the best <br/> hair cream and it works well on everyone</p>
                </div>
            </div>
            <div className="second">
                <img src={oil} alt=""/>
                <div className="semi_shape"></div>
            </div>
            <div className="first">
                <div cclassName="initial">
                <FaFireFlameSimple className='icons'/>
                    <h3>Best Hair Cream</h3>
                    <p>Our hair cream is one of the best <br/> hair cream and it works well on everyone</p>
                </div>
                <div className="final">
                <FaFireFlameSimple  className='icons'/>
                    <h3>Best Hair Cream</h3>
                    <p>Our hair cream is one of the best <br/> hair cream and it works well on everyone</p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Desc