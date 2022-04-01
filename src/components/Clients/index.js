
function Clients() {
    return (
        <div className='mb-3'>
            <div className='row flex-column'>
                <h2 className='text-center'>Our Clients</h2>
                <p className='align-self-center text-center fs-5 w-75 pt-3 pb-3'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p>
            </div>
            <div className="row justify-content-between">
                <div className="col part">
                    <img src={require('../../images/partn1.png')} alt="about-clients-image"/>
                </div>
                <div className="col part">
                    <img src={require('../../images/partn2.png')} alt="about-clients-image"/>
                </div>
                <div className="col part">
                    <img src={require('../../images/partn3.png')} alt="about-clients-image"/>
                </div>
                <div className="col part">
                    <img src={require('../../images/partn4.png')} alt="about-clients-image"/>
                </div>
                <div className="col part">
                    <img src={require('../../images/partn5.png')} alt="about-clients-image"/>
                </div>
                <div className="col part">
                    <img src={require('../../images/partn6.png')} alt="about-clients-image"/>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Clients;