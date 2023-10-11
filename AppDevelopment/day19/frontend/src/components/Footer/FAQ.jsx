import React from 'react'
import Footer from './Footer';
import '../../assets/FAQ.css';
import Header from '../../components/Header';
export const FAQ = () => {
    return (
        <div className='main'>
            <Header />
            <div className='etc-wrapper'>
                <div className='etc-container shadow'>
                    <h1 className='primary etc-title shadow'> Frequently Asked Questions </h1>
                    <img src={""} alt="login-img" className='auth-svg' />
                    <span className='etc-datax'>

                        <div className="faq">
                            <input id="faq-a" type="checkbox" />
                            <label htmlFor="faq-a">
                                <p className="faq-heading">What if my gift arrives damaged or is incorrect??</p>
                                {/* <div className="faq-arrow" /> */}
                                <p className="faq-text">If your gift arrives damaged or is not what you ordered, please contact our customer support team immediately. We will work to resolve the issue and arrange for a replacement or refund.</p>
                            </label>
                            <input id="faq-b" type="checkbox" />
                            <label htmlFor="faq-b">
                                <p className="faq-heading">Can I cancel my order after it has been placed??</p>
                                {/* <div className="faq-arrow" /> */}
                                <p className="faq-text">You may cancel your order within a specific timeframe after placing it. Please refer to our Order Cancellation Policy  for details.</p>
                            </label>
                            <input id="faq-c" type="checkbox" />
                            <label htmlFor="faq-c">
                                <p className="faq-heading"> Can I request gift wrapping for my order?</p>
                                {/* <div className="faq-arrow" /> */}
                                <p className="faq-text">Yes, we offer gift wrapping options for many of our products. During checkout, you can choose to have your items gift-wrapped for a special touch.</p>
                            </label>
                            <input id="faq-d" type="checkbox" />
                            <label htmlFor="faq-d">
                                <p className="faq-heading">How long will it take for my gift to be delivered?</p>
                                {/* <div className="faq-arrow" /> */}
                                <p className="faq-text">Delivery times may vary depending on the destination and shipping method selected. You can find estimated delivery times on the product page and during checkout.</p>
                            </label>
                            <input id="faq-e" type="checkbox" />
                            <label htmlFor="faq-e">
                                <p className="faq-heading">How can I track my order?</p>
                                {/* <div className="faq-arrow" /> */}
                                <p className="faq-text">Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on our website or the carrier's website.</p>
                            </label>
                            <input id="settings" type="checkbox" />
                            <input id="faq-f" type="checkbox" />
                            <label htmlFor="faq-f">
                                <p className="faq-heading">How do I place an order?</p>
                                {/* <div className="faq-arrow" /> */}
                                <p className="faq-text">To place an order, simply browse our website, select the gift item you want, add it to your cart, and proceed to checkout. Follow the on-screen instructions to complete your purchase.</p>
                            </label>
                        </div>

                        <br />
                    </span>
                </div>
            </div>
            <Footer />
        </div>
    )
}