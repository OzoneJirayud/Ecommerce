const express = require("express");
const app = express();
const morgan = require("morgan");
const { readdirSync } = require("fs");
const cors = require("cors");
// const authRouter = require("./routes/auth");
// const categoryRouter = require("./routes/category");

// Middleware to parse JSON request bodies
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

readdirSync("./routes").map((c) => app.use("/api", require("./routes/" + c)));

// routes
// app.use("/api", authRouter);
// app.use("/api", categoryRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
