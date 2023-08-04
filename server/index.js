import '@fortawesome/fontawesome-free/css/all.css';


const app = require("./app");
require("dotenv/config");
app.listen(process.env.PORT, () => {
	console.log(`Server Running At PORT ${process.env.PORT}`);
});
