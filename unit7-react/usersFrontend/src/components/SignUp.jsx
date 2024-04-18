import "./styles/SignUp.css";
import { useState } from "react";
import { hash } from "bcryptjs";

export default function SignUp({ setToken }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function submitSignUp(event) {
		event.preventDefault(); //stop page from refreshing on submit

		hash(password, 10, async (err, passwordHash) => {
			if (err) {
				console.log(err);
			} else {
				//send username and password to backend
				const response = await fetch("http://localhost:3000/signup", {
					method: "POST",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify({
						username,
						passwordHash
					})
				});

				const body = await response.json();
				if (response.status === 200) {
					//save jwt to local storage
					localStorage.setItem("jwt-token", body.token);
					setToken(body.token);
				} else {
					console.log(body.message);
				}
			}
		});
	}

	return (
		<form onSubmit={submitSignUp} className="SignUp">
			<h1>Sign Up</h1>
			<label>
				<span>Username:</span>
				<input placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
			</label>
			<label>
				<span>Password:</span>
				<input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}></input>
			</label>
			<button type="submit">Submit</button>
		</form>
	);
}