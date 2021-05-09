import React from "react";
import PageProductDetail from "../components/productdetail/PageProductDetail";
import { useParams } from "react-router-dom";

const Products = () => {
    const {slug, sku} = useParams();
    return (
        <PageProductDetail sku={sku} slug={slug}/>
    )
}

export default Products;