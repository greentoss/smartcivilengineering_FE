import Article from "../Article";
import '../Pagination/pagination.css';
import Pagination from "../Pagination/Pagination";


function Articles() {
    return (
        <>
            <div className='container pt-3'>
                <Article />
                <Article />
                <Article />
                <Pagination />
            </div>
        </>
    );
}

export default Articles;