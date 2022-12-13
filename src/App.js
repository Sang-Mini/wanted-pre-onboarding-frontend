import './App.css';
import SignUp from './Routes/SignUp';
import Login from './Routes/Login';
import './css/SignUp.css';
import './css/Login.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignUp></SignUp>} />
        <Route path='/login' element={<Login></Login>} />
      </Routes>
    </div>
  );
}

export default App;
