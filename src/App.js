import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Blog from './Pages/Blog.jsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Blog/>} />
      </Routes>
    </>
  )
}

export default App