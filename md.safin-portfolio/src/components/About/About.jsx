import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './About.css';

const About = () => {
    useEffect(() => {
        const typed = new Typed("#hello-planet-earth-text", {
            strings: ["Hello Planet Earth!🌍", "It's me Safin, Let's explore! 💨"],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true,
            showCursor: true,
            onStringTyped: function (arrayIndex, typing) {
                if (arrayIndex === 1) {
                    typing.stop();
                }
            },
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="about" id="about">
            <div className="container">
                <div className="flex-container mt-4">
                    <div className="about-text">

                        <div className="image-profile">
                            <img src="/Ahmed-Shafin.jpg" className="img-fluid" alt="jpg image" />
                        </div>

                        <h1 className="font-bold mt-6 pt-100 pl-[200px]" style={{ fontSize: '45px' }}>
                            <span id="hello-planet-earth-text"></span>
                        </h1>

                        <p className="mt-6 text-lg">
                            A Software Engineer Who Loves to Learn New Stuff and Explore New Technologies.💙
                            Also in Search of Another Planet.🌍 I Would Say, But It's Pointless!🥱
                        </p>

                        <div className="flex mt-4 pl-[195px]">
                            <a href="/Md. Safin_Resume.pdf" className="btn" download><i className='uil uil-file-alt'></i>Resume</a>
                        </div>
                    </div>

                    <div className="about-image">
                        <img src="/ahmedShafin-emoji.png" className="img-fluid" alt="svg image" />
                    </div>
                </div>

                <div className="icon-container">
                    <p className="icon">
                        <img src="icons/skill-icons/CPP.svg" alt="CPP" />
                        <img src="icons/skill-icons/CS.svg" alt="CS" />
                        <img src="icons/skill-icons/HTML.svg" alt="HTML" />
                        <img src="icons/skill-icons/CSS.svg" alt="CSS" />
                        <img src="icons/skill-icons/Bootstrap.svg" alt="Bootstrap" />
                        <img src="icons/skill-icons/JavaScript.svg" alt="JavaScript" />
                        <img src="icons/skill-icons/DotNet.svg" alt="DotNet" />
                        <img src="icons/skill-icons/PHP-Light.svg" alt="PHP-Light" />
                        <img src="icons/skill-icons/Laravel-Dark.svg" alt="Laravel-Dark" />
                        <img src="icons/skill-icons/NextJS-Dark.svg" alt="NextJS-Dark" />
                        <img src="icons/skill-icons/Azure-Light.svg" alt="Azure-Light" />
                        <img src="icons/skill-icons/MySQL-Dark.svg" alt="MySQL-Dark" />
                        <img src="icons/skill-icons/Postman.svg" alt="Postman" />
                        <img src="icons/skill-icons/VisualStudio-Dark.svg" alt="VisualStudio-Dark" />
                        <img src="icons/skill-icons/VSCode-Dark.svg" alt="VSCode-Dark" />
                        <img src="icons/skill-icons/Atom.svg" alt="Atom" />
                        <img src="icons/skill-icons/Git.svg" alt="Git" />
                        <img src="icons/skill-icons/GitLab-Light.svg" alt="GitLab-Light" />
                    </p>
                </div>

            </div>
        </section>
    );
};

export default About;