import react from 'react';
import MainCarousel from "../MainCarousel";

function Main() {
    return (
        <>
            <MainCarousel />
            <div className='container col-12 pt-3 pb-3'>
                <h2 className='text-center'>Overview of our main business goals</h2>
                <hr />
                <div className='row flex-wrap'>
                    <div className='col-4 d-flex flex-row mt-3 mb-3'>
                        <div className='img-wrapper mr-2'>
                            <img src={require('../../images/page3_img1.gif')} alt='img' />
                        </div>
                        <div className='px-3'>
                            <h3>Strategic Planning</h3>
                            <p>At vero eos et accusamus et iusto odio dignissimo ducimu qui blanditiis praesentium voluptatum deleniti.</p>
                        </div>
                    </div>
                    <div className='col-4 d-flex flex-row mt-3 mb-3'>
                        <div className='img-wrapper mr-2'>
                            <img src={require('../../images/page3_img1.gif')} alt='img' />
                        </div>
                        <div className='px-3'>
                            <h3>Strategic Planning</h3>
                            <p>At vero eos et accusamus et iusto odio dignissimo ducimu qui blanditiis praesentium voluptatum deleniti.</p>
                        </div>
                    </div>
                    <div className='col-4 d-flex flex-row mt-3 mb-3'>
                        <div className='img-wrapper mr-2'>
                            <img src={require('../../images/page3_img1.gif')} alt='img' />
                        </div>
                        <div className='px-3'>
                            <h3>Strategic Planning</h3>
                            <p>At vero eos et accusamus et iusto odio dignissimo ducimu qui blanditiis praesentium voluptatum deleniti.</p>
                        </div>
                    </div>
                    <div className='col-4 d-flex flex-row mt-3 mb-3'>
                        <div className='img-wrapper mr-2'>
                            <img src={require('../../images/page3_img1.gif')} alt='img' />
                        </div>
                        <div className='px-3'>
                            <h3>Strategic Planning</h3>
                            <p>At vero eos et accusamus et iusto odio dignissimo ducimu qui blanditiis praesentium voluptatum deleniti.</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Main;