import React from "react";
import AttributeSelect from "../AttributeSelect";

const VariantSelector = ({ product, sku }) => {
 
  const [attributes, setAttributes] = React.useState([]);
  const [selected, setSelected] = React.useState({});
  const [variantCombinations, setVariantCombinations] = React.useState([]);

  React.useEffect(()=>{

    const attrs = [["Size","size",["34","36","38","40","42","44","46","48","50","52","54","56","58"]]]

    setAttributes(attrs)
  },[])
  return (
    <div>
      <ul className="list-inline" data-test="variant-selector-list">
        {attributes.map(([id, name , values]) => {
          return (
            <li key={name}>
              <AttributeSelect
                product={product}
                values={values}
                sku={sku}
                name={name}
                id={id}
                selected={selected}
                variantCombinations={variantCombinations}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VariantSelector;
