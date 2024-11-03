import React from 'react'
import NavBar from './components/NavBar'
import SplitScreen from './components/SplitScreen'
import LeftSideComp from './components/LeftSideComp'
import RightSideComp from './components/RightSideComp'
// import Dictaphone from './components/Dictaphone';
import NativeDictaphone from './components/NativeDictaphone'


const App = () => {
  return (
    <>
      <NavBar/>
      
      <div className='mt-10'>
        <NativeDictaphone/>
        <SplitScreen leftWidth={1} rightWidth={3}>
          <LeftSideComp/>
          
          <RightSideComp/>
        </SplitScreen>
      </div>
    </>
  )
}

export default App