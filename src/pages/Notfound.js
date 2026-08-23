import error from '../elements/error.jpg'
function Landing(){
    return (
        <div>
            <div style={{position:'fixed',top:'20vh',left:'35vw',alignItems:'center'}}>
                <img src={error} style={{height:'50vh'}} alt='Error'/>
                <div style={{fontSize:'50px',textAlign:'center'}}>
                    Error 404
                </div>
            </div>
        </div>
    );
}

export default Landing;