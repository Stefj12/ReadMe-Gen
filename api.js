const axios = require("axios");

axios
  .get("https://api.github.com/users/Stef12")
  .then(function(res) {
    console.log(res.data);
  });