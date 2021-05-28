import React from "react";
import SlideDown from "../../common/SlideDown/index";
import './ProductFilter.css';
import TermFilter from './Filters'

const ProductFilter = ({ show , facets }) => {
//    const  getTerms =  (facet) => {
//         if (this.facetFilter[facet.name]) {
//           const filter = this.facetFilter[facet.name].toLowerCase();
//           return facet.terms.filter(
//             ({ term }) => term && term.toLowerCase().includes(filter),
//           );
//         }
//         return facet.terms;
//       }
  return show ? (
    <SlideDown show={show}>
      <div className="product-filter-wrapper" style={{display: "block"}}>
        <div className="row">
          {facets.map((facet) => {
           return  <div key={facet.label} className="custom-col-width-23 mb-20">
             <TermFilter
                name={facet.name}
                label={facet.label}
                component={facet.component} 
                terms={facet.terms}
                // v-on:changed="filterChange"
              /> 
            </div>;
          })}
        </div>
      </div>
    </SlideDown>
  ) : (
    <></>
  );
};

export default ProductFilter;
