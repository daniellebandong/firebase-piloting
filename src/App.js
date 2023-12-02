import {BrowserRouter, Routes, Route} from 'react-router-dom'

import LoginForm from "./components/pages/Login";
import RegisterForm from "./components/pages/Register";
import InfoForm from './components/pages/UserInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegisterForm/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/home' element={<InfoForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
