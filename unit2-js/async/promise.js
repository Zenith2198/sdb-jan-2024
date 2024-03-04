let myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("delayed for 3 seconds");
		resolve("success!");
		// reject();
	}, 3000);
});

console.log(1)

myPromise.then((msg) => {
	console.log(msg);
}, () => {
	console.log("promise rejected");
});

setTimeout(() => {
	console.log(2)
}, 500);

console.log(3)