import display from '../elements/display.jpeg';
import {AiOutlineLinkedin,AiOutlineMail,AiOutlineInstagram} from 'react-icons/ai'

function About(){
    return (
        <div className='view-about'>
            <div className='about-content'>
                <div className='about-title'>Nice to meet you!</div>
                <p>
                I'm Garvit, a passionate Software Developer. 
                <br/><br/>
                I completed my Bachelor's in Electronics and Electrical Engineering (EEE) and Masters's in Physics from BITS Pilani in 2023. 
                <br/><br/>
                I have always been interested in problem solving and love exploring new things. I love to play badminton and go for an occasional swim. In my free time you can find me playing video games or reading books.
                I love to go on trips as well, I am a beach person all the way.
                <br/><br/>
                Currently I am living in Bengaluru, India. Cruising through traffic and partying on the weekends.
                Let's catch up sometime!
                </p>
                <div className='about-contact'>
                    <a target='_blank' className='about-contact-icon' href='https://www.instagram.com/garvit.sdh/' rel='noreferrer'><AiOutlineInstagram size={'25px'}/></a>
                    <a target='_blank' className='about-contact-icon' href='https://www.linkedin.com/in/garvit-sadhwani-8a76b016b/' rel='noreferrer'><AiOutlineLinkedin size={'25px'}/></a>
                    <a target='_blank' className='about-contact-icon' href='mailto:garvit.sadh@gmail.com' rel='noreferrer'><AiOutlineMail size={'25px'}/></a>
                </div>
                
            </div>
            <img className='display' src={display} alt='display'/>
        </div>
    );
}

export default About;