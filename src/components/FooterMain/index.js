import footerStyle from './index.module.css';
import './custom-icons.css';

function FooterMain() {
    return (
        <>
            <div className={footerStyle.footer}>
                <a id="contact"/>
                <div className='container pt-5'>
                    <div className='row'>
                        <div className="footer-center col-6">
                            <div className='d-flex align-items-center  mb-3'>
                                <div className='w-10'><i className="fa fa-map-marker margin-right-2vw custom-icons-round"/></div>
                                <p className='m-0 text-white'><span>04128. Cedros Ave Solana Beach, California</span></p>
                            </div>
                            <div className='d-flex align-items-center  mb-3'>
                                <div className='w-10'><i className="fa fa-phone margin-right-2vw custom-icons-round"/></div>
                                <p className='m-0 text-white'><a href="tel:+380502932772" className='text-white'>+380502932772</a></p>
                            </div>
                            <div className='d-flex align-items-center  mb-3'>
                                <div className='w-10'><i className="fa fa-envelope margin-right-2vw custom-icons-round"/></div>
                                <p className='m-0 text-white'><a href="mailto:smartandcivileng@gmail.com" className='text-white'>smartandcivileng@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="col-6">
                            <p className=" footer-company-about">
                                <span className='text-white'>About the company :</span>
                            </p>
                            <p className=" footer-company-about">
                            <span className='custom-gray-text'>Lorem ipsum dolor sit amet, consectateur adispicing elit.
                            Fusce euismod convallis velit, eu
                            auctor lacus vehicula sit amet.</span>
                            </p>
                            <div className="footer-icons">
                                <a href="#" className='margin-right-2vw'><i className="custom-icons-square fa fa-facebook"/></a>
                                <a href="#" className='margin-right-2vw'><i className="custom-icons-square fa fa-twitter"/></a>
                                <a href="#" className='margin-right-2vw'><i className="custom-icons-square fa fa-linkedin"/></a>
                                <a href="#" className='margin-right-2vw'><i className="custom-icons-square fa fa-github"/></a>
                            </div>
                        </div>
                        <div className="footer-content footer-copyright text-center p-3 pt-4 col-12">
                            <p className="footer-content__copy text-white">2022 smart civil engineering &copy;</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FooterMain;
