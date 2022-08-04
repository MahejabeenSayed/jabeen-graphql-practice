import React from "react";
import { NavLink } from "react-router-dom";

const DataTable = ({ columns, data }: any) => {
  console.log("inside data table");
  return (
    <>
      <table>
        <thead>
          <tr>
            {columns &&
              columns.length > 0 &&
              columns.map((column: any, index: number) => (
                <th key={index}>{column.label}</th>
              ))}
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data &&
            data.length > 0 &&
            data.map((item: any, i: number) => {
              return (
                <tr key={i}>
                  {columns.map((column: any, index: number) => (
                    <td key={index}>{item[column.id]}</td>
                  ))}
                  <td>
                    <NavLink to={"/students/" + item.id}>View</NavLink>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
