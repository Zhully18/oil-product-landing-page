import React from 'react'
import oil from '../Assets/oil.png'
import spark from '../Assets/spark.png'
import './Home.css'

const Home = () => {
  return (
    <div>
      <section>
        <div className="home">
          <div className="left">
                <h1>Ultra <br /> Protein <br />Hair Oil</h1>
                <p>A beauty nourishing hair oil mixed with concentrated organic product used
                    to nourish hair. It soothes the scalp and repairs damaging hair.
                    An anti-dandruff hair oil that works like magic in days after usage.
                </p>
                <button> Buy Now</button>
            </div>
            <div className="right">
                <img src={oil} alt=""/>
                <div className="circle_shape"></div>
                <div className="spark_container">
                    <div className="spark1">
                        <img src={spark} alt=""/>
                    </div>
                    <div className="spark2">
                        <img src={spark} alt=""/>
                    </div>
                    <div className="spark3">
                        <img src={spark} alt=""/>
                    </div>
                    <div className="spark4">
                        <img src={spark} alt=""/>
                    </div>
                    <div className="spark5">
                        <img src={spark} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* The dark part */}
    <div className="dark">
        <div className="details">
            <p>INGREDIENTS</p>
            <h2>100% Organic</h2>
        </div>
        <div className="details">
            <p>Material</p>
            <h2>Beauty Grade</h2>
        </div>
        <div className="details">
            <p>Flavour</p>
            <h2>9 Variation</h2>
        </div>
        <div className="details">
            <p>Volume</p>
            <h2>200ml</h2>
        </div>
        <div className="details">
            <p>Chemical</p>
            <h2>Free</h2>
        </div>
    </div>
    </div>
  )
}

export default Home