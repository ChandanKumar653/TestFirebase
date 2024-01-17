'use Client'
import React from "react"
import variables from "./variables.module.scss";
import ProductHome from "./productHome/PoductHomePage"

const Content = () =>{
    return(
        <div className={variables.productContent}>
            <ProductHome/>
        </div>
    )
}

export default Content