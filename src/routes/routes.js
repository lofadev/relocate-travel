import Home from "../pages/Home/Home";
import DestinationsDetails from "../pages/DestinationsDetails/DestinationsDetails";

const publicRoutes = [
  { path: "/", component: <Home /> },
  { path: "/destinations", component: null },
  { path: "/destinations/details/:id", component: <DestinationsDetails /> },
  { path: "/deals", component: null },
  { path: "/explore", component: null },
  { path: "/resources", component: null },
];

export { publicRoutes };
