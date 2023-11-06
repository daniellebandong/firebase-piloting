import {BrowserRouter, Routes, Route} from 'react-router-dom'

import LoginForm from "./components/forms/Login";
import RegisterForm from "./components/forms/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegisterForm/>}/>
          <Route path='/login' element={<LoginForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
