export default function SignOut({ setToken }) {
	return (
		<>
			<button onClick={() => {
				localStorage.removeItem("jwt-token");
				setToken("");
			}}>Sign Out</button>
		</>
	);
}