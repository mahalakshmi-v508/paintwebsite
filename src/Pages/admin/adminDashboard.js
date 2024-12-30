import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import Sidebar from "./sidebar/sideBar";
import AdminHeader from "./adminHeader/adminHeader";

const data = [
  { name: "Jan 2025", interior: 4000, exterior: 2400 },
  { name: "Feb", interior: 3000, exterior: 1398 },
  { name: "Mar", interior: 2000, exterior: 9800 },
  { name: "Apr", interior: 2780, exterior: 3908 },
  { name: "May", interior: 1890, exterior: 4800 },
  { name: "Jun", interior: 2390, exterior: 3800 },
];

const AdminDashboard = () => {
  return (
    <div className="dashboard">                                         
    {/* Admin Header */}
    <AdminHeader/>

    <div className="dashboard-content">
      {/* Sidebar */}
      <Sidebar />
    <div style={{ marginTop: "2rem" }}>
      <h2>Trending Products</h2>
      <LineChart width={700} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="interior" stroke="#8884d8" />
        <Line type="monotone" dataKey="exterior" stroke="#82ca9d" />
      </LineChart>
    </div>
    </div>
    </div>
  );
};
 
export default AdminDashboard;
