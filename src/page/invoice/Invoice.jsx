import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { rows, columns } from "./data";

function Invoice() {
  return (
    <Box sx={{ height: 600, width: "100%", mx: "auto" }}>
      <DataGrid
      checkboxSelection
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}

export default Invoice;
