import "./styles/ProductCategory.css";

export default function ProductCategory({ products, onlyStocked }) {
	return (
		<div className="ProductCategory">
			<h2>{products[0].category}</h2>
			<div className="ProductCategoryProds">
				{products.map((p, i) => (
					<>
						{!(!p.stocked && onlyStocked) &&
							<div className="ProductCategoryProdRow" key={i}>
								<div className={`${p.stocked ? "" : "ProductCategoryNotStocked"}`}>{p.name}</div>
								<div>{p.price}</div>
							</div>
						}
					</>
				))}
			</div>
		</div>
	);
}