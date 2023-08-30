/* eslint-disable react/jsx-no-undef */

import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js/auto";
import { MapContainer, TileLayer } from "react-leaflet";
import WorldMap from "../components/chartsAndMap/WorldMap";
import {
  fetchCountriesData,
  fetchHistoricalData,
} from "../api/Charts_and_Maps_Api";

const Dashboard = () => {
  const { data: countriesData } = useQuery({
    queryKey: ["countriesData"],
    queryFn: fetchCountriesData,
  });
  const { data: historicalData } = useQuery({
    queryKey: ["histroicalData"],
    queryFn: fetchHistoricalData,
  });

  const chartData = {
    labels: historicalData ? Object.keys(historicalData) : [],
    datasets: [
      {
        label: "Cases",
        data: historicalData ? Object.values(historicalData) : [],
        fill: false,
        borderColor: "#f50057",
        tension: 0.2,
      },
    ],
  };

  useEffect(() => {
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
  }, []);

  return (
    <div className="w-full pt-20 px-4 pb-8">
      <h1 className="text-4xl font-bold mb-4 text-pink-600">
        Corona Cases Chart
      </h1>
      <div className="border-2 border-red-100 w-11/12  m-auto 10 auto 10">
        {chartData.datasets ? (
          <Line data={chartData} />
        ) : (
          <h1 className="text-pink-600 mb-4 font-bold text-2xl">Loading...</h1>
        )}
      </div>

      <h1 className="text-4xl font-bold mb-4 mt-4 text-blue-500">
        Corona Cases World Map
      </h1>
      <div className="border-2 border-blue-500 w-11/12  m-auto 5 auto 5">
        <MapContainer
          className="m-auto w-full  border-blue-700"
          bounds={[
            [-60, -180],
            [85, 180],
          ]}
          zoom={2}
          center={[20, 40]}
          style={{ height: "50vh" }}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          />

          <WorldMap countriesData={countriesData} />
        </MapContainer>
      </div>
    </div>
  );
};

export default Dashboard;
