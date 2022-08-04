import { useQuery } from "@apollo/client";
import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { studentsColumns } from "../../constants/commo";
import { STUDENTS_LIST } from "../../services/queries";
import DataTable from "../data-table";

const Students = () => {
  const { loading, error, data } = useQuery(STUDENTS_LIST, { variables: null });
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const openAddNewForm = () => {
    navigate("/addStudent");
  };

  const renderDataTable = useMemo(() => {
    return <DataTable columns={studentsColumns} data={data?.students} />;
  }, [data]);

  return (
    <>
      <button onClick={openAddNewForm}>Add Student</button>
      {renderDataTable}
    </>
  );
};

export default Students;
