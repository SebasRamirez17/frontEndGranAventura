import './index.css';
import { Home } from '../src/components/pages/Home/Home';
import { Login } from './components/pages/Login/Login.jsx';
import { Routes, Route} from 'react-router-dom'
import { Header } from '../../granaventura/src/components/layouts/Header/Header'
import { Contenido } from '../src/components/pages/Contenido/Contenido'


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Contenido' element={<Contenido/>}/>
      </Routes>
    </div>
  );
}

export default App;
