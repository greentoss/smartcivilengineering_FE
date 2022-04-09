import './service-styles.css';

function Service() {
    return (
            <div className='row col-4'>
                <div className='row flex-nowrap align-items-center mb-4 px-4' >
                    <div className='service-circle d-flex align-items-center justify-content-center'>
                        <span className='d-block'>1</span>
                    </div>
                    <h3 className='px-4'>Service Name</h3>
                </div>
                <div className='row '>
                    <div className='service-image-holder mb-3 p-0'>
                        <img className='service-img' src={require('../../images/page4_img1.jpg')} alt='img'/>
                    </div>
                    <p className='service-preview-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <span className='mb-4'><a className='service-preview-readmore' href='#'>Read More</a></span>
                    <hr />
                </div>

            </div>
    );
}

export default Service;