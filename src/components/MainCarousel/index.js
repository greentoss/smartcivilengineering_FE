import MainCarouselHeading from "../MainCarouselHeading";
import './MainCarousel.css';

function MainCarousel() {
    return (
            <div id="carouselExampleIndicators" className="carousel slide carousel-content" data-ride="carousel">
                {/*<ol className="carousel-indicators">*/}
                {/*    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="carousel-paginators active">*/}
                {/*        <p>1</p>*/}
                {/*    </li>*/}
                {/*    <li data-target="#carouselExampleIndicators" data-slide-to="1" className='carousel-paginators'/>*/}
                {/*    <li data-target="#carouselExampleIndicators" data-slide-to="2" className='carousel-paginators'/>*/}
                {/*</ol>*/}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 carousel-img" src={require('../../images/slider-4.jpg')} alt="First slide"/>
                        <div className='d-flex'><MainCarouselHeading /></div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel-img" src={require('../../images/slider-5.jpg')} alt="Second slide"/>
                        <div className='d-flex'><MainCarouselHeading /></div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 carousel-img" src={require('../../images/slider-6.jpg')} alt="Third slide"/>
                        <div className='d-flex'><MainCarouselHeading /></div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="sr-only">Next</span>
                </a>
            </div>
    );
}

export default MainCarousel;