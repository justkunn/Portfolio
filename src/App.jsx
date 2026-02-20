import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/service' element={<Services />} />
            <Route path='/work' element={<Work />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
            <Footer />
        </>
    )
}