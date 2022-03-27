import react from 'react';
import Article from "../Article";
import '../Pagination/pagination.css';
import Pagination from "../Pagination/Pagination";


function Articles() {
    return (
        <>
            <div className='container'>
                <h2>Articles</h2>
                <Article />
                <Pagination />
            </div>
        </>
    );
}

export default Articles;