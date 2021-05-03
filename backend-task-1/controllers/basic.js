const fs = require("fs");
let database;

fs.readFile("./db.json", "utf8", (err, data) => {
  if (err) {
    console.log(`Error reading file from disk: ${err}`);
  } else {
    // parse JSON string to JSON object
    database = JSON.parse(data);
  }
});

module.exports = {
  home: (_, res) => {
    res.json({ message: "OK" });
  },
  getFruits: (_, res) => {
    res.json(database);
  },
  addFruits: (req, res) => {
    // write file to disk
    const { body } = req;

    database = { ...database, ...body };
    const newData = JSON.stringify(database, null, 4);

    fs.writeFile("./db.json", newData, "utf8", (err) => {
      if (err) {
        console.log(`Error writing file: ${err}`);
      } else {
        console.log(`File is written successfully!`);
      }
    });
    res.json(database);
  },
};
