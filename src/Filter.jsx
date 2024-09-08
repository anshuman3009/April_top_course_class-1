function Filter(props)
{
    let filterData=props.filterData;
    let category=props.category;
    let setcategory=props.setcategory;
    function helper(title)
    {
        setcategory(title);
    }
    return(
       <>
       {category}
       {
        filterData.map((data)=>(
            <button  onClick={ ()=> helper(data.title)}>{data.title}</button>
        ))
       }
       </>
    )
}

export default Filter;