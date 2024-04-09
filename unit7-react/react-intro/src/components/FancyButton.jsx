import "./FancyButton.css";

export default function FancyButton({ setMessage, clickMessage }) {
	const buttonText = "Click me!";

	return (
		<button className="FancyButton" onClick={() => setMessage(clickMessage)}>{buttonText}</button>
	);
}