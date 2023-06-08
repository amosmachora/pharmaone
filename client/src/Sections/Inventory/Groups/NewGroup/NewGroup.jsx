import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { dataFlowContext } from "../../../../App";
import { SectionName } from "../../../../Components/Components";
import "./NewGroup.css";

const NewGroup = () => {
  const { register, handleSubmit } = useForm();
  const { handleSuccessCalls, setLoading, setRefetchRequired } =
    useContext(dataFlowContext);
  const title = {
    main: "Create new group",
    sub: "*All fields are mandatory, except mentioned as (optional).",
    complex: "level2",
    source1: "Inventory",
    source2: "Medicine Groups",
  };

  const addGroup = (data) => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_ROOT_URL}/addNewGroup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((responseMessage) => {
        setLoading(false);
        handleSuccessCalls(responseMessage);
        setRefetchRequired(true);
      });
  };

  return (
    <>
      <div className="padding-around NewGroup__container">
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
      </div>
    </>
  );
};

export default NewGroup;
