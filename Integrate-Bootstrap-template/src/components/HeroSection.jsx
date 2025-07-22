import Person from '../assets/Person.png'
import SocialMediaButtons from './SocialMediaIcons'
import '../style/style.css';

export default function MainContent() {
    return(
        <>
            <div className="container bg-light mt-5" style={{border:"1px solid gray"}}>
                <div className="row p-5 pb-0 align-items-center">
                    
                    <div className="col-12 col-md-7">
                        <h1 className='fw-bold mb-5'>Hey ! , I'm John Deo. </h1>
                        <p className='fs-5 fw-medium' style={{color:"gray"}}>
                            A freelancing Web Developer from London . I convert custom Web Design to Bootsrap Template .
                            I make YouTube videos and Write Blogs.
                        </p>
                        <a className="btn btn-outline-primary mt-3">I'M AVAILABLE</a>
                        <SocialMediaButtons />
                    </div>

                    <div className="col-12 col-md-5 mt-5 d-flex justify-content-center">
                        <img src={Person} alt=""  />
                    </div>
                </div>
            </div>
        </>
    )
}