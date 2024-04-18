import { useState } from "react";
import "./App.css/";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import SignUp from "./components/SignUp";
import NewPost from "./components/NewPost";

export default function App() {
	const [token, setToken] = useState(localStorage.getItem("jwt-token"));

	return (
		<>
			{token ?
				<div className="App-SignedIn">
					<SignOut setToken={setToken}></SignOut>
					<NewPost></NewPost>
				</div>
			:
				<div className="App-NotSignedIn">
					<SignUp setToken={setToken}></SignUp>
					<SignIn setToken={setToken}></SignIn>
				</div>
			}
		</>
	);
}
