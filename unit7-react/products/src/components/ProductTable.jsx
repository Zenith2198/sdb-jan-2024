import "./styles/ProductTable.css";
import ProductCategory from "./ProductCategory";

export default function ProductTable({ onlyStocked }) {
	// products array we would get from a fetch
	const productsFromNetwork = [
		{ category: "Fruits", price: "$1", stocked: true, name: "Apple" },
		{ category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
		{ category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
		{ category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
		{ category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
		{ category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
		{ category: "Grains", price: "$2", stocked: true, name: "Bread" },
		{ category: "Grains", price: "$4", stocked: false, name: "Pasta" }
	];

	// array of categories of products
	let categories = [];
	productsFromNetwork.forEach((prod) => {
		if (!categories.includes(prod.category)) {
			categories.push(prod.category);
		}
	});
	// array of arrays breaking products into categories
	let products = [];
	categories.forEach((cat) => {
		products.push(productsFromNetwork.filter((prod) => prod.category === cat));
	});

	return (
		<div className="ProductTable">
			<div className="ProductTableHeaders">
				<h2>Name</h2>
				<h2>Price</h2>
			</div>
			{products.map((catArr, i) => (
				<div key={i} className={`${catArr[0].category}`}>
					<ProductCategory
						products={catArr}
						onlyStocked={onlyStocked}
					></ProductCategory>
				</div>
			))}
		</div>
	);
}