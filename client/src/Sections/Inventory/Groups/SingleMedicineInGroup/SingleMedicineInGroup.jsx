import React, { useState } from "react";
import { useContext } from "react";
import Assets from "../../../../Assets/Assets";
import { dataFlowContext } from "../../../../App";
import "./SingleMedicineInGroup.css";

const SingleMedicineInGroup = ({ data, setRefetchRequired }) => {
  const [removeFromGroupModal, setRemoveFromGroupModal] = useState(false);
  const { setOverlay, modals, setModals, setLoading } =
    useContext(dataFlowContext);

  const showModal = () => {
    setRemoveFromGroupModal(true);
    setOverlay(true);
    setModals(true);
  };

  const removeModal = () => {
    setOverlay(false);
    setRemoveFromGroupModal(false);
    setModals(false);
  };

  const removeMedicineFromGroup = () => {
    setLoading(true);
    removeModal();
    fetch(
      `${process.env.REACT_APP_API_ROOT_URL}/changeMedicineGroup/${data.medicineId}/24`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.text())
      .then((responseText) => {
        console.log(responseText);
        setLoading(false);
        setRefetchRequired(true);
      });
  };

  return (
    <>
      <div className="flex Singlemedicinegroup">
        <p className="p__poppins">{data.medicineName}</p>
        <p className="p__poppins">{data.inStock}</p>
        <div className="flex__container" onClick={showModal}>
          <img src={Assets.Trash} alt="Dustbin Icon" />
          <p className="p__poppins">Remove From Group</p>
        </div>
      </div>
      <div className="divider" />
      {removeFromGroupModal && modals && (
        <div className="remove-from-group flex-v">
          <img
            src={Assets.Close}
            alt="Close"
            onClick={removeModal}
            className="cursor"
          />
          <p className="confirmation-text">
            Are you sure you want to remove {data.medicineName} from group{" "}
            {data.medicineGroup.groupName} ? The Medicine's group will be Unset.
          </p>
          <div className="flex space-between">
            <input
              type="submit"
              value="Yes"
              onClick={removeMedicineFromGroup}
            />
            <p className="cancel cursor" onClick={removeModal}>
              Cancel
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleMedicineInGroup;
