import { useState } from "react";
import { useEffect } from "react";
import NavBar from "./NavBar";
import Filter from "./Filter";
import Cards from "./Cards";
import { apiurl } from "./data";
import { filterData } from "./data";
import Spinner from "./Spinner";
function App()
{
  const [courses,setcourse]=useState({});
  const [category,setcategory]=useState(filterData[0].title);
  const [showspinner,setspinner]=useState(false);
  let url=apiurl;
  async function getdata()
  {
    setspinner(true);
    let response=await fetch(url);
    let output= await response.json();
    console.log(output.data);
    setcourse(output.data);
    console.log("HI");
    console.log(courses);
    setspinner(false);
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
    { showspinner? <Spinner/>:<Cards courses={courses} category={category}></Cards>}
    </>
  )
}

export default App;