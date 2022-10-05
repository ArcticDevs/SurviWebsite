import { useEffect } from 'react'
// import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar';
import Blog from './pages/Blog.jsx'
import Home from './pages/Home';
import BlogRead from './pages/BlogRead.jsx'
import Footer from './components/Footer.jsx'
// const Home = lazy(() => import('./pages/Home'));

const App = () => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    return (
        <div className='app'>
            <Navbar />
            {/* <Suspense> */}
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/post/:title" element={<BlogRead />} />
            </Routes>
            {/* </Suspense> */}
            <Footer />
        </div>
    )
}

export default App