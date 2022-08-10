import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import {
  Dashboard,
  Inventory,
  Chat,
  Covid,
  Reports,
  Configuration,
  ContactManagement,
  Notifications,
  Settings,
  TechHelp,
  ListOfMeds,
  Groups,
  MedicineInfo,
  NewMedicine,
  GroupInfo,
  SalesReport,
  PaymentsReport,
  NewGroup,
} from "./Sections/Sections";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Suppliers from "./Sections/ContactManagement/Suppliers/Suppliers";
import App from "./App";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="/inventory/listofmedicines" element={<ListOfMeds />} />
        <Route
          path="/inventory/listofmedicines/:medicineId"
          element={<MedicineInfo />}
        />
        <Route path="/inventory/groups/:groupName" element={<GroupInfo />} />
        <Route
          path="/inventory/listofmeds/addnewmedicine"
          element={<NewMedicine />}
        />
        <Route path="/inventory/medicineGroups" element={<Groups />} />
        <Route path="/inventory/groups" element={<Groups />} />
        <Route
          path="/inventory/medicinegroups/addnewgroup"
          element={<NewGroup />}
        />
        <Route path="/listofmeds" element={<ListOfMeds />} />
        <Route path="/listofmeds/:medicineId" element={<MedicineInfo />} />

        {/* Report Routes */}
        <Route path="reports" element={<Reports />} />
        <Route path="/reports/salesreport" element={<SalesReport />} />
        <Route path="/reports/paymentreport" element={<PaymentsReport />} />

        <Route path="chatwithothers" element={<Chat />} />
        <Route path="covid-19" element={<Covid />} />
        <Route path="configuration" element={<Configuration />} />
        <Route path="contactmanagement" element={<ContactManagement />} />
        <Route
          path="contactmanagement/suppliers/:supplierId"
          element={<Suppliers />}
        />
        <Route path="notifications" element={<Notifications />} />
        <Route path="applicationSettings" element={<Settings />} />
        <Route path="getTechnicalHelp" element={<TechHelp />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);
