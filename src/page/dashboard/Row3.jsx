import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../page/pie/PieChart";
import React from "react";
import Bar from "../../page/bar/BarChart";
import Geo from "../../page/map/MapChart";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      sx={{ flexWrap: "wrap", marginTop: 1.4, gap: 1.5 }}
    >
      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "28%" }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px", fontWeight: "600" }}
          variant="h6"
        >
          Campaign
        </Typography>

        <Pie isDashbord={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography
          variant="body2"
          sx={{ px: 0.7, pb: 3, textAlign: "center" }}
        >
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          sx={{ padding: "30px 30px 0 30px", fontWeight: "600" }}
        >
          Sales Quantity
        </Typography>

        <Bar isDashbord={true} />
      </Paper>

      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <Geo isDashbord={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;
