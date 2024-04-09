import "./styles/ProductLayout.css";
import ProductNav from "./ProductNav";
import ProductTable from "./ProductTable";
import { useState } from "react";

export default function ProductLayout() {
	const [onlyStocked, setOnlyStocked] = useState(false);

	return (
		<div className="ProductLayout">
			<ProductNav
				onlyStocked={onlyStocked}
				setOnlyStocked={setOnlyStocked}
			></ProductNav>
			<ProductTable
				onlyStocked={onlyStocked}
			></ProductTable>
		</div>
	);
}