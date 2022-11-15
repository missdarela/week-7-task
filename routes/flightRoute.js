const express = require("express");

const router = express.Router();
const {
	getFlights,
	createFlight,
	getFlight,
	deleteFlight,
	updateFlight,
} = require("../controllers/flightController.js");

router.route("/").get(getFlights);

router.route("/").post(createFlight);

router.route("/:id").get(getFlight);

router.route("/:id").delete(deleteFlight);

router.route("/:id").put(updateFlight);

module.exports = router;