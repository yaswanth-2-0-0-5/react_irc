import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>} ></Route>
        <Route path="/Signup" element={<Signup></Signup>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
