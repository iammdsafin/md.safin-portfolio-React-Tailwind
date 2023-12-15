import React from 'react';
import './ContactMe.css';

function ContactMe() {
    return (
        <>
            <section className="contact-me-section py-5 d-flex align-items-center" id="contact">
                <div className="contact-me-container">
                    <div>
                        <h2 className='contact-me-title'>We can work together! Feel free to reach me!</h2>
                    </div>

                    <div className="contact-me-form">
                        <form className="contact-form" id="contactForm">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" name="name" id="name" placeholder="Enter your name here" required />
                                    <div id="nameError" className="error-message custom-width-validation"></div>
                                </div>

                                <div className="form-group col-md-6">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Enter your e-mail here" required />
                                    <div id="emailError" className="error-message custom-width-validation"></div>
                                </div>
                            </div>

                            <div className="form-group">
                                <textarea name="message" rows="6" className="form-control message" id="message" placeholder="Do you have any message for me?" required></textarea>
                            </div>

                            <input type="submit" className="custom-submit-btn" value="Submit" id="submitButton" disabled />
                        </form>

                    </div>

                    <div className="social-icons">
                        <a href="https://github.com/iammdsafin" target="_blank" rel="noopener">
                            <img src="icons/social-icons/Github-Light.svg" class="img-fluid" alt="GitHub" />
                        </a>

                        <a href="https://www.linkedin.com/in/md-safin/" target="_blank" rel="noopener">
                            <img src="icons/social-icons/Linkedln-raw.svg" class="img-fluid" alt="Linkedln" />
                        </a>
                    </div>
                </div>
            </section>
            {/* <p className="copyright-text">Copyright &copy; 2023 Md.Safin All rights reserved</p> */}

            {/* <div className="contact-toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true" data-delay="5000">
                <div className="d-flex">
                    <div className="contact-toast-body">
                        <strong id="toastHeading" className="mr-auto"></strong>
                        <div id="successMessage">
                            Message sent successfully!
                        </div>
                        <div id="errorMessage">
                            Something went wrong! Try again.
                        </div>
                    </div>
                </div>
            </div> */}


        </>
    );
}

export default ContactMe;