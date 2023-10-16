import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                       Giftopia is  helps you celebrate relations by sending birthday cake, flowers, chocolates, plants, gifts, as well as personalized gifts online. We operate irrespective of geographical barriers to mark your special days like birthdays, anniversaries, Valentine’s Day, etc., and festivals such as Diwali, Holi, Christmas, and Rakhi in style. You can send your love and wishes to your dear ones miles away as we stand as a shining light for celebrations and heartfelt gestures.

Our strong online and offline presence along with our trusted delivery partners has made our service reach over 20,000 pin codes across 700 cities in India. So far, our exclusive range of goodies and reliable doorstep delivery services have satisfied over 20 million customers worldwide.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About