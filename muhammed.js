const router = require("express").Router();

router.get('/students', (req, res,next) => {
    res.send(`<ul style="font-size:3em;">
    <li>Ramadan</li>
    <li>mohamed</li>
    <li>omar</li>
    <li>karem</li>
    </ul>`)
  })


module.exports = router;
