import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import {toast} from "react-toastify";
import Spinner from "./Spinner";
function Card(props)
{
    let course=props.course;
    let likedcourse=props.likedcourse;
    let setlikedcourse=props.setlikedcourse;
    function helper()
    {
        // LOGIC
        if(likedcourse.includes(course.id))
        {
            setlikedcourse((prev)=> prev.filter((cid)=> (cid!=course.id)));
            toast.warning("Like is Removed");
        }
        else
        {
            if(likedcourse.length==0)
            {
                setlikedcourse([course.id]);
            }
            else
            {
                setlikedcourse((prev)=>[...prev,course.id]);
            }
            toast.success("Course is Liked");
        }
    }
    return(
        <>
            <h1>{course.title}</h1>
            <img src={course.image.url}></img>
            <div>
                {
                course.description.length>100?
                    (course.description.substr(0,100))+"...":
                    (course.description)
                }
            </div>
            <button onClick={helper}>
                {
                    likedcourse.includes(course.id)?
                    <FcLike />:
                    <FcLikePlaceholder />
                }
            </button>

        </>
    )
}

export default Card;