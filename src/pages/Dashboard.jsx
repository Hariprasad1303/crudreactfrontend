import React, { useState, useEffect } from "react";
import { getSkills } from "../services/skillService";
import { getProjects } from "../services/projectService";
import { Paper, Typography, Box, LinearProgress } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineBarChart,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchSkills();
    fetchProjects();
  }, []);

  const fetchSkills = async () => {
    const data = await getSkills();
    setSkills(data);
    updateChartData(data.length, projects.length);
  };

  const fetchProjects = async () => {
    const data = await getProjects();
    setProjects(data);
    updateChartData(skills.length, data.length);
  };

  const updateChartData = (skillCount, projectCount) => {
    setChartData([
      { name: "Skills", count: skillCount },
      { name: "Projects", count: projectCount },
    ]);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-600 text-white flex flex-col">
        <Box className="p-6 text-2xl font-bold border-b border-indigo-500">
          DevElevate
        </Box>
        <nav className="flex-1 mt-6">
          <ul className="space-y-4 px-4">
            <Link to="/">
              <li className="flex items-center gap-2 p-2 hover:bg-indigo-500 rounded-md cursor-pointer">
                <AiOutlineHome size={20} />
                <span>Home</span>
              </li>
            </Link>
            <Link to="/skills">
              <li className="flex items-center gap-2 p-2 hover:bg-indigo-500 rounded-md cursor-pointer">
                <AiOutlineBarChart size={20} />
                <Link to="/skills">
                  <span>Skills</span>
                </Link>
              </li>
            </Link>
            <Link to="/projects">
              <li className="flex items-center gap-2 p-2 hover:bg-indigo-500 rounded-md cursor-pointer">
                <AiOutlineProject size={20} />
                <Link to="/projects">
                  <span>Projects</span>
                </Link>
              </li>
            </Link>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Typography variant="h4" className="mb-6 font-bold text-gray-800">
          Dashboard
        </Typography>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Paper className="p-6 shadow-lg rounded-xl bg-white">
            <Typography
              variant="h6"
              className="text-gray-700 font-semibold mb-2"
            >
              Total Skills
            </Typography>
            <Typography variant="h3" className="text-indigo-600 font-bold">
              {skills.length}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={skills.length * 10 > 100 ? 100 : skills.length * 10}
              className="mt-4 h-2 rounded-full"
            />
          </Paper>

          <Paper className="p-6 shadow-lg rounded-xl bg-white">
            <Typography
              variant="h6"
              className="text-gray-700 font-semibold mb-2"
            >
              Total Projects
            </Typography>
            <Typography variant="h3" className="text-green-600 font-bold">
              {projects.length}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={projects.length * 10 > 100 ? 100 : projects.length * 10}
              className="mt-4 h-2 rounded-full bg-green-100"
            />
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
