import React , {useState} from "react";
import Header from "../components/common/header/Header";
import divisiondata from '../api/divisions.json'
import districtdata from '../api/districts.json'
import DistrictInput from "../components/Inputs/DistrictInput";
import DivisionInput from "../components/Inputs/DivisionInput";
import FilterSearchBar from "../components/FilterSearch/FilterSearch";
import Resultset from "../components/FilterSearch/Resultset";
const Services = ()=>{
return(
    <div>
        
        <Header />
        <FilterSearchBar />
        
    </div>
)
}
export default Services;