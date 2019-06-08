const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
	res.send('This is the home router!')

})

module.exports = router