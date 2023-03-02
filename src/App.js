import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { Routes, Route } from 'react-router-dom';
import Aboutus from './Components/Aboutus';
import Login from './Components/Login';
import Home from './Components/Home';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App container-fluid">

      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />

    </div>
  );
}

export default App;
