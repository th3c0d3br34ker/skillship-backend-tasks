const express = require("express");
const routes = require("./routes.js");
const app = express();

const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Success! Your application is running on port ${PORT}.`);
});
