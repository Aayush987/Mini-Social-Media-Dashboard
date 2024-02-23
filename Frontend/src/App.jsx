import './App.css'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Addpost from './Pages/Addpost'
import Allpost from './Pages/Allpost'

function App() {

  return (
    <>
    <Routes>
        <Route path = "/" element = {<Dashboard />} />
        <Route path = "/addpost" element = {<Addpost />} />
        <Route path = "/allposts" element = {<Allpost />} />
    </Routes>
    </>
  )
}

export default App
