import { useState } from "react";
import Card from "./Card";
function Cards(props)
{
    let courses=props.courses;
    let category=props.category;
    const [likedcourse,setlikedcourse]=useState([]);
    function helper()
    {
        if(category=="All")
        {
            let newarray=[];
            Object.values(courses).forEach(array =>
            {
                array.forEach(courseData =>
                {
                    newarray.push(courseData);
                })
            })
            return newarray;
        }
        else
        {
            return courses[category];
        }
    }
    return (
        <>
        {
           helper().map((course)=>(
            <Card 
            course={course}
            likedcourse={likedcourse}
            setlikedcourse={setlikedcourse}
            ></Card>
           )) 
        }
        </>
    )
}

export default Cards;