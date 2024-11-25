# Edit Subscriber Flights Modal - Tech challenge

An app for editing the current subscriber flights left, by both increasing and decreasing them providing a motive.

## Preview

| Main page                                                                                                                                                  | Modal                                                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="655" alt="Captura de Pantalla 2024-11-22 a las 0 35 45" src="https://github.com/user-attachments/assets/651d1c89-9a0d-47c1-8bb4-874f84ef1c7e"> | <img width="738" alt="Captura de Pantalla 2024-11-21 a las 21 22 11" src="https://github.com/user-attachments/assets/ab66060c-9786-4ea9-b69c-c853b61e185d"> |

## Challenge requirements

It's required to develop a simple application with a UI that has a button which opens a modal window with the interface needed to manage the flights quota.

### Acceptance criteria

- The agent will be able to add or reduce quota for a specific subscriber when needed by using a simple interface with two controls (quota field and reason field).
- The agent performing this action will not be able to add or reduce quota without selecting a reason.
- When the agent adds quota, they should be able to see the following options in the reason field: 'Subscriber canceled flight', ‘Airline canceled flight', ‘Customer compensation' or ’Other'.
- When the agent removes quota, they should be able to see the following options in the “reason” field: 'Flight not redeposited after a flight cancellation', ‘Subscriber had log in or password issues', ‘Subscriber had issues when booking', ‘Subscription has not renewed correctly', ‘Other'.
- The save button will be only active when the quota has been changed and the reason has been selected.
- The agent will not be able to add quota for a subscriber higher than 3 flights.
- The agent will not be able to remove quota for a subscriber lower than 0.
- When the X (close) button is clicked it should close the modal and no change should be applied.
- When the save button is clicked it should save the changes and display a contextual success / error message.

_For API interactions, https://httpstat.us/ can be used._

## Tech stack

- ReactJS
- Typescript
- Styled-components (CSS-in-JS)
- Jest & testing library

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
