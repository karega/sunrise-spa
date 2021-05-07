import React from "react";
import HoverDropdown from "../../common/HoverDropdown";
import "./TopBar.scss";
import { useTranslation } from "react-i18next";
import Translation from "./TopBar.json"
import clsx from "clsx";


const TopBar = ({show, toggleFilter}) => {
  const { t, i18n } = useTranslation();
  const language = "en";

  React.useEffect(()=>{
    i18n.addResourceBundle(language, "topBar", Translation)
  },[])

  const [sort, changeSort ] = React.useState(null)
  const sortItems = [
    { id: null, name: t(`topBar:${language}.recommended`) },
    { id: "newest", name: t(`topBar:${language}.newest`) },
  ];

  return (
    <div className="shop-top-bar pb-15">
      <div className="shop-top-bar-left">
        <div className="shop-top-show">
          <span>Showing 1 of 100 results</span>
        </div>
      </div>
      <div className="shop-top-bar-right">
        <div className="shop-filter">
          <a
            className="shop-filter-active"
            href="#"
            onClick={() => toggleFilter(!show)}
          >
            {t(`topBar:${language}.filter`)}
            {show && <i className="fa fa-angle-up"></i>}
            {!show && <i className="fa fa-angle-down"></i>}
          </a>
        </div>
        <HoverDropdown data-test="sort-selector">
          <span>
            {t(`topBar:${language}.sortBy`)}
            <i className="fa fa-angle-down angle-down"></i>
            <i className="fa fa-angle-up angle-up"></i>
          </span>
          <ul>
            {
              sortItems.map((item)=>{
                return (
                  <li
                    key={item.id}
                    className={clsx({'active': sort === item.id })}
                    onClick={()=> changeSort(item.id)}
                  >
                    <a href="#">{item.name}</a>
                  </li>
                )
              })
            }
          </ul>
        </HoverDropdown>
      </div>
    </div>
  );
};

export default TopBar;
