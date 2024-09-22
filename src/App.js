import React, {useState} from 'react';
import './App.css';
import Nav from "./Components/Nav"
import Header from "./Components/Header"
import Specials from './Components/Specials';
import Footer from "./Components/Footer"
import BookingForm from './Components/BookingForm';

function App() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleReserveButtonClick = () => {
    setShowBookingForm(true);
  };

  return (
    <div>
      {showBookingForm ? (
        <>
          <Nav />
          <BookingForm />
          <Footer />
        </>
      ) : (
        <>
          <Nav />
          <Header onReserveButtonClick={handleReserveButtonClick} />
          <Specials />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;