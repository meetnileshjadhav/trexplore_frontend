import React from 'react'
import Main from '../Main/Main'

const Home = (props) => {
  return (
    <div>
      <Main trekAllData={props.trekAllData} />
    </div>
  )
}

export default Home
