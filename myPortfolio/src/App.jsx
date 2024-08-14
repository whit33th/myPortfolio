import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import Projects from './pages/Projects'
import Project from './pages/Project'


import ScrollToTop from './utils/scrollToTop'




function App() {


  return (
    <div className='App'>
      <Router>
        <ScrollToTop/>

        <Navbar />

        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/projects" element={ <Projects/> } />
          <Route path="/project/:id" element= { <Project/> } />
          <Route path="/contacts" element={ <Contacts/> } />
        </Routes>  
        
        <Footer />

      </Router>
    </div>
  )
}

export default App
