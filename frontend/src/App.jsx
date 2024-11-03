import React from 'react'
import NavBar from './components/NavBar'
import SplitScreen from './components/SplitScreen'
import LeftSideComp from './components/LeftSideComp'
import RightSideComp from './components/RightSideComp'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import History from './components/History'
import Insights from './components/Insights'
import Edit from './components/Edit'

// import Dictaphone from './components/Dictaphone';
// import NativeDictaphone from './components/NativeDictaphone'
// import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar/>

      <div className='mt-10'>
        <Routes>
          <Route path="/history" element={<History />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/" element={
            <SplitScreen leftWidth={1} rightWidth={3}>
            <LeftSideComp/>
            
            <RightSideComp/>
          </SplitScreen>
          }/>
        </Routes>

      </div>
      </BrowserRouter>
    </>
  )
}

export default App