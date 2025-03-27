import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Join from './pages/Join'
import Signin from './pages/Signin'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Connections from './pages/Connections'
import Jobs from './pages/Jobs'
import Profile from './pages/Profile'
import MyConnections from './pages/MyConnections'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/join' element={<Join/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/connections' element={<Connections/>}/>
          <Route path='/jobs' element={<Jobs/>}/>
          <Route path='/profile/' element={<Profile/>}/>
          <Route path='/myconnections' element={<MyConnections/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
