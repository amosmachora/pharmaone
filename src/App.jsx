import React, { useEffect, useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Assets from "./Assets/Assets";
import NavBar from "./Components/NavBar/NavBar";
import Chase from "./Components/Pill/Chase";
import MenuLarge from "./Sections/Menus/MenuLarge/MenuLarge";
import MenuSmall from "./Sections/Menus/MenuSmall/MenuSmall";
import { useUpdateLogger } from "./Utilities/UpdateLogger";

export const dataFlowContext = createContext();

const App = () => {
  const [inventoryStatus, setInventoryStatus] = useState("Good");
  const [revenue, setRevenue] = useState(0);
  const [availableMeds, setAvailableMeds] = useState(0);
  const [medicineShortage, setMedicineShortage] = useState(-1);
  const [noOfGroups, setNoOfGroups] = useState(0);
  const [soldMedicine, setSoldMedicine] = useState(45);
  const [generatedInvoices, setGeneratedInvoices] = useState(13);
  const [noOfSuppliers, setNoOfSuppliers] = useState(0);
  const [noOfUsers, setNoOfUsers] = useState(0);
  const [noOfCustomers, setNoOfCustomers] = useState(4);
  const [frequentlyBoughtItem, setFrequentlyBoughtItem] = useState("");
  const [payments, setPayments] = useState(0);
  const [medicineList, setMedicineList] = useState([]);
  const [groupsList, setGroupsList] = useState([]);
  const [groupNames, setGroupNames] = useState([]);
  const [salesList, setSalesList] = useState([]);
  const [amountSold, setAmountSold] = useState(0);
  const [activeTab, setActiveTab] = useState("");
  const [activeChildTab, setActiveChildTab] = useState("");
  const [inventoryOn, setInventoryOn] = useState(false);
  const [reportsOn, setReportsOn] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const [modals, setModals] = useState(false);
  const [loading, setLoading] = useState(false);
  const [suppliers, setSuppliers] = useState([]);
  const [refetchRequired, setRefetchRequired] = useState(false);
  const [menuLarge, setMenuLarge] = useState(true);

  useUpdateLogger(medicineList);

  //fetch suppliers
  const fetchSuppliers = () => {
    fetch(`${process.env.REACT_APP_API_ROOT_URL}/suppliers/getAllSuppliers`)
      .then((res) => res.json())
      .then((data) => {
        setSuppliers(data);
      });
  };

  //fetch users
  const fetchUsers = () => {
    fetch(`${process.env.REACT_APP_API_ROOT_URL}/getAllUsers`)
      .then((res) => res.json())
      .then((data) => setUsersList(data))
      .catch((error) => failedFetchRetrying(error));
  };

  //fetch sales
  const fetchSales = () => {
    fetch(`${process.env.REACT_APP_API_ROOT_URL}/getListOfSales`)
      .then((res) => res.json())
      .then((data) => setSalesList(data))
      .catch((error) => failedFetchRetrying(error));
  };

  //fetch Medicine
  const fetchMedicine = () => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_ROOT_URL}/getallmedicine`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMedicineList(data);
        setLoading(false);
      })
      .catch((error) => failedFetchRetrying(error));
  };

  //fetch groups
  const fetchGroups = () => {
    fetch(`${process.env.REACT_APP_API_ROOT_URL}/getallgroups`)
      .then((res) => res.json())
      .then((data) => {
        return setGroupsList(data);
      })
      .catch((error) => failedFetchRetrying(error));
  };

  const fetchFromApi = () => {
    fetchGroups();
    fetchMedicine();
    fetchSales();
    fetchUsers();
    fetchSuppliers();
  };

  useEffect(() => {
    console.log(process.env.REACT_APP_API_ROOT_URL);
    //Try Vercel
    fetchFromApi();
  }, []);

  useEffect(() => {
    if (refetchRequired) {
      fetchFromApi();
    }
  }, [refetchRequired]);

  useEffect(() => {
    setPayments(salesList.length);
    calculateTotalRevenue();
    setSoldMedicine(salesList.length);
  }, [salesList]);

  useEffect(() => {
    setNoOfSuppliers(suppliers.length);
  }, [suppliers]);

  useEffect(() => {
    setNoOfUsers(usersList.length);
  }, [usersList]);

  useEffect(() => {
    setAvailableMeds(medicineList.length);
  }, [medicineList]);

  useEffect(() => {
    setNoOfGroups(groupsList.length);
    getGroupOptions();
  }, [groupsList]);

  const calculateTotalRevenue = () => {
    const totalRevenue = salesList.reduce((currentTotal, sale) => {
      return sale.amount + currentTotal;
    }, 0);

    setAmountSold(totalRevenue);
  };

  //Runs only on fail
  const failedFetchRetrying = (error) => {
    console.log("Retrying fetch");
    console.log(error);
    setTimeout(() => {
      fetchMedicine();
    }, 500);
  };

  const getSpecificMedicineWithId = (number) => {
    const filteredData = medicineList.find((medicine) => {
      return medicine.medicineId === number;
    });

    return filteredData;
  };

  const getSpecificGroupWithName = (name) => {
    const filteredData = groupsList.find((group) => {
      return group.groupName === name;
    });
    return filteredData;
  };

  //Fetch group names for group options
  const getGroupOptions = () => {
    const groupNames = groupsList.map((group) => {
      return group.groupName;
    });
    setGroupNames(groupNames);
  };

  const getMedicinesWithShortage = () => {
    setMedicineShortage(
      medicineList.filter((medicine) => medicine.inStock === 0).length
    );
  };

  const getMostBoughtMedicine = () => {
    const sortedMedicineList = medicineList.sort((a, b) =>
      a.lifetimeSales > b.lifetimeSales
        ? 1
        : b.lifetimeSales > a.lifetimeSales
        ? -1
        : 0
    );

    setFrequentlyBoughtItem(
      sortedMedicineList[sortedMedicineList.length - 1].medicineName
    );
  };

  useEffect(() => {
    getMedicinesWithShortage();
    if (medicineList.length > 0) {
      getMostBoughtMedicine();
    }
  }, [medicineList]);

  const flowingData = {
    refetchRequired,
    setRefetchRequired,
    inventoryStatus,
    revenue,
    availableMeds,
    medicineShortage,
    noOfGroups,
    soldMedicine,
    generatedInvoices,
    noOfSuppliers,
    noOfUsers,
    noOfCustomers,
    frequentlyBoughtItem,
    setInventoryStatus,
    setRevenue,
    setAvailableMeds,
    setMedicineShortage,
    setSoldMedicine,
    setGeneratedInvoices,
    setNoOfSuppliers,
    setNoOfCustomers,
    setFrequentlyBoughtItem,
    getSpecificMedicineWithId,
    getSpecificGroupWithName,
    medicineList,
    groupNames,
    groupsList,
    salesList,
    amountSold,
    activeTab,
    activeChildTab,
    inventoryOn,
    reportsOn,
    setActiveTab,
    setInventoryOn,
    setActiveChildTab,
    setReportsOn,
    setModals,
    setOverlay,
    setLoading,
    usersList,
    modals,
    suppliers,
    dataGroup: [
      {
        icon: Assets.Healthy,
        status: inventoryStatus,
        name: "Inventory Status",
        linkTo: "reports",
        accentColor: "#01A768",
        bgColor: "#01A7684D",
        activeTab: "reports-active",
      },
      {
        icon: Assets.Revenue,
        status: revenue,
        name: "Revenue :",
        select: true,
        linkTo: "reports",
        accentColor: "#FED600",
        bgColor: "#FED6004D",
        rs: true,
        activeTab: "reports-active",
      },
      {
        icon: Assets.AvailableMeds,
        status: availableMeds,
        name: "Medicines Available",
        linkTo: "inventory",
        accentColor: "#03A9F5",
        bgColor: "#03A9F54D",
        activeTab: "inventory-active",
      },
      {
        icon: Assets.Danger,
        status: -Math.abs(medicineShortage),
        name: "Medicine Shortage",
        linkTo: "listofmeds",
        accentColor: "#F0483E",
        bgColor: "#F0483E4D",
        activeTab: "medslist",
      },
      {
        icon: Assets.MedicalGreen,
        status: noOfGroups,
        name: "Medicine Groups",
        linkTo: "inventory/groups",
        accentColor: "#01A768",
        bgColor: "#01A7684D",
        activeTab: "groups",
      },
      {
        icon: Assets.AvailableMeds,
        status: availableMeds,
        name: "Medicines Available",
        linkTo: "inventory/listofmedicines",
        accentColor: "#03A9F5",
        bgColor: "#03A9F54D",
        activeTab: "medslist",
      },
    ],
    dataGroup2: [
      {
        groupTitle: "Inventory",
        linkTo: "Configuration",
        value1: availableMeds,
        value2: noOfGroups,
        text1: "Total no of Medicines",
        text2: "Medicine Groups",
        activeTab: "configuration-active",
      },
      {
        groupTitle: "Quick Report",
        select: true,
        value1: soldMedicine,
        value2: generatedInvoices,
        text1: "Qty of Medicines Sold",
        text2: "Invoices Generated",
      },
      {
        groupTitle: "My Pharmacy",
        linkTo: "user management",
        value1: noOfSuppliers,
        value2: noOfUsers,
        text1: "Total no of Suppliers",
        text2: "Total no of Users",
      },
      {
        groupTitle: "Customers",
        linkTo: "Customers",
        value1: noOfCustomers,
        value2: frequentlyBoughtItem,
        text1: "Total no of Customers",
        text2: "Frequently bought item",
      },
    ],
    dataGroup3: [
      {
        icon: Assets.Revenue,
        status: revenue,
        name: "Total Sales Report",
        linkTo: "reports/salesreport",
        accentColor: "#FED600",
        bgColor: "#FED6004D",
        rs: true,
        activeTab: "sales-report",
      },
      {
        icon: Assets.Healthy,
        status: payments,
        name: "Payments Report",
        linkTo: "reports/paymentreport",
        accentColor: "#01A768",
        bgColor: "#01A7684D",
        activeTab: "payment-report",
      },
    ],
  };

  //TODO Make a function to dynamically get the months.

  return (
    <>
      {overlay === true ? (
        <div
          className="overlay"
          onClick={() => {
            setOverlay(false);
            setModals(false);
          }}
        />
      ) : null}
      {loading && (
        <div className="overlay loading">
          <Chase />
        </div>
      )}
      <div className="App flex">
        <dataFlowContext.Provider value={flowingData}>
          {menuLarge ? (
            <MenuLarge setMenuLarge={setMenuLarge} />
          ) : (
            <MenuSmall setMenuLarge={setMenuLarge} />
          )}
          <div className="Pharmacy__right">
            <NavBar />
            <div className="Pharmacy__body">
              <Outlet />
            </div>
          </div>
        </dataFlowContext.Provider>
      </div>
    </>
  );
};

export default App;
