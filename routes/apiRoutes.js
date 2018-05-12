// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friendList
// ===============================================================================

var friendsList = require("../data/friends.js");

module.exports = function (app) {

  // ============================ API Routes============================

  // API GET Request
  app.get("/api/friends", function (req, res) {

    return res.json(friendsList);
  });
};