const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;


//import middleware
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const { readdirSync } = require("fs");

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());


//Auto routes
readdirSync("./routes").forEach((file) => {
    app.use("/api", require(`./routes/${file}`));
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
