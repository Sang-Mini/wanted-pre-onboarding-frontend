import './App.css';
import SignUp from './Routes/SignUp';
import Login from './Routes/Login';
import Todo from './Routes/Todo';
import './css/SignUp.css';
import './css/Login.css';
import './css/Todo.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<SignUp></SignUp>} />
        <Route path='/' element={<Login></Login>} />
        <Route path='/todo' element={<Todo></Todo>} />
      </Routes>
    </div>
  );
}

export default App;
