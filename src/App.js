import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';

function App() {

  return (
          <div>
            <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/home' element={<Home page/>}/>
            </Routes>

      </div>
  );
}

export default App;
