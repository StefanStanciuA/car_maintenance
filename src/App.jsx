import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Explore from './pages/Explore'
import SignIn from './pages/SignIn'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CarPage from './pages/CarPage'
import NewCar from './pages/NewCar'
import EditCar from './pages/EditCar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext'




function App() {


  return (
    <>
      <AuthProvider>
        <Router>
          <NavBar />
          <div>

            <Routes>
              <Route path='/' element={<Explore />} />
              <Route path='/new-car' element={<NewCar />} />
              <Route path='/edit-car/:id' element={<EditCar />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/car-page/:id' element={<CarPage />} />
            </Routes>
          </div>
          <Footer />
        </Router>
        <ToastContainer />
      </AuthProvider>
    </>
  )
}

export default App
