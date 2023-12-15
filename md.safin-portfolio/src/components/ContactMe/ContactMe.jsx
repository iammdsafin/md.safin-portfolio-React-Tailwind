import React, { useState } from 'react';
import './ContactMe.css';

function ContactMe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    const handleNameChange = (event) => {
        const name = event.target.value;
        const regexPattern = /^[A-Za-z\s.]+$/;

        if (name === '') {
            setNameError('');
            setIsSubmitDisabled(true);
        } else if (!regexPattern.test(name) || name.length < 2) {
            setNameError("Alphabets, dot, space & chars (min 2).");
            setIsSubmitDisabled(true);
        } else {
            setNameError("");
            setIsSubmitDisabled(false);
        }

        setName(name);
    }

    const handleEmailChange = (event) => {
        const email = event.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '') {
            setEmailError('');
            setIsSubmitDisabled(true);
        } else if (!emailRegex.test(email)) {
            setEmailError("The provided email address is not valid.");
            setIsSubmitDisabled(true);
        } else {
            setEmailError("");
            setIsSubmitDisabled(false);
        }

        setEmail(email);
    }

    return (
        <section className="contact-me-section py-5 d-flex align-items-center" id="contact">
            <div className="contact-me-container">
                <div>
                    <h2 className='contact-me-title'>We can work together! Feel free to reach me!</h2>
                </div>

                <div className="contact-me-form">
                    <form className="contact-form" id="contactForm">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" name="name" id="name" placeholder="Enter your name here" required onChange={handleNameChange} />
                                <div className="error-message custom-width-validation error-text-name">{nameError}</div>
                            </div>

                            <div className="form-group col-md-6">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Enter your e-mail here" required onChange={handleEmailChange} />
                                <div className="error-message custom-width-validation error-text-email">{emailError}</div>
                            </div>
                        </div>

                        <div className="form-group">
                            <textarea name="message" rows="6" className="form-control message" id="message" placeholder="Do you have any message for me?" required></textarea>
                        </div>

                        <input type="submit" className="custom-submit-btn" value="Submit" id="submitButton" disabled={isSubmitDisabled} />
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

        </section>
    );
}

export default ContactMe;