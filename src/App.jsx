import { Navigate, Route, Routes } from 'react-router-dom'

//import styles
import './styles/App.scss'

// import pages
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Courses from './pages/Courses'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/courses' element={<Courses />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
        </Route>
      </Routes>
      
    </>
  )
}

export default App
