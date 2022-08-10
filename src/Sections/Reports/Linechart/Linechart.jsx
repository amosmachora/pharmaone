import React, { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./LineChart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { dataFlowContext } from "../../../App";

const LineChart = ({ selectedUserName, selectedGroup }) => {
  const { salesList } = useContext(dataFlowContext);
  const [labels, setLabels] = useState([]);
  const [amountValues, setAmountValues] = useState([]);
  const [sales, setSales] = useState(
    salesList.slice(salesList.length - 10, salesList.length)
  );

  const amountValuesForChart = () =>
    setAmountValues(sales.map((sale) => sale.amount));

  const saleDatesForChart = () => setLabels(sales.map((sale) => sale.saleDate));

  useEffect(() => {
    if (selectedUserName === "All Users") {
      amountValuesForChart();
      saleDatesForChart();
    } else {
      const filteredSalesList = sales.filter(
        (sale) => sale.user.userName === selectedUserName
      );
      setLabels(filteredSalesList.map((sale) => sale.saleDate));
      setAmountValues(filteredSalesList.map((sale) => sale.amount));
    }
  }, [selectedUserName]);

  /**
   * Labels-> An array of strings on the x axis.
   * Dataset - > The data you are working with .
   */

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );
  const data = {
    labels: labels.map((label) => label.substring(0, 10)),
    datasets: [
      {
        label: "Sales",
        data: amountValues,
        borderColor: "#03A9F5",
        fill: true,
        backgroundColor: "rgb(16, 156, 241 , 0.3)",
        borderWidth: 2,
        hoverBorderColor: "rgb(255,196,208)",
      },
    ],
  };
  const options = {
    tension: 0.4,
    title: {
      display: true,
      text: "linechart",
    },
    scales: {
      y: [
        {
          display: true,
          stacked: true,
          ticks: {
            beginAtZero: true,
            steps: 10,
            stepValue: 5,
            min: 0,
            max: 100,
          },
        },
      ],
    },
  };
  //TODO Mke background linear gradient
  return (
    <div className="line-chart__container">
      <Line data={data} options={options} draggable={true} />
    </div>
  );
};

export default LineChart;
