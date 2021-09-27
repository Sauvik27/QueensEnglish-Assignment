import './App.css';
import Navbar from './components/Navbar';
import Questions from './components/Questions';

function App() {
  return (
    <div className="App">
      {console.log("Please pause BROWSER extension while testing because sometimes extensions cause warnings/errors.")}
      <Navbar/>
      <Questions/>
    </div>
  );
}

export default App;
