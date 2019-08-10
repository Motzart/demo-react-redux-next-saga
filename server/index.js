"use strict";
const app = require("./express");
const PORT = process.env.PORT || 8081;

app.listen(PORT, err => {
  if (err) {
    console.error("Error happened during server start", err);
    process.exit(1);
  }
  console.log(`SERVER: listening on port ${PORT}`);
});
