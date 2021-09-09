import React from 'react'
import './style.scss'
import Programming from '../../assets/images/Programming.svg'
const Welcome = () => {
    return (
        <section className="welcome">
            <div className="content">
                <div>
                    Building Brands. Creating Products. Transforming Business.
                </div>
                <button>View Showcase</button>
            </div>
            <div className="hero-img">
                <img src={Programming} alt="" />
            </div>
        </section>
    )
}
export default Welcome