import './about-team-card.css'
import Clients from "../Clients";
import AboutTeamCard from "../AboutTeamCard/AboutTeamCard";

function About() {
    return (
        <>
            <div className='container pt-3 pb-3'>
                <div className='row flex-column'>
                    <h2 className='text-center'>About us</h2>
                    <p className='align-self-center text-center fs-5 w-75  pt-3 pb-3'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
                </div>
                <div className='row flex-wrap'>

                    <div className='row'>
                        <div className='about-company-card'>
                            <div>
                                <img  alt='about-team-image'/>
                            </div>
                            <h3>Soluta esse molestie</h3>
                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
                        </div>
                        <hr />
                    </div>

                </div>
                <div className='row flex-column'>
                    <h2 className='text-center'>Our Team</h2>
                    <p className='align-self-center text-center fs-5 w-75  pt-3 pb-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                </div>
                <div className='row col-12 flex-wrap mb-4'>

                    <AboutTeamCard />

                </div>
                <Clients />
            </div>
        </>
    );
}

export default About;