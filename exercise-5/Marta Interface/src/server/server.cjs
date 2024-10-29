const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://jimbolimbo365:Parekh2005@cluster0.pluqc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0g", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Train schema
const trainSchema = new mongoose.Schema({
  LINE: String,
  STARTING_STATION: String,
  DESTINATION_STATION: String,
  WAITING_TIME: String,
  DELAY: String
});

const Train = mongoose.model("Train", trainSchema);

// Station schema
const stationSchema = new mongoose.Schema({
  name: String,
  lineColor: String,
});

const Station = mongoose.model("Station", stationSchema);

// API Endpoints
app.get("/api/trains", async (req, res) => {
  try {
    const trains = await Train.find();
    res.json(trains);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch train data" });
  }
});

app.get("/api/stations", async (req, res) => {
  try {
    const stations = await Station.find();
    res.json(stations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch station data" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
