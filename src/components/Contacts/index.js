import './contacts-styles.css'

function Contacts() {
    return (
        <>
            <div className="container pt-3">
                <div className='row'>
                    <div className='contact-form col-8'>
                        <h2>Contact Form</h2>
                        <hr />
                        <form className="mb-5" method="post" id="contactForm" name="contactForm">
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <label htmlFor="name" className="col-form-label">Your Name:</label>
                                    <input type="text" className="form-control" name="name" id="name"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <label htmlFor="name" className="col-form-label">Your City:</label>
                                    <input type="text" className="form-control" name="city" id="city"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <label htmlFor="email" className="col-form-label">our E-mail:</label>
                                    <input type="text" className="form-control" name="email" id="email"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <label htmlFor="message" className="col-form-label">Your Message:</label>
                                    <textarea className="form-control" name="message" id="message" cols="30" rows="10"/>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-end pt-3">
                                <div className='row d-flex col-6 justify-content-around submit-buttons'>
                                    <button type='button' className='btn btn-success '>Edit</button>
                                    <button type='button' className='btn btn-success '>Clear</button>
                                    <button type="submit" value="Send Message" className="btn btn-primary submit-btn">Submit</button>
                                    {/*<span className="submitting"/>*/}
                                </div>

                            </div>
                            <hr/>
                        </form>

                    </div>
                    <div className='contacts col-4'>
                        <div className='contacts-box'>
                            <h2>Contacts</h2>
                            <hr />
                            <div>
                                <p>Country:</p><span>Ukraine</span>
                            </div>
                            <div>
                                <p>City:</p><span>Kyiv</span>
                            </div>
                            <div>
                                <p>Phone:</p><span>+380502932772</span>
                            </div>
                            <div>
                                <p>Email:</p><span>smartandcivileng@gmail.com</span>
                            </div>
                        </div>
                        <div className='contacts-box'>
                            <h2>Other Information</h2>
                            <hr />
                            <p className='otherInfo-text'>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volupta- tum deleniti atque corrupti quos dolores et quas molestias excep- turi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Contacts;