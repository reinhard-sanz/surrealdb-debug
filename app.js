import { Surreal, surql } from "surrealdb.js";
import { bigobj } from "./bigobj.js";

const db = new Surreal();

console.log(new Date(), "connecting");
await db.connect("http://127.0.0.1:8000/rpc", {
	namespace: "test",
	database: "test",
	auth: {
		username: "root",
		password: "root",
	},
});


console.log(new Date(), "encoding query");
const query = surql`RETURN ${bigobj}`;

console.log(new Date(), "executing query");
await db.query(query);

console.log(new Date(), "closing");
await db.close();

console.log(new Date(), "finished");
