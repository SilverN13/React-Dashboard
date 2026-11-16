import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Dashboard from "./page/dashboard/Dashboard";
import Team from "./page/team/Team";
import Contact from "./page/contact/Contact";
import Invoice from "./page/invoice/Invoice";
import Profile from "./page/profile/Profile";
import Calendar from "./page/calendar/Calendar";
import FQA from "./page/fqa/FQA";
import Bar from "./page/bar/Bar";
import Pie from "./page/pie/Pie";
import Line from "./page/line/Line";
import Map from "./page/map/Map";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />
        <Route path="/manage" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/fqa" element={<FQA />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/line" element={<Line />} />
        <Route path="/map" element={<Map />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
