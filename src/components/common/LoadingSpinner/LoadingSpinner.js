import React from "react"
import "./style.css"
import Loading from "../../../assets/img/loading.svg"

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
    <img src={Loading} alt="load"/>
  </div>
  )
}
 

export default LoadingSpinner;

