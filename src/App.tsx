import { useState } from "react";
import "./App.css";
import { EditSubscriberFlightsModal } from "./components/EditSubscriberFlightsModal";
import { Button } from "./components/Button";

const SUBSCRIBER_FLIGHTS_LEFT = 2;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subscriberFlightsLeft, setSubscriberFlightsLeft] = useState(
    SUBSCRIBER_FLIGHTS_LEFT
  );

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (newFlightsLeft: number, motive: string) => {
    setSubscriberFlightsLeft(newFlightsLeft);
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Caravelo tech test</p>
        <h3>Current subscriber flights left: {subscriberFlightsLeft}</h3>
        <Button variant="secondary" onClick={handleOpenModal}>
          EDIT FLIGHTS
        </Button>
      </header>
      {isModalOpen && (
        <EditSubscriberFlightsModal
          flightsLeft={subscriberFlightsLeft}
          onClose={handleCloseModal}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default App;
