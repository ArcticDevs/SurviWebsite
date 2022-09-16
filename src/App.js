// import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './pages/Blog.jsx'
import Home from './pages/Home';
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
      <Footer />
    </div>
  )
}

export default App