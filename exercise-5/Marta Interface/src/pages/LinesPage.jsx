import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import TrainList from "../components/TrainList";

const fetchStationData = async () => await axios.get("http://localhost:5001/api/stations");
const fetchTrainData = async () => await axios.get("http://localhost:5001/api/trains");

export default function LinesPage() {
  const [currColor, setCurrColor] = useState("gold"); // default line color
  const [stationData, setStationData] = useState([]);
  const [trainData, setTrainData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stations = await fetchStationData();
        const trains = await fetchTrainData();
        console.log("Fetched stations:", stations.data);  // Log station data
        console.log("Fetched trains:", trains.data);      // Log train data
        setStationData(stations.data);
        setTrainData(trains.data);
      } catch (error) {
        console.error("Error fetching data:", error); // Log any error
      }
    };
    fetchData();
  }, []);
  

  return (
    <div>
      <h1>{currColor.toUpperCase()} LINE</h1>
      <NavBar color={currColor} stations={stationData} />
      <TrainList color={currColor} trains={trainData} />
    </div>
  );
}
73