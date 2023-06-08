import React from "react";
import "./Select.css";

const Select = () => {
  return (
    <div className="flex__container">
      <select name="Revenue" className="Revenue">
        <option value="Jan2022">Jan 2022</option>
        <option value="Feb2022">Feb 2022</option>
        <option value="Mar2022">Mar 2022</option>
        <option value="Apr2022">Apr 2022</option>
        <option value="May2022">May 2022</option>
        <option value="June2022">June 2022</option>
        <option value="July2022">July 2022</option>
        <option value="Aug2022">Aug 2022</option>
        <option value="Sept2022">Sept 2022</option>
        <option value="Oct2022">Oct 2022</option>
        <option value="Nov2022">Nov 2022</option>
        <option value="Dec2022">Dec 2022</option>
      </select>
    </div>
  );
};

export default Select;
