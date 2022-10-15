import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import AddEvent from './Components/Pages/AddEvent/AddEvent';
import Home from './Components/Pages/Home/Home';
import MyEvent from './Components/Pages/MyEvent/MyEvent';
import Login from './Components/Pages/Users/Login';
import Register from './Components/Pages/Users/Register';
import VolenterRegisterList from './Components/Pages/VolenterRegisterList/VolenterRegisterList';
import Fotter from './Components/Sharde/Fotter';
import { ToastContainer} from 'react-toastify';
import PrivateRoute from './Components/Pages/PrivateRoute/PrivateRoute';
import Navigation from './Components/Sharde/Navigation';
import Volenters from './Components/Pages/Volenters/Volenters';
import MyEvents from './Components/Pages/MyEvent/MyEvents';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addevent" element={<PrivateRoute><AddEvent/></PrivateRoute>}/>
        <Route path="/myevent" element={<MyEvent />} />
        <Route path="/volenterlist" element={<PrivateRoute><VolenterRegisterList /></PrivateRoute>} />
        <Route path="/volenters" element={<PrivateRoute><Volenters /></PrivateRoute>} />
        <Route path="/myevents" element={<PrivateRoute><MyEvents /></PrivateRoute>} />
      </Routes>
      <Fotter></Fotter>
      <ToastContainer />

    </div>
  );
}

export default App;
