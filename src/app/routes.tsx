import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "services/:serviceId", Component: ServiceDetail },
      { path: "portfolio", Component: Portfolio },
      { path: "portfolio/:projectId", Component: ProjectDetail },
      { path: "experience", Component: Experience },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
