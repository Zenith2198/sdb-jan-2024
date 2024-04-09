import { useState } from 'react';
import './App.css';
import FancyButton from "./components/FancyButton";

function App() {
	// let displayMessage = "No button has been clicked!";
	const [displayMessage, setDisplayMessage] = useState("No button has been clicked!");

  return (
    <div className="App">
		Hello world!
		<p>{displayMessage}</p>
		<FancyButton
			setMessage={setDisplayMessage}
			clickMessage={"Button 1 was clicked!"}
		>
		</FancyButton>
		<FancyButton setMessage={setDisplayMessage} clickMessage={"Button 2 was clicked!"}></FancyButton>
    </div>
  );
}

export default App;
