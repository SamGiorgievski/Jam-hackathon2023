import './App.scss';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <div className="navbar">
      <div className="title"> 
          <Link to="/"> The In Between</Link>
        </div>
        <ul className="features">
          <li>
            <Link to="/listen">Listen</Link>
          </li>
          <li>
            <Link to="/share">Share</Link>
          </li>
          <li>
            <Link to="/connect">Connect</Link>
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
