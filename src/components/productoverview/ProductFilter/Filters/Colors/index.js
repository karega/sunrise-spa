import React from "react";
import "./style.css"

const Colors = ({ terms, name, isChecked }) => {
  return <div>
      {
          terms.map(term => {
              return(
                <ul>
                <li>
                  <label>
                    <input type="checkbox" name={name} value={term.term} checked={()=> isChecked(name,term.term)}
                    //   v-on:change="filterChange($event, name)" 
                      />
                      &nbsp;<span className={`color ${term.term}`}>X</span>&nbsp;
                      <span>{term.term}</span>&nbsp;
                      <span className="facet-count">{term.productCount}</span>
                  </label>
                </li>
              </ul>
              )
          })
      }
  </div>;
};

export default Colors;
