import "dotenv/config";
import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";


// const payload = {
// 	"sub": "1234567890",
// 	"name": "Michael Vargas",
// 	"admin": true
// }

const encrypted = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 2 });

console.log(encrypted);

const decrypted = jwt.verify(encrypted, process.env.SECRET_KEY);
console.log(decrypted);

setTimeout(() => {
	console.log(jwt.verify(encrypted, process.env.SECRET_KEY))
}, 3000)

const saltRounds = 10;

bcrypt.hash(process.env.PASSWORD, saltRounds, (err, hash) => {
	bcrypt.compare("asdfadsfg", hash, (err, result) => {
		console.log(result);
	});
});