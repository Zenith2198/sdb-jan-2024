import { useLoaderData } from "react-router-dom";
import { Card, CardHeader, CardImg, CardText, CardTitle } from "reactstrap";

export async function pokemonLoader({ params }) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`);

	if (response.status === 200) {
		const body = await response.json();

		return {
			message: body
		}
	} else {
		const body = await response.text();

		return {
			error: true,
			message: body
		}
	}
}

export default function Pokemon() {
	const {message, error} = useLoaderData();
	if (error) {
		return <div>{message}</div>
	}
	console.log(message);

	return (
		<Card className="m-4">
			<CardHeader>{message.name}</CardHeader>
			<CardImg src={message.sprites.front_default} className="w-25"></CardImg>
			<div className="m-3">
				<CardTitle tag="h3">Types</CardTitle>
				{message.types.map((t, i) => (
					<CardText key={i}>{t.type.name}</CardText>
				))}
			</div>
		</Card>
	);
}