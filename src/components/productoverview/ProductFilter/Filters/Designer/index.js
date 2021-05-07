import React from "react";

const Designer = ({ terms, name, isChecked }) => {
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
                       &nbsp;<span className={`${term.term}`}></span>&nbsp;
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

export default Designer;
