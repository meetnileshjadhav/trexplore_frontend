import React from 'react';
import pack1 from '../PackageImages/pack2.jpg'
import '../PackageDetails.css';
;
function PackageDetailsHero() {
  return (
    <div className='package-hero' style={{ backgroundImage: `url(${pack1})` }}>
      <h3>
        Sahyadri Ranges
      </h3>
    </div>
  )
}

export default PackageDetailsHero;
