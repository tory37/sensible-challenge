var express = require('express');
var router = express.Router();
const axios = require('axios');

const apiKey = process.env.GOOGLE_API_KEY;

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const lat = req.query.lat;
  const lon = req.query.lon;
  const keyword = req.query.keyword;

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lon}&radius=1500&keyword=${keyword}&key=${apiKey}`;
  console.log("Sending request to: ", url)

  try {
    const {data} = await axios.get(url);
    res.json(data);
  }
    catch (err) {
    next(err);
  }
});

module.exports = router;
