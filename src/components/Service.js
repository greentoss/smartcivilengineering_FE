

function Service() {
    return (
        <>
            <div className='row col-4'>
                <div className='row'>
                    <div className='date-circle'>
                        <span className='d-block'>28</span>
                    </div>
                    <h3 className='col-11'>Voluptatem accusantium doloremque laudantium, totam rem aperiam </h3>
                </div>
                <div className='row'>
                    <div className='image-holder col-3 p-0'>
                        {/*<img className='article-img' src={require('../../images/page2_img1.jpg')} alt='img'/>*/}
                    </div>
                    <div className='col-9'>
                        <p className='article-preview-text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                        <span><a className='article-preview-readmore' href='#'>Read More</a></span>
                    </div>
                </div>
                <hr />
            </div>
        </>
    );
}

export default Service;