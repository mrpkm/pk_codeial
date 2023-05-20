const mongoose = require("mongoose");
const env = require('./environment');
mongoose.set("strictQuery", true);
mongoose.connect('mongodb+srv://mrpk8065:123654@cluster0.hjbrew6.mongodb.net/pk_codeial?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on(
	"error",
	console.error.bind(console, "Error connection to database MangoDB")
);

db.once("open", function () {
	console.log("Connected to Database :: MongoDB");
});

module.exports = db;
// export default db;
// export {db};
