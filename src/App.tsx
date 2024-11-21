import { useState } from "react";
import "./App.css";
import { EditSubscriberFlightsModal } from "./components/EditSubscriberFlightsModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subscriberFlightsLeft, setSubscriberFlightsLeft] = useState(2);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Caravelo tech test</p>
        <button onClick={handleOpenModal}>Edit Flights</button>
      </header>
      {isModalOpen && (
        <EditSubscriberFlightsModal
          flightsLeft={subscriberFlightsLeft}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
