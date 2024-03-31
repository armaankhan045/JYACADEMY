import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Components/customcss.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import Contact from "./Components/Contact";
import { Route, Routes } from "react-router-dom";
import OncampusProgram from "./Components/OncampusProgram";
import AuditAssurance from "./Components/AuditAssurance";
import CrashCourse from "./Components/CrashCourse";
import NavBar from "./Components/NavBar";
import Taxation from "./Components/Taxation";
import InternationalTransections from "./Components/InternationalTransections";
import ManagementConsultancy from "./Components/ManagementConsultancy";
import NewBusinessSupport from "./Components/NewBusinessSupport";
import BusinessSupport from "./Components/BusinessSupport";
import WhoWeAre from "./Components/WhoWeAre";
import WhoWeServe from "./Components/WhoWeServe";
import WhatWeDo from "./Components/WhatWeDo";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar />} />
      <Route path="/OncampusProgram" element={<OncampusProgram />} />
      <Route path="/CrashCourse" element={<CrashCourse />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/AuditAssurance" element={<AuditAssurance />} />
      <Route path="/Taxation" element={<Taxation />} />
      <Route path="/BusinessSupport" element={<BusinessSupport />} />

      <Route
        path="/ManagementConsultancy"
        element={<ManagementConsultancy />}
      />

      <Route
        path="/InternationalTransections"
        element={<InternationalTransections />}
      />

      <Route path="/NewBusinessSupport" element={<NewBusinessSupport />} />
      <Route path="/WhatWeDo" element={<WhatWeDo />} />
      <Route path="/WhoWeServe" element={<WhoWeServe />} />
      <Route path="/WhoWeAre" element={<WhoWeAre />} />
    </Routes>
  </BrowserRouter>
);
