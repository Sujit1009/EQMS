
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Form from './Form';
import NavBar from './NavBar';
import Admin from './Admin';
import AdminLogin from './AdminLogin';
import Welcome from './Welcome';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login />}></Route>
          <Route path='/register' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/nav" element={<NavBar/>}></Route>
          <Route path='/welcome' element={<Welcome/>}></Route>
          <Route path="/form" element={<Form/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="/adminLogin" element={<AdminLogin/>}></Route>

          
      </Routes>
    </BrowserRouter>

  );
}

export default App;
