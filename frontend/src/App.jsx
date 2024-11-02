import React from 'react'
import NavBar from './components/NavBar'
import SplitScreen from './components/SplitScreen'
import LeftSideComp from './components/LeftSideComp'
import RightSideComp from './components/RightSideComp'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <NavBar/>
      <div className='mt-10'>
        <SplitScreen leftWidth={1} rightWidth={3}>
          <LeftSideComp/>
          <RightSideComp/>
        </SplitScreen>
      </div>
      {/* <div className='mt-10'>
        <Footer/>
      </div> */}
    </>
  )
}

export default App