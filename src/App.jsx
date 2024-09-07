import { useState } from "react";
import { useEffect } from "react";
import NavBar from "./NavBar";
import Filter from "./Filter";
import Cards from "./Cards";
import { apiurl } from "./data";
import { filterData } from "./data";
function App()
{
  const [courses,setcourse]=useState(null);
  const [category,setcategory]=useState(filterData[0].title);
  let url=apiurl;
  async function getdata()
  {
    let response=await fetch(url);
    let output= await response.json();
    setcourse(output.data);
  }
  useEffect(()=>
  {
    getdata();
  },[])
  return (
    <>
    <NavBar></NavBar>
    <Filter 
    filterData={filterData}
    category={category}
    setcategory={setcategory}>
    </Filter>
    <Cards></Cards>
    </>
  )
}

export default App;