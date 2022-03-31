import Service from "../Service/Service";

function Services() {
    return (
        <>
            <div className='container mt-4 pb-3 flex-wrap col-12'>
                <div className='row'>
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                </div>
            </div>
        </>
    );
}

export default Services;