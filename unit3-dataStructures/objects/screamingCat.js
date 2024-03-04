let cat = {
	name: "Mina",
	color: "black",
	scream: function() {
		console.log(`${this.name} screams!`);
	},
	test: () => {
		console.log(this)
	}
};
