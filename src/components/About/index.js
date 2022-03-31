
import Clients from "../Clients";

function About() {
    return (
        <>
            <div className='container pt-3 pb-3'>
                <div className='row flex-column'>
                    <h2 className='text-center'>About us</h2>
                    <p className='align-self-center'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.
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
                    <p className='align-self-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                </div>

                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            {/*<img src="..." className="d-block w-100" alt="...">*/}
                            <div className='about-team-card d-block'>
                                <div>
                                    <img  alt='about-team-image'/>
                                </div>
                                <h3>Vladyslav Shkil</h3>
                                <h4>Director, Lead Constructor</h4>
                                <a target='_blank' href='#'>
                                    <i className='fa fa-facebook aria-hidden="true"'/>
                                </a>
                                <a target='_blank' href='#'>
                                    <i className="fa fa-phone" aria-hidden="true"/>
                                </a>
                                <a target='_blank' href='#'>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                </a>
                                <a target='_blank' href='#'>
                                    <i className="fa fa-telegram" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <Clients />
            </div>
        </>
    );
}

export default About;