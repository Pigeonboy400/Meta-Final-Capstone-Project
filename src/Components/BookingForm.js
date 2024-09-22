import "../App.css";
import React, { useState } from "react"

function BookingForm() {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");

  const formIsValid = () => {
    return (
      occasion &&
      guests &&
      date &&
      times !== ""
    );
  };

  const clearForm = () => {
    setOccasion("");
    setGuests("");
    setDate("");
    setTimes("");
  };

  const handleSumbit =(e) => {
    e.preventDefault();
    const chance = Math.floor(Math.random() * 100 + 1);
    if (chance > 49) {
      alert(
        "Thank you for your Reservation. A confirmation has been sent to your email. We look forward to welcoming you into our restaurant soon."
      );
    } else {
      alert("Sorry. There was an error. Please try again or change your reservation details.")
    }
    clearForm();
    window.location.reload();
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSumbit}>
          <fieldset>
            <div>
              <section className="section1">
                <label htmlFor="book-date">Date:</label>
              </section>
              <section className="section2">
                <input
                  id="book-date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  required
                />
              </section>
            </div>
            <div>
              <section className="section1">
                <label htmlFor="book-time">Time:</label>
              </section>
              <section className="section2">
                <select
                  id="book-time"
                  value={times}
                  onChange={(e) => setTimes(e.target.value)}
                  required
                >
                  <option
                  >
                    Select a Time
                  </option>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                  <option>22:00</option>
                </select>
              </section>
            </div>
            <div>
              <section className="section1">
                <label htmlFor="book-guests">Guests:</label>
              </section>
              <section className="section2">
                <input
                  id="book-guests"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  type={"number"}
                  placeholder={0}
                  max={10}
                  required
                ></input>
              </section>
            </div>
            <div>
              <section className="section1">
                <label htmlFor="book-occasion">Occasion:</label>
              </section>
              <section className="section2">
                <select
                  id="book-occasion"
                  key={occasion}
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  required
                >
                  <option value="">Select an Option</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Other</option>
                </select>
              </section>
            </div>
            <div>
              <button
                type={"submit"}
                disabled={!formIsValid()}
              >
                Make Your Reservation
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;