const router = require("express").Router();
const Twitter = require("twitter");

const client = new Twitter({
  consumer_key: process.env.API,
  consumer_secret: process.env.API_SECRET,
  access_token_key: process.env.ACCESS,
  access_token_secret: process.env.ACCESS_SECRET,
});
router.get("/tweets/:user", async (req, res, next) => {
  const screen_name = req.params.user;
  try {
    const tweets = await client.get("statuses/user_timeline", { screen_name });
    res.send(tweets);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

module.exports = router;
