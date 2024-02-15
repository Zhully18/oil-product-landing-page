import React from 'react'
import oil from '../Assets/oil.png'
import './Product.css'

const Product = () => {
  return (
    <div>
      <section className="product">
        <div className="p_header">
            <h1>Our Products</h1>
            <p className="p_text">Our product is the best product that can be used on your natural hair. <br/>
                Make use of our product and see for yourself after us
            </p>
            <div className="product_display">
                <div className="products">
                    <img src={oil} alt=""/>
                    <div className="upp_semi_shape"></div>
                    <h4 className="text">Argan Oil Cream</h4>
                    <p className="text">Our hair cream is one of the best <br/> hair cream and it works well on everyone</p>
                    <button> Buy Now</button>
                </div>
                <div className="products">
                    <img src={oil} alt=""/>
                    <div className="upp_semi_shape"></div>
                    <h4 className="text">Argan Oil Cream</h4>
                    <p className="text">Our hair cream is one of the best <br/> hair cream and it works well on everyone</p>
                    <button> Buy Now</button>
                </div>
                <div className="products">
                    <img src={oil} alt=""/>
                    <div className="upp_semi_shape"></div>
                    <h4 className="text">Argan Oil Cream</h4>
                    <p className="text">Our hair cream is one of the best <br/> hair cream and it works well on everyone</p>
                    <button> Buy Now</button>
                </div>
                <div className="products">
                    <img src={oil} alt=""/>
                    <div className="upp_semi_shape"></div>
                    <h4 className="text">Argan Oil Cream</h4>
                    <p className="text">Our hair cream is one of the best <br/> hair cream and it works well on everyone</p>
                    <button> Buy Now</button>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Product