import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNavbar from './components/utilities/PageNavBar'
import Home from './components/Home'
import { HashLink as Link } from 'react-router-hash-link'




import NotFound from './components/utilities/NotFound'


const App = () => {
  return (
    <main className='site-wrapper'>

      <BrowserRouter>
        <PageNavbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
       
        
         
          <Route path="*" element={<NotFound />} />
         
        

        </Routes>
        <Link to='#projects' smooth></Link>
        <Link to='#skills' smooth></Link>
        <Link to='#contact' smooth></Link>
        <Link to='#experience' smooth></Link>
        <Link to='#interests' smooth></Link>
        <Link to='#contact' smooth></Link>
      


      </BrowserRouter>

    </main>
  )
}
export default App
