import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav aria-label="Page navigation" className='w-full flex justify-center mt-6'>
            <ul className="flex space-x-2">
                <li 
                    className={`paginationBtn ${currentPage === 1 ? 'opacity-50 pointer-events-none' : ''} w-24 text-center`}
                >
                    <button 
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 color-text-dark font-bold"
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                </li>
                {pages.map(page => (
                    <li 
                        key={page} 
                        className={`paginationBtnCenter ${page === currentPage ? 'bg-[#64b404] border-[#64b404] text-white' : 'bg-gray-200'} w-12 text-center`}
                    >
                        <button 
                            className={`px-4 py-2 rounded ${page === currentPage ? 'bg-[#64b404] text-white font-bold' : 'color-text-dark font-bold hover:bg-gray-300'}`}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
                <li 
                    className={`paginationBtn ${currentPage === totalPages ? 'opacity-50 pointer-events-none' : ''} w-24 text-center`}
                >
                    <button 
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 color-text-dark font-bold"
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
