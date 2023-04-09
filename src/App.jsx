import LandingPage from "./components/LandingPage"
import { Routes , Route, useNavigate} from 'react-router-dom'
import Navbar from "./components/Navbar"
import BootcampsList from "./components/BootcampsList"
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/bootcampslist' element={<BootcampsList />}/>
      </Routes>
    </div>
  )
}

export default App
