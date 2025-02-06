const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "CNAME");
const destination = path.join(__dirname, "build", "CNAME");

fs.copyFile(source, destination, (err) => {
  if (err) {
    console.error("Error copying CNAME file:", err);
    process.exit(1);
  } else {
    console.log("CNAME file copied successfully!");
  }
});