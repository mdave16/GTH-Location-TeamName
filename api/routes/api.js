var express = require('express');
var router = express.Router();

const RestaurantsModel = require('../model/restaurant')

router.post('/restaurants', function(req, res) {
	RestaurantsModel.findAll(req.body).then(data => {
		res.json(data)
	}
	)
});

module.exports = router;
