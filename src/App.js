import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import { Signup } from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Explain from './pages/Explain';
import Chatbot from './pages/Chatbot';
import Print from './pages/Print';
import { Simpli } from './components/Simpli';
import Upload from './components/Upload';
import BookingPage from './pages/BookingPage';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './context/PrivateRoute';

function App() {
  return (
    <>
      <Routes>
        <Route  exact path = "/" element = {<Homepage/>} />
        <Route exact path = "/login" element = {<Login/>} />
        <Route exact path = "/signup" element = {<Signup/>} />
        <Route path="" element={<AuthProvider><PrivateRoute/></AuthProvider>} >
       <Route exact path = "/dashboard//*" element = {<Dashboard/>} >
          <Route path='' element={<Simpli/> }/>
          <Route path='simplify' element={<Upload/> }/>
          <Route path='booking' element={<BookingPage/> }/>
        </Route>
        <Route exact path = "/result" element = {<Explain/>} />
        <Route exact path = "/chatbot" element = {<Chatbot/>} />
        <Route exact path = "/print" element = {<Print/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
