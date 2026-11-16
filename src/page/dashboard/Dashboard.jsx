import {
  Box,
  Button,
  Stack,
  useTheme,
} from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

function Dashboard() {
  const theme = useTheme();
  return (
    <>
      <Stack direction={"column"}>
        <Box sx={{ textAlign: "right" }}>
          <Button
            variant="contained"
            sx={{ fontSize: "13px", padding: "6px 8px",textTransform:"capitalize" }}
          >
            <DownloadOutlinedIcon
              fontSize="small"
              sx={{ marginRight: "3px", }}
            />
            Download Reports
          </Button>
        </Box>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </>
  );
}

export default Dashboard;
