const router = require('express').Router();

router.get('/', (req, res) => {
    res.send(`<h1>WELCOME TO THE HOMEPAGE OF THE BACKEND COMPONET LAMBDIANS!!</h1>`)
})

module.exports = router;