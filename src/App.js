import {BrowserRouter, Routes, Route} from 'react-router-dom'

import LoginForm from "./components/pages/Login";
import RegisterForm from "./components/pages/Register";
import InfoForm from './components/pages/UserInfo';
import SubscribeForm from './components/pages/Subscribe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegisterForm/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/admin' element={<InfoForm/>}/>
          <Route path='/home' element={<SubscribeForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
