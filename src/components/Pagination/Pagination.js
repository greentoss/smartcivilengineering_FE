import './pagination.css';

function Pagination() {
    return (
        <>
            <nav aria-label="..." className='col-12 d-flex justify-content-center mt-3'>
                <ul className="pagination">
                    <li className="page-item disabled">
                        <a className="page-link color-text-dark paginationBtn">Previous</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link color-text-dark" href="#">1</a>
                    </li>
                    <li className="page-item  " aria-current="page">
                        <a className="page-link color-text-dark active-btn" href="#">2</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link color-text-dark" href="#">3</a>
                    </li>
                    <li className="page-item paginationBtn">
                        <a className="page-link color-text-dark" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Pagination;