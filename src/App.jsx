import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'
import Services from './components/Services'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import LenisScroll from './components/LenisScroll'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/About' element={
            <About />}/>
        </Routes>
        </BrowserRouter>
            <LenisScroll />
            <Navbar />
            <Header />
            <Services />
            <Work />
            <Contact />
            <Footer />
        </>
    )
}