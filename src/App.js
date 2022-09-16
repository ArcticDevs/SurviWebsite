// import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Blog from './Pages/Blog.jsx'
import Home from './Pages/Home';
// const Home = lazy(() => import('./pages/Home'));

const App = () => {
  const location = useLocation();
  return (
    <div className='app'>
      <Navbar />
      {/* <Suspense> */}
        <Routes location={location} key={location.pathname}>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/blog" element={<Blog/>} />
        </Routes>
      {/* </Suspense> */}
    </div>
  )
}

export default App