import "./styles/ProductNav.css";

export default function Nav({ onlyStocked, setOnlyStocked }) {
	return (
		<div className="Nav">
			<input placeholder="Search..."></input>
			<div className="NavCheckboxContainer">
				<input
					type="checkbox"
					checked={onlyStocked}
					onChange={(e) => {
						setOnlyStocked(e.target.checked)
					}}
				></input>
				<p>Only show products in stock</p>
			</div>
		</div>
	);
}