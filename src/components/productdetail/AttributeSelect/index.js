import React from "react";
import "./AttributeSelect.scss"
const AttributeSelect = ({name, values}) => {
    return (
        <div className="pro-details-size">
        <span style={{marginLeft: '3px'}}>{ name }</span>
        <select
        //   v-model="selectedValue"
          className="select-product-detail"
          data-test={`attribute-select-${name}`}
        >
          {
              values.map((value) => {
                  return(
                    <option
                    data-test="attribute-select-option"
                    key={value}
                  >
                    { value }
                  </option>
                  )
              })
          }
        </select>
      </div>
    )
}

export default AttributeSelect;