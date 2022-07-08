import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNavbar from './components/utilities/PageNavBar'
import Home from './components/utilities/Home'
import { HashLink as Link } from 'react-router-hash-link'


import YuanmengCv from './components/Daisy/YuanmengCv'
import NotFound from './components/utilities/NotFound'


const App = () => {
  return (
    <main className='site-wrapper'>

      <BrowserRouter>
        <PageNavbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
       
        
          <Route path="/yuanmengcv" element={<YuanmengCv />} />
          <Route path="*" element={<NotFound />} />
         
        

        </Routes>
        <Link to='#projects' smooth></Link>
        <Link to='#skills' smooth></Link>
        <Link to='#contact' smooth></Link>
        <Link to='#experience' smooth></Link>
      


      </BrowserRouter>

    </main>
  )
}
export default App
