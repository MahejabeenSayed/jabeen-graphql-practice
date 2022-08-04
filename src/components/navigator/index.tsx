import React from "react";
import { Route, Routes } from "react-router-dom";
import Colleges from "../colleges";
import Home from "../home";
import Students from "../students";
import AddStudent from "../students/components/add-student";
import StudentDetails from "../students/components/student-details";

const Navigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/colleges" element={<Colleges />} />
      <Route path="/students" element={<Students />} />
      <Route path="/students/:id" element={<StudentDetails />} />
      <Route path="/addStudent" element={<AddStudent />} />
    </Routes>
  );
};

export default Navigator;
