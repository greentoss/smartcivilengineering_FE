import React from 'react';

const ClientError: React.FC = () => {
    return (
        <div className='container mx-auto pt-3 flex items-center justify-center' style={{ height: '500px' }}>
            <h2 className='text-center text-xl font-semibold text-red-500'>
                Error 404: Wrong address, please check your address
            </h2>
        </div>
    );
}

export default ClientError;
