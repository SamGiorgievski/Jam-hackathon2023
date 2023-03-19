import './App.scss';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Chat from './Chat';
import Connect from './Connect';

function App() {
  return (
    <div className="App">
      <div className="navbar">
      <div className="title"> 
          <Link to="/"> The In Between</Link>
        </div>
        <ul className="features">
          <li>
            <Link to="/connect">Connect</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path ="/" index element = {<Home/>}/>
        <Route path ="/connect" index element = {<Connect/>}/>
        <Route path ="/chat" index element = {<Chat/>}/>
      </Routes>
    </div>
  );
}

export default App;
