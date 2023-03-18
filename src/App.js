import './App.scss';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <div className="navbar">
      <div className="title"> 
          <Link to="/"> Broken 99</Link>
        </div>
        <ul className="features">
          <li>
            <Link to="/generate">Free Support</Link>
          </li>
          <li>
            <Link to="/edit">Professional Support</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path ="/" index element = {<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
