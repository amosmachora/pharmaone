import React, { useContext } from "react";
import "./NewMedicine.css";
import { SectionName } from "../../../../Components/Components";
import { useForm } from "react-hook-form";
import { dataFlowContext } from "../../../../App";

const NewMedicine = () => {
  const { groupsList, groupNames, setLoading } = useContext(dataFlowContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const submittingGroup = groupsList.find(
      (group) => group.groupName === data.groupName
    );
    delete data.groupName;
    data.medicineGroup = {
      groupId: submittingGroup.groupId,
    };
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_ROOT_URL}/addMedicine`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((message) => {
        console.log(message);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  };
  const title = {
    main: "Add New Medicine",
    sub: "*All fields are mandatory, except mentioned as (optional).",
    complex: "level2",
    source1: "Inventory",
    source2: "List of medicines",
  };

  return (
    <div className="padding-around">
      <SectionName title={title} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="medicineaddform flex-v "
      >
        <div className="flex space-between medicineName">
          <label htmlFor="medicineName">
            <p>Medicine Name</p>
            <input {...register("medicineName", { required: true })} />
            {errors.medicineName && (
              <p className="input-error">Medicine name is required.</p>
            )}
          </label>
          <label htmlFor="medicineId">
            <p>Medicine Id</p>
            <input {...register("medicineId")} />
          </label>
          <label htmlFor="price">
            <p>Price</p>
            <input type="number" {...register("price")} />
          </label>
        </div>
        <div className="flex space-between medicineGroup">
          <label htmlFor="medicineGroup">
            <p>Medicine Group</p>
            <select
              name="selectFormMedicineGroup"
              id="selectFormMedicineGroup"
              {...register("groupName", { required: true })}
            >
              <option value="" defaultValue hidden>
                -Select Group-
              </option>
              {groupNames.map((group, index) => {
                return (
                  <option value={group} key={index}>
                    {group}
                  </option>
                );
              })}
            </select>
            {errors.groupName && (
              <p className="input-error"> Please select a group.</p>
            )}
          </label>
          <label htmlFor="medicineQuantity">
            <p>Quantity in Number</p>
            <input
              type="number"
              {...register("inStock", { valueAsNumber: true })}
            />
          </label>
        </div>
        <label htmlFor="howtouse" className="howtouse">
          <p>How to Use</p>
          <textarea {...register("howToUse")} />
        </label>
        <label htmlFor="sideEffects" className="sideeffects">
          <p>Side Effects</p>
          <textarea {...register("sideEffects")} />
        </label>

        <input type="submit" id="submitnewmedicine" />
      </form>
    </div>
  );
};

export default NewMedicine;
