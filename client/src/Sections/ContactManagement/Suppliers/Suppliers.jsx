import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Assets from "../../../Assets/Assets";
import { SectionName } from "../../../Components/Components";
import { dataFlowContext } from "../../../App";
import "./Suppliers.css";

const Suppliers = () => {
  const params = useParams();
  const { suppliers } = useContext(dataFlowContext);
  const [supplier, setSupplier] = useState(
    suppliers.filter((supplier) => supplier.supplierId === params.supplierId)
  );

  const title = {
    main: "Suppliers",
    sub: "Quick view of a medicine supplier",
  };

  return (
    <div className="padding-around suppliers">
      <SectionName title={title} />
      <div className="flex space-between supplier-info">
        <div>
          <p>Supplier Name</p>
          <p className="supplier-title">{supplier[0].supplierName}</p>
        </div>
        <div>
          <p>Supplier Id</p>
          <p className="supplier-id">{supplier[0].supplierId}</p>
        </div>
      </div>
      <p className="send-mail">Send Mail</p>
      <a href={`mailto:${supplier[0].supplierEmail}`}>
        <img src={Assets.Mail} alt="Mail" className="cursor" />
      </a>
    </div>
  );
};

export default Suppliers;
