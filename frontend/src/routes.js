import Dashboard from "./views/Dashboard";
import ServiceBarChart from "./views/ServiceBarChart";
import EnvBarChart from "./views/EnvBarChart";
import ChannelBarChart from "./views/ChannelBarChart";
import Help from "views/Help.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/servicebarchart",
    name: "ServiceBarChart",
    component: ServiceBarChart,
    layout: "/admin",
  },
  {
    path: "/envbarchart",
    name: "EnvBarChart",
    component: EnvBarChart,
    layout: "/admin",
  },
  {
    path: "/channelbarchart",
    name: "ChannelBarChart",
    component: ChannelBarChart,
    layout: "/admin",
  },
  {
    path: "/help",
    name: "Help",
    component: Help,
    layout: "/admin",
  },
];

export default dashboardRoutes;
