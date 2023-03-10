import React from 'react'
import TrekDetails from './TrekDetails'

function PackDetailedInfo(props) {
  return (
    <div className='my-5'>

      <TrekDetails detailedDetails={props.detailedDetails} />

    </div>
  )
}

export default PackDetailedInfo;
