import './App.css';


function App() {
  return (
    
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css"></link>
      <h1>News App</h1>
      <form className="search" action=" ">
        <input id="sal" type="text"></input>
        <br/>
        <button className="submit">Submit</button>
      </form>

      <div className="container">
        <ul className="news-list"></ul>
      </div>

      
    </div>
  );
}

export default App;
