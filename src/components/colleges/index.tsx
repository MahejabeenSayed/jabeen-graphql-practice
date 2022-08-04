import { useQuery } from "@apollo/client";
import React, { useEffect, useMemo } from "react";
import { collegeColumns } from "../../constants/commo";
import { COLLEGES_LIST } from "../../services/queries";
import DataTable from "../data-table";

const Colleges = () => {
  const { loading, error, data } = useQuery(COLLEGES_LIST, { variables: null });

  useEffect(() => {}, []);

  const renderDataTable = useMemo(() => {
    return <DataTable columns={collegeColumns} data={data?.colleges} />;
  }, [data]);

  return (
    <>
      {renderDataTable}
      {/* <DataTable columns={collegeColumns} data={data?.colleges} /> */}
    </>
  );
};

export default Colleges;
