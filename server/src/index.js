const express = require("express");
const security = require("./security/security")
const rest = require("./rest/index");
const cors = require("cors")
const app = express();

require("dotenv").config();
const port = process.env.PORT;

app.use(express.json())
app.use(cors())

security.encryptMaster();
security.login(app);
rest(app);

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = server;