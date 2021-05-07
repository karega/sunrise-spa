import React from "react";
import "./ProductList.scss";
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import TopBar from "../TopBar/index";
import { useTranslation } from "react-i18next"
import Translation from "./ProductList.json"
import ProductFilter from "../ProductFilter/index"

const ProductList = () => {
  const { t, i18n } = useTranslation();
  const language = "en";
  React.useEffect(()=>{
    i18n.addResourceBundle(language, "productList", Translation)
  },[])

  const [show, toggleShow] = React.useState(false)

  const facets = [
    {
      type: "text",
      dataType: "text",
      missing: 0,
      total: 246,
      other: 0,
      terms: [
        { term: "34", count: 14, productCount: 14 },
        { term: "36", count: 14, productCount: 14 },
        { term: "38", count: 14, productCount: 14 },
        { term: "40", count: 14, productCount: 14 },
        { term: "42", count: 14, productCount: 14 },
        { term: "44", count: 14, productCount: 14 },
        { term: "46", count: 14, productCount: 14 },
        { term: "48", count: 14, productCount: 14 },
        { term: "50", count: 14, productCount: 14 },
        { term: "52", count: 14, productCount: 14 },
        { term: "54", count: 14, productCount: 14 },
        { term: "56", count: 14, productCount: 14 },
        { term: "58", count: 14, productCount: 14 },
        { term: "L", count: 8, productCount: 8 },
        { term: "M", count: 8, productCount: 8 },
        { term: "S", count: 8, productCount: 8 },
        { term: "XL", count: 8, productCount: 8 },
        { term: "XS", count: 8, productCount: 8 },
        { term: "XXL", count: 8, productCount: 8 },
        { term: "XXS", count: 8, productCount: 8 },
        { term: "XXXL", count: 8, productCount: 8 },
      ],
      name: "size",
      label: "Size",
    },
    {
      type: "lnum",
      dataType: "text",
      missing: 0,
      total: 246,
      other: 0,
      terms: [
        { term: "beige", count: 37, productCount: 4 },
        { term: "black", count: 21, productCount: 2 },
        { term: "blue", count: 55, productCount: 5 },
        { term: "brown", count: 13, productCount: 1 },
        { term: "green", count: 8, productCount: 1 },
        { term: "grey", count: 26, productCount: 2 },
        { term: "multicolored", count: 13, productCount: 1 },
        { term: "pink", count: 34, productCount: 3 },
        { term: "red", count: 13, productCount: 1 },
        { term: "white", count: 13, productCount: 1 },
        { term: "yellow", count: 13, productCount: 1 },
      ],
      name: "color",
      label: "Color",
    },
    {
      type: "enum",
      dataType: "text",
      missing: 0,
      total: 246,
      other: 0,
      terms: [
        { term: "8pm", count: 16, productCount: 2 },
        { term: "cycle", count: 8, productCount: 1 },
        { term: "harriswharf", count: 78, productCount: 6 },
        { term: "michaelkors", count: 26, productCount: 2 },
        { term: "pinko", count: 78, productCount: 6 },
        { term: "sun67", count: 40, productCount: 5 },
      ],
      name: "designer",
      label: "Designer",
    },
  ];
  return (
    <div className="shop-area pb-100">
      {/* <LoadingSpinner /> */}
      <div className="custom-container">
        <TopBar
        toggleFilter={toggleShow}
        // @change-sort="changeSort"
         show={show}
        // v-bind:sort="sort"
        // v-bind:count="products.count"
        // v-bind:offset="products.offset"
        // v-bind:total="products.total"
        />
       <ProductFilter 
        facets={facets}
        // :facetFilter="facetFilter"
        // @filter-change="facetFilterChange"
        //  @channel-change="channelChange"
        // :allChannels="allChannels"
        show={show}
      /> 
        <div className="shop-wrapper" v-if="products.results.length">
          <div className="row">
            {/* <ProductThumbnail
            @open-modal="openModal"
            v-for="product in products.results"
            data-test="product-list"
            :key="product.id"
            :product="product"
          />
        </div>
        <Pagination
          :pageSize="limit"
          :total="totalProducts"
          :page="page"
          @pagechanged="changePage"
        /> */}
          </div>

          <div>
            <div className="empty-results-container">
              <span className="empty-results" data-test="empty-results">
              {t(`productList:${language}.notFound`)}
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="empty-results-container">
            <span className="empty-results" data-test="category-not-found">
              {t(`productList:${language}.categoryNotFound`)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
