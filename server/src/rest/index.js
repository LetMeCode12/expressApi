const jwt = require("../security/jwt");

module.exports = (app) => {
  app.get("/access", jwt.authenticationToken, (req, res) => {
    res.json({
      user: req.user,
    });
  });
};
