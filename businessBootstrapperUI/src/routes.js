/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import BusinessProfile from "views/BusinessProfile";
import TableList from "views/TableList.js";
import Scale from "views/Scale";
import Plugins from "views/Plugins";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import Architecture from "views/Architecture";
import Pricing from "views/Pricing";

const dashboardRoutes = [
  {
    path: "/user",
    name: "Business Profile",
    icon: "nc-icon nc-circle-09",
    component: BusinessProfile,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/scale",
    name: "Scale",
    icon: "nc-icon nc-grid-45",
    component: Scale,
    layout: "/admin",
  },
  {
    path: "/architecture",
    name: "Artitecture",
    icon: "nc-icon nc-layers-3",
    component: Architecture,
    layout: "/admin",
  },
  {
    path: "/plugins",
    name: "Plugins",
    icon: "nc-icon nc-puzzle-10",
    component: Plugins,
    layout: "/admin",
  },
  {
      path: "/pricing",
      name: "Pricing",
      icon: "nc-icon nc-money-coins",
      component: Pricing,
      layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
];

export default dashboardRoutes;
