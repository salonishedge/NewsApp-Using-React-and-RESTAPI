import './App.css';
import Navbar from './Components/Navbar'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css"></link>
      <Router>
      <Navbar></Navbar>
      </Router>
      
      <div className="content">
        <ul className="news-list"></ul>
      </div>

      
    </div>
  );
}

export default App;
