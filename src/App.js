import { useEffect } from 'react'
// import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar';
import Blog from './pages/Blog.jsx'
import Home from './pages/Home';
import BlogRead from './pages/BlogRead.jsx'
import Service from './pages/Service';
import Gallery from './pages/Gallery';
import About from './pages/About'
import Footer from './components/Footer.jsx'
import ContactUs from './pages/ContactUs';
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
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/service" element={<Service />} />
                <Route path="/about" element={<About />} />
                <Route path="/post/:title" element={<BlogRead />} />
                <Route path="/contactus" element={<ContactUs/>} />
            </Routes>
            {/* </Suspense> */}
            <Footer />
        </div>
    )
}

export default App