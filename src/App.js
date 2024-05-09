import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Drafting from './components/Drafting';
import Direct from './components/Direct';
import { Signup } from './pages/Signup';
import Booking from './components/Booking';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route  exact path = "/" element = {<Homepage/>} />
        <Route exact path = "/draft" element = {<Drafting/>} />
        <Route exact path = "/simplify" element = {<Direct/>} />
        <Route exact path = "/dashboard" element = {<Dashboard/>} />
        <Route exact path = "/signup" element = {<Signup/>} />
        <Route exact path = "/login" element = {<Login/>} />
        <Route exact path = "/booking" element = {<Booking/>} />
      </Routes>
    </>
  );
}

export default App;
