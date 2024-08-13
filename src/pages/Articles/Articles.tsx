import React, { useState } from 'react';

import { Article, Pagination } from '@/components/molecules';


const Articles: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const articles = [
        {
            date: "28-06",
            title: "Voluptatem accusantium doloremque laudantium, totam rem aperiam",
            imageUrl: "https://via.placeholder.com/150",
            previewText: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..."
        },
        {
            date: "27-06",
            title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
            imageUrl: "https://via.placeholder.com/150",
            previewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada ligula vel nisi vulputate..."
        },
        // Add more articles here...
    ];

    const totalPages = Math.ceil(articles.length / 3); // Assuming 3 articles per page

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className='container mx-auto pt-3'>
            {articles.slice((currentPage - 1) * 3, currentPage * 3).map((article, index) => (
                <Article 
                    key={index} 
                    date={article.date} 
                    title={article.title} 
                    imageUrl={article.imageUrl} 
                    previewText={article.previewText} 
                />
            ))}
            <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={handlePageChange} 
            />
        </div>
    );
}

export default Articles;
