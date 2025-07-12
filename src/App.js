import logo from './logo.svg';
import './App.css';
import Task from './Task';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPro from './SearchPro';
import Allprd from './Allprd';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Task></Task>}></Route>
          <Route path='/search' element={<SearchPro></SearchPro>}></Route>
          <Route path='/allprd' element={<Allprd></Allprd>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
