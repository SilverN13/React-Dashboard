import { Stack, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./data";

import StatCard from "./Card";

const Row1 = () => {
  const theme = useTheme();

  const cardData = [
    {
      id: 1,
      icon: (
        <EmailIcon
          sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
        />
      ),
      title: "12,361",
      subTitle: "Emails Sent",
      increase: "+14%",
      data: data1,
      scheme: "nivo",
    },
    {
      id: 2,
      icon: (
        <PointOfSaleIcon
          sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
        />
      ),
      title: "431,225",
      subTitle: "Sales obtained",
      increase: "+21%",
      data: data2,
      scheme: "category10",
    },
    {
      id: 3,
      icon: (
        <PersonAddIcon
          sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
        />
      ),
      title: "32,441",
      subTitle: "New Clients",
      increase: "+5%",
      data: data3,
      scheme: "accent",
    },
    {
      id: 4,
      icon: (
        <TrafficIcon
          sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
        />
      ),
      title: "1,325,134",
      subTitle: "Traffic Received",
      increase: "+43%",
      data: data4,
      scheme: "dark2",
    },
  ];

  return (
    <Stack
      direction={"row"}
      sx={{
        flexWrap: "wrap",
        gap: 1,
        justifyContent: "center",
        [theme.breakpoints.up("sm")]: {
          justifyContent: "space-between",
        },
        marginTop: "10px",
      }}
    >
      {cardData.map((item) => (
        <StatCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          subTitle={item.subTitle}
          increase={item.increase}
          data={item.data}
          scheme={item.scheme}
        />
      ))}
    </Stack>
  );
};

export default Row1;
