//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Footer from './components/Footer/Footer';
import HomeMidSec from './components/HomeMidSec';
import BookingCard from './components/HomePage/BookingCard/BookingCard';
import BookingCardCar from './components/HomePage/BookingCard/BookingCardCar';
import BookingCardFlight from './components/HomePage/BookingCard/BookingCardFlight';
import Login from './components/forms/Login';
//import MultipleInputs from "./components/forms/MultipleInputs"


function App() {
  return (
    <div className="App">
      < Navbar />
      < HomeMidSec />
      < Footer />
      < BookingCard />
      <BookingCardCar />
      <BookingCardFlight />
      <Login />
      {/* //<MultipleInputs /> */}

      
    </div>
  );
}

export default App;
