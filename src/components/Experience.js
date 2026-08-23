
import react_img from '../elements/react.png';
import node from '../elements/node.png';
import python from '../elements/python.png';
import mongo from '../elements/mongo.png';
import golang from '../elements/golang.png';
import postgresql from '../elements/postgresql.png';
import cpp from '../elements/cpp.png';
import c from '../elements/c.png';
import opencv from '../elements/opencv.png';

function Experience(props){
    let isProject=props.project;
    let showVideo=props.video;
    let showWhiteText=props.white_text;
    return(
        <div>
            {
            isProject && <div className='project'>
                <div className='section-title'>{props.title}</div>
                    <div className='section-container'>
                        <div className='project-desc'>
                            {props.desc}
                            <div className='section-skills'>
                                {props.react && <img className='skill' src={react_img} alt='React'></img>}
                                {props.node && <img className='skill' src={node} alt='Node'></img>}
                                {props.mongo && <img className='skill' src={mongo} alt='Mongo'></img>}
                                {props.python && <img className='skill' src={python} alt='Python'></img>}
                                {props.golang && <img className='skill' src={golang} alt='Golang'></img>}
                                {props.postgresql && <img className='skill' src={postgresql} alt='Postgresql'></img>}
                                {props.c && <img className='skill' src={c} alt='C'></img>}
                                {props.cpp && <img className='skill' src={cpp} alt='Cpp'></img>}
                                {props.opencv && <img className='skill' src={opencv} alt='Opencv'></img>}
                            </div>
                        </div>
                        {props.main_image && <img className='project-image' src={props.main_image} alt='SectionImg'/>}
                        {showVideo && 
                            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6824322614526308353?compact=1" className='video' frameborder="0" allowfullscreen="" title="Handgesture video">
                            </iframe>
                        }
                    </div> 
                </div>
            }
            {
            !isProject && <div className='section'>
                <div className={showWhiteText?'section-title-white':'section-title'}>{props.title}</div>
                    <div className='section-container'>
                        <div className={showWhiteText?'section-desc-white':'section-desc'}>
                            {props.desc}
                            <div className='section-skills'>
                                {props.react && <img className='skill' src={react_img} alt='React'></img>}
                                {props.node && <img className='skill' src={node} alt='Node'></img>}
                                {props.mongo && <img className='skill' src={mongo} alt='Mongo'></img>}
                                {props.python && <img className='skill' src={python} alt='Python'></img>}
                                {props.golang && <img className='skill' src={golang} alt='Golang'></img>}
                                {props.postgresql && <img className='skill' src={postgresql} alt='Postgresql'></img>}
                                {props.c && <img className='skill' src={c} alt='C'></img>}
                                {props.cpp && <img className='skill' src={cpp} alt='Cpp'></img>}
                                {props.opencv && <img className='skill' src={opencv} alt='Opencv'></img>}
                            </div>
                        </div>
                        <img className='section-image' src={props.main_image} alt='SectionImg'/>
                    </div>
                </div>
            }
        </div>
        
    );
}

export default Experience