import LandingPage from "./components/LandingPage"
import { Routes , Route, useNavigate} from 'react-router-dom'
import Navbar from "./components/Navbar"
import BootcampsList from "./components/BootcampsList"
import Courses from "./components/Courses"
import CoursesInfo from "./components/CoursesInfo"
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/bootcampslist' element={<BootcampsList />}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route  path='/courses/:id' element={<CoursesInfo />}/>
      </Routes>
    </div>
  )
}

export default App
