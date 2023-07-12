import React from 'react';
import image2 from  '../../images/families banner.jpg';
const Bannerimg = () => {
    return (
        <div className='banner'>
             <img src={image2} className="img-fluid mx-auto d-block rounded" alt="..." />
        </div>
    );
};

export default Bannerimg;