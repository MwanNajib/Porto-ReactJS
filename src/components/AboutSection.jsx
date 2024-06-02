import React from "react";
import AboutImg from '../assets/images/about.jpg';

function AboutSection(){
    const redirectToAboutMe = () => {
        window.location.href = "https://www.instagram.com/";
    };

    return(
        <div className='py-5' id='about'>
            <div className='container'>
                <div className='flex-column-reverse flex-md-row row'>
                    <div className='col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center'>
                        <img className='img-fluid w-70 shadow' src={AboutImg} alt="about img" />
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center'>
                        <h2 className='mb-5'>About Me</h2>
                        <p className='text-start mb-4'>Hello, my name is Muhammad Wisnu Ainun Najib, I am a sixth semester student at Semarang State Polytechnic, majoring in Electrical Engineering, Faculty of Computer Engineering Technology. I have great interest and enthusiasm in web development, especially in the front end. I am often involved in website creation projects using PHP, HTML, CSS, and JavaScript, and have experience in using frameworks such as React.js, Vue.js, and Laravel to create efficient and responsive websites. My strengths are namely in communication, solid collaboration skills within a team, and readiness to contribute to challenging projects.</p>
                        <button className="btn btn-primary shadow text-capitalize" type='button' onClick={redirectToAboutMe}>About Me</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutSection;