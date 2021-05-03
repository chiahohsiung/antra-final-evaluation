import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
