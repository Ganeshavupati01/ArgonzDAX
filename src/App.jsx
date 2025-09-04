import React from "react";
import { Routes, Route } from "react-router-dom";
import MentorsPage from "./pages/MentorsPage";
import TaskPage from "./pages/TaskPage";

export default function App() {
  return (
    <Routes>
      <Route path="/mentors" element={<MentorsPage />} />
      <Route path="/tasks" element={<TaskPage />} />
      {/* Add more pages/routes here */}
    </Routes>
  );
}
