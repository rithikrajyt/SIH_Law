import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Drafting from './components/Drafting';
import Direct from './components/Direct';
import { Signup } from './pages/Signup';
import Booking from './components/Booking';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Explain from './pages/Explain';
import Chatbot from './pages/Chatbot';
import Print from './pages/Print';
import { Simpli } from './components/Simpli';
import Upload from './components/Upload';

function App() {
  return (
    <>
      <Routes>
        <Route  exact path = "/" element = {<Homepage/>} />
        <Route exact path = "/login" element = {<Login/>} />
\        <Route exact path = "/dashboard//*" element = {<Dashboard/>} >
          <Route path='' element={<Simpli/> }/>
          <Route path='simplify' element={<Upload/> }/>
          <Route path='booking' element={<Booking/> }/>
        </Route>
        <Route exact path = "/result" element = {<Explain/>} />
        <Route exact path = "/chatbot" element = {<Chatbot/>} />
        <Route exact path = "/print" element = {<Print/>} />
      </Routes>
    </>
  );
}

export default App;
