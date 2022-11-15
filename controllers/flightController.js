const Flights = require("../models/Flight");
const  uuid  = require("uuidv4");

// All flights
exports.getFlights = async (req, res) => {
	try {
		const flights = Flights;
		res.status(200).json({message: "All flights", flights: flights
		});
	} catch (err) {
		return res.status(400).json({message: err.message })
	}
};

// New flights
exports.createFlight = async (req, res) => {
    try {
      const { title, price } = await req.body
      const newFlight = {
        id: uuid(),
        title,
        date,
        time,
        price,
      }
      flight.id = uuid;
      const AddFlight = flights.push(newFlight);
      res.status(200);
      res.json({ success: 'flight created successfully ', AddFlight });
    } catch (err) {
      return res.status(400).json({  message: err.message });
    }
  };

//   updating flights
exports.updateFlight = async (req, res) => {
    try {
      var id  = req.params.id
      const flight = flights.find((flight) => flight.id === id)
      const { title, date, time, price } = await req.body
      flight.title = title;
      flight.date = date;
      flight.time = time;
      flight.price = price;
      res.status(200)
        res.json({ success: `flight with ${id} updated`, flight });
    }
    catch (err) {
      return res.status(400).json({message: err.message });
    }
  };

//   Single flights
exports.getFlight = async (req, res) => {
	try {
		var id = req.params.id;
		const flight = Flights.find((flight) => flight.id === id);
        res.status(200)
        res.json({ success: `flight with ${id} found`, flight });
  } 
  catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// Delete flight
exports.deleteFlight = async (req, res) => {
	try {
		var id = req.params.id;
		const flight = Flights.find((flight) => flight.id === id);
		Flights.splice(Flights.indexOf(flight), 1);
        res.status(200)
        res.json({ success: `flight with ${id} deleted`, flight });
  } 
  catch (error) {
    return res.status(400).json({message: err.message });
  }
};

exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
}