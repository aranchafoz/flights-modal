import { useEffect, useState } from "react";
import { EditSubscriberFlightsModal } from "./components/EditSubscriberFlightsModal";
import { Button } from "./components/Button";
import { updateSubscriberFlights } from "./api/updateSubscriberFlights";
import { AppWrapper, AppContent, SuccessMessage } from "./App.styles";

const SUBSCRIBER_FLIGHTS_LEFT = 2;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subscriberFlightsLeft, setSubscriberFlightsLeft] = useState(
    SUBSCRIBER_FLIGHTS_LEFT
  );
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined = undefined;

    if (success) {
      timeoutId = setTimeout(() => {
        setSuccess(false);
      }, 6000);
    }

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [success]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (newFlightsLeft: number, motive: string) => {
    await updateSubscriberFlights({ flightsLeft: newFlightsLeft, motive });

    setSuccess(true);
    setSubscriberFlightsLeft(newFlightsLeft);
    setIsModalOpen(false);
  };

  return (
    <AppWrapper>
      <AppContent>
        <p>Caravelo tech test</p>
        <h3>Current subscriber flights left: {subscriberFlightsLeft}</h3>

        <Button variant="secondary" onClick={handleOpenModal}>
          EDIT FLIGHTS
        </Button>
      </AppContent>
      {isModalOpen && (
        <EditSubscriberFlightsModal
          flightsLeft={subscriberFlightsLeft}
          onClose={handleCloseModal}
          onSubmit={handleSubmit}
        />
      )}
      {success && (
        <SuccessMessage>Changes have been successfully saved!</SuccessMessage>
      )}
    </AppWrapper>
  );
}

export default App;
