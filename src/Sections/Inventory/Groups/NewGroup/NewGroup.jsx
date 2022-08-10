import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Assets from "../../../../Assets/Assets";
import { SectionName, Spinner } from "../../../../Components/Components";
import "./NewGroup.css";

const NewGroup = () => {
  const { register, handleSubmit } = useForm();
  const [spinner, setSpinner] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [successConfirmation, setSuccessConfirmation] = useState(false);
  const title = {
    main: "Create new group",
    sub: "*All fields are mandatory, except mentioned as (optional).",
    complex: "level2",
    source1: "Inventory",
    source2: "Medicine Groups",
  };

  const addGroup = (data) => {
    setSpinner(true);
    fetch(`${process.env.REACT_APP_API_ROOT_URL}/addNewGroup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((responseMessage) => {
        setSuccessMessage(responseMessage);
        setSpinner(false);
        setSuccessConfirmation(true);
      });
    setTimeout(() => {
      setSuccessConfirmation(false);
    }, 3000);
  };

  return (
    <>
      <div className="Inventory__container NewGroup__container">
        {spinner === true ? (
          <>
            <div className="spinnerContainer">
              <Spinner />
            </div>
          </>
        ) : null}
        <SectionName title={title} />
        <form className="form__container" onSubmit={handleSubmit(addGroup)}>
          <div className="flex__container-v">
            <label htmlFor="groupName">Group Name</label>
            <input type="text" {...register("groupName")} id="groupName" />
          </div>
          <div className="flex__container-v">
            <label htmlFor="groupDescription">Group Description</label>
            <textarea
              type="text"
              {...register("groupDescription")}
              id="groupDescription"
            />
            <input type="submit" />
          </div>
        </form>
        {successConfirmation === true ? (
          <div className="success-confirmation  flex__container">
            <img src={Assets.Tick} alt="tick" />
            <p>{successMessage}</p>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default NewGroup;
