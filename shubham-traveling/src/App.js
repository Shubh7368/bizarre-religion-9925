//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Footer from './components/Service/Footer';
import HomeSearchComponent from './components/Service/HomeSearchComponent';

function App() {
  return (
    <div className="App">
      <Navbar />
      < HomeSearchComponent />
      < Footer />
    </div>
  );
}

export default App;