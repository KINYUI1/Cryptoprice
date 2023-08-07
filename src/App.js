import {Route,Routes,Navigate} from 'react-router-dom'
import Main from "./Pages/Main"
import './App.css';
import Currencies from './Pages/Currencies';
import Price from './Pages/Price';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={ <Main/> }/>
        <Route path='/Currencies' element={ <Currencies/> }/>
        <Route path='/Price/:symbol' element={ <Price/> }/>
        <Route path='*' element={ <Navigate to='/'/> }/>
      </Routes>
    </div>
  );
}

export default App;
