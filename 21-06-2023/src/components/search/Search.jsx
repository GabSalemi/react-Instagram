import "./index.css";
import { useState } from "react";

const Search = ({photos, method}) => {

 
    
    return (
        <input type="text" onChange={method} className="search__bar" placeholder="🔎︎ Search"/>
    )
    }

  

export default Search;