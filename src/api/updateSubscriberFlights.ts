const BASE_URL = "https://httpstat.us/";

interface UpdateSubscriberFlightsForm {
  flightsLeft: number;
  motive: string;
}

export const updateSubscriberFlights = async (
  form: UpdateSubscriberFlightsForm
) => {
  const rawResponse = await fetch("https://httpstat.us/200", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
  return await rawResponse.json();
};
