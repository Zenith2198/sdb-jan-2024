import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, Navbar, NavbarBrand } from "reactstrap";

export default function Header() {
	const [search, setSearch] = useState("");
	const [searchOption, setSearchOption] = useState("pokemon");
	const navigate = useNavigate();

	async function searchPoke(e) {
		e.preventDefault();

		setSearch("");
		navigate(`/${searchOption}/${search.toLowerCase()}`);
	}

	return (
		<Navbar color="dark" dark={true} sticky="top">
			<Form className="d-flex" onSubmit={searchPoke}>
				<NavbarBrand href="/" tag={Link}>PokeAPI</NavbarBrand>
				<Input type="select" value={searchOption} onChange={(e) => setSearchOption(e.target.value)}>
					<option value="pokemon" default>Pokemon</option>
					<option value="type" default>Type</option>
				</Input>
				<Input className="mx-3" placeholder="Search Pokemon..." value={search} onChange={(e) => setSearch(e.target.value)}></Input>
				<Button>Search</Button>
			</Form>
		</Navbar>
	);
}