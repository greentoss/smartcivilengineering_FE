
function Contacts() {
    return (
        <>
            <div className="container" >
                <div className='row'>
                    <div className='contact-form'>
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
                                    <input type="text" className="form-control" name="name" id="name"/>
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
                                    <textarea className="form-control" name="message" id="message" cols="30" rows="7"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <button type='button' className='btn btn-success'>Edit</button>
                                    <button type='button' className='btn btn-success'>Clear</button>
                                    <input type="submit" value="Send Message" className="btn btn-primary rounded-0 py-2 px-4"/>
                                    <span className="submitting"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='contacts'>
                        <div>
                            <h2>Contacts</h2>
                            <hr />
                            <div>
                                <span>Country:</span><span>Ukraine:</span>
                            </div>
                            <div>
                                <span>City:</span><span>Kyiv:</span>
                            </div>
                            <div>
                                <span>Telephone:</span><span>+380502932772:</span>
                            </div>
                            <div>
                                <span>Email:</span><span>smartandcivileng@gmail.com</span>
                            </div>
                        </div>
                        <div>
                            <h2>Other Information</h2>
                            <hr />
                            <p>
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