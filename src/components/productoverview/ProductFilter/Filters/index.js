import React from "react";
import Colors from "../Filters/Colors";
import Designer from "../Filters/Designer";
import Standard from "../Filters/Standard";

const TermFilter = ({ label, name, terms }) => {
  const isChecked = (name, value) => {
    return Array.isArray(this.$route.query[name])
      ? this.$route.query[name].includes(value)
      : this.$route.query[name] === value;
  };
  const filterChange = (e, name) => {
    this.$emit("changed", {
      name,
      value: e.target.value,
      checked: e.target.checked,
    });
  };
  return (
    <div className="product-filter">
      <h5>{label}</h5>
      {name == "color" && (
        <Colors name={name} terms={terms} isChecked={isChecked} />
      )}
      {name == "designer" && <Designer name={name} terms={terms} />}
      {name !== "colors" && name !== "designer" && (
        <Standard name={name} terms={terms} />
      )}
    </div>
  );
};

export default TermFilter;
