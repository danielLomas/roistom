import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//se importa el componente
import ShowClients from './components/ShowClients';
import CreateClient from './components/CreateClient';
import EditClient from './components/EditClient';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowClients/>} />
          <Route path='/create' element={ <CreateClient/>} />
          <Route path='/edit/:id' element={ <EditClient/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
