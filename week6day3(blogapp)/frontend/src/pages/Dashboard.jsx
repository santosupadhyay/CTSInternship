import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  LineChart,
  Line,
  Legend,
  BarChart,
  Tooltip,
  Bar,
} from "recharts";

export default function Dashboard() {
  const API_URL = "http://localhost:3000/api/blogs";

  const [data, setData] = useState([]);

  const getLikesAnalytics = async () => {
    const response = await axios.get(`${API_URL}/likes-analytics`);
    setData(response.data?.data);
  };

  useEffect(() => {
    getLikesAnalytics();
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div>
        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="title" stroke="#8884d8" />

          <YAxis />

          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />

          <Bar dataKey="likes" fill="#82ca9d" barSize={30} />
        </BarChart>
      </div>
    </div>
  );
}
